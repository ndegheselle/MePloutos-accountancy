import { db } from '@lib/base/indexDB.js';

// update transactions categories
export function updateTransactionsCategory(_transactions, _category)
{
    return db.transactions.update(_transactions => {
        for(let transac of _transactions)
        {
            transac.categoryId = _category.id;
        }
        return _transactions;
    });
}

export function getMostRecentTransaction()
{
   throw new Error("Not implemented");
}

export function saveTransactionsBulks()
{
    throw new Error("Not implemented");
}

// remove all transactions linked to a accountid
export function removeTransactionsByAccount(_accountId)
{
    return db.transactions
        .where("accountId")
        .equals(_accountId)
        .delete();
}

// get transactions by account id and filters (start date, end date)
export function getTransactionsByAccount(_accountId, _endDate)
{
    if (!_accountId) return Promise.resolve([]);
    return db.transactions
        .where("accountId")
        .equals(_accountId)
        .and(_transaction => _transaction.date > _endDate)
        .toArray();
}