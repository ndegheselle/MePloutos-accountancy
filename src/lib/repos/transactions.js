import { db } from '@lib/base/indexDB.js';

// update transactions categories
export function updateTransactionsCategory(_transactions, _category)
{
    return b.transactions.update(_transactions => {
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

export function getTransactionsByAccountId()
{

}

export function saveTransactionsBulks()
{
    
}