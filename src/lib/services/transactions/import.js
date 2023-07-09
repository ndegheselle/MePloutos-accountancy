import Papa from "papaparse";
import { Transaction } from "@lib/models";

import TransactionsRepo from "@lib/repos/transactions";
import AccountsRepo from "@lib/repos/accounts";

import desktopSave from "@lib/desktop/save.js";

const importOptions = {
    "labanquepostale": {
        "csv": {
            date: [3, 1],
            dayTimespan: 30,
            balance: [4, 1],
            transactions: {
                startLine: 7,
                dateCol: 0,
                descriptionCol: 1,
                valueCol: 2
            }
        }
    }
}

function csvToDatatable(csv) {
    return new Promise((resolve, reject) => {
        Papa.parse(csv, {
            delimiter: ";",
            skipEmptyLines: true,
            complete: function(results) {
                resolve(results.data);
            },
            error: reject
        });
    });
}

function convertToFloat(string)
{
    return parseFloat(string.replace(',', '.'));
}

function convertToDate(string)
{
    let parts = string.split("/");
    let dt = new Date(Date.UTC(parseInt(parts[2], 10),
                  parseInt(parts[1], 10) - 1,
                  parseInt(parts[0], 10)));
                   
    return dt;
}

function convertFromDatable(datatable, options, accountId) {
    let transactions = [];
    let balance = convertToFloat(datatable[options.balance[0]][options.balance[1]].replace());
    let date = convertToDate(datatable[options.date[0]][options.date[1]]);
    let dateMin = new Date(date);
    dateMin.setDate(dateMin.getDate() - options.dayTimespan);

    for (let i = options.transactions.startLine; i < datatable.length; i++)
    {
        transactions.push(
            new Transaction(
                convertToDate(datatable[i][options.transactions.dateCol]),
                datatable[i][options.transactions.descriptionCol].trim(),
                convertToFloat(datatable[i][options.transactions.valueCol],
                accountId))
        );
    }

    return {
        balance,
        dateMin: dateMin,
        dateMax: date,
        transactions
    }
}

async function importFile(file, options) {
    switch (options.bank) {
        case 'labanquepostale':
            return convertFromDatable(
                await csvToDatatable(file),
                importOptions[options.bank].csv,
                options.accountId);
    }
}

function filterAlreadyExisting(accountId, lastTransaction, transactionsList) {

    const transacNumberByDate = {};
    // Reverse loop to keep orderNumber logical (oldest to newest)
    for (let i = transactionsList.length - 1; i >= 0; i--) {
        let transaction = transactionsList[i];

        const dateString = transaction.date.toDateString();
        transacNumberByDate[dateString] = (transacNumberByDate[dateString] + 1) || 0;

        transaction.orderNumber = transacNumberByDate[dateString];
        transaction.accountId = accountId;
    }

    transactionsList.sort((a, b) => b.date - a.date || b.orderNumber - a.orderNumber);
    if (!lastTransaction) return transactionsList;
    // XXX : is it possible that a bank add transaction in the past ? -> that actually may append
    // If transactions are too old we don't import it
    if (transactionsList[0].date <= lastTransaction?.date) return [];

    // Don't import the transactions that are already present
    if (lastTransaction) {
        lastTransaction.orderNumber += 1;
        let indexSameDayLastTransaction = null;
        for (let i = transactionsList.length - 1; i >= 0; i--) {

            // Search last imported
            if (transactionsList[i].date.getTime() == lastTransaction.date.getTime() &&
                transactionsList[i].description == lastTransaction.description &&
                transactionsList[i].value == lastTransaction.value) {

                transactionsList = transactionsList.slice(0, i);
                break;
            }

            if (transactionsList[i].date.getTime() == lastTransaction.date.getTime()) {
                // Keep same day as last index so that we can resolve specific cases
                if (!indexSameDayLastTransaction) indexSameDayLastTransaction = i + 1;

                transactionsList[i].orderNumber += lastTransaction.orderNumber;
            }

            // Safe guard / optimisation since bank can change transactions names between two imports
            if (transactionsList[i].date > lastTransaction.date) {
                transactionsList = transactionsList.slice(0, indexSameDayLastTransaction || i);
                break;
            }
        }
    }

    return transactionsList;
}

async function importTransactions(file, options)
{
    let { balance, dateMin, dateMax, transactions } = await importFile(file, options);
    const lastTransaction = await TransactionsRepo.getMostRecent();
    const newTransactions = filterAlreadyExisting(options.accountId, lastTransaction, transactions);

    if (!newTransactions.length) return {count: 0};

    TransactionsRepo.createAll(newTransactions);
    AccountsRepo.updateBalance(options.accountId, balance);

    // Keep all imported files localy
    if (options.saveImportedFile)
        desktopSave.saveImportedFile(file, options.bank);

    return {
        count: newTransactions.length,
    };
}

export default {
    importTransactions
};