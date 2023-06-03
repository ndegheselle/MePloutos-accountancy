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
   
}

export function saveTransactionsBulks()
{
    
}

// get transactions by account id and filters (start date, end date)
export function getTransactionsByAccount(_accountId, _endDate)
{
    return db.transactions.where(["accountId", "date"]).above(_accountId).toArray();
}