import { currentTransactions } from "@lib/store"
import { saveTransactionsBulks, getMostRecentTransaction, updateTransactionsCategory } from "@lib/repos/transactions";
import { updateAccountBalance } from "@lib/repos/accounts";

import { filterAlreadyExisting, importFile } from "./import.js";

function updateCategory(_selectedTransactions, _category)
{
    return updateTransactionsCategory(_selectedTransactions, _category);
}

async function imports(file, options)
{
    let { balance, dateMin, dateMax, transactions } = await importFile(file, options.bank);
    const lastTransaction = getMostRecentTransaction();
    const newTransactions = filterAlreadyExisting(options.accountId, lastTransaction, transactions);

    saveTransactionsBulks(newTransactions);
    updateAccountBalance(options.accountId, balance);
}

function groupTransactions(_transactions)
{
    let groupedTransactions = [];

    if (!_transactions) return groupedTransactions;

    // Work because we know that the transactions are sorted
    let previousDate = new Date(0);
    for (let transaction of _transactions) {
        if (transaction.date.getTime() != previousDate.getTime()) {
            groupedTransactions.push({
                date: transaction.date,
                transactions: [],
            });
            previousDate = transaction.date;
        }
        groupedTransactions[
            groupedTransactions.length - 1
        ].transactions.push(transaction);
    }

    return groupedTransactions;
}

export default {
    updateCategory,
    imports,
    groupTransactions
}