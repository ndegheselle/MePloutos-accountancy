import { transactions } from "../store"

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

function imports(file, options)
{
    return 0;
}

export default {
    updateCategory,
    imports
}