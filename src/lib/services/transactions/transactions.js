import { transactions } from "@lib/store"
import transactionsRepo from "@lib/repos/transactions";
import accountsRepo from "@lib/repos/accounts";

import { filterAlreadyExisting, importFile } from "./import.js";

function updateCategory(_selectedTransactions, _category)
{
    transactions.update(_transactions => {
        for(let transac of _selectedTransactions)
        {
            transac.categoryId = _category.id;
        }
        return _transactions;
    })
}

async function imports(file, options)
{
    let { balance, dateMin, dateMax, transactions } = await importFile(file, options.bank);
    const lastTransaction = transactionsRepo.getLast();
    const newTransactions = filterAlreadyExisting(options.accountId, lastTransaction, transactions);

    transactionsRepo.saveBulks(newTransactions);
    accountsRepo.updateBalance(options.accountId, balance);
    // update le store
}

function groupTransactions(_transactions)
{
    let groupedTransactions = [];

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