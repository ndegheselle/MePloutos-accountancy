import { db } from '@lib/base/indexDB.js';

// update transactions categories
export function updateTransactionsCategory(_transactions, _category)
{
    return db.transactions.where('id').anyOf(_transactions.map(x => x.id)).modify({ categoryId: _category.id });
}

export function getMostRecentTransaction()
{
    return db.transactions.orderBy("date").last();
}

export function saveTransactionsBulks(_transactions)
{
    return db.transactions.bulkAdd(_transactions);
}

// remove all transactions linked to a accountid
export function removeTransactionsByAccount(_accountId)
{
    return db.transactions
        .where("accountId")
        .equals(_accountId)
        .delete();
}

// remove a list of transactions
export function removeTransactions(_transactions)
{
    return db.transactions.bulkDelete(_transactions.map(x => x.id));
}

// get transactions by account id and filters (start date, end date)
export function getTransactionsByAccount(_accountId, _endDate)
{
    if (!_accountId) return Promise.resolve([]);

    // Should be more efficient to filter by date first
    if (_endDate)
    {
        return db.transactions
        .where("date")
        .above(_endDate)
        .and(_transaction => _transaction.accountId === _accountId)
        .toArray();
    }

    return db.transactions
        .where("accountId")
        .equals(_accountId)
        .toArray();
}