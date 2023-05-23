import { transactions } from "../store"
import { importFile } from "../base/import";

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
    console.log(transactions);
    // Get transactions that are new compared to actual
    // Add them to the transactions in the store
}

export default {
    updateCategory,
    imports
}