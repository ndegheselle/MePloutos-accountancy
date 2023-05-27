import { transactions } from "../store"
import { filterAlreadyExisting, importFile } from "../base/import";
import transactionsRepo from "../repos/transactions";
import accountsRepo from "../repos/accounts";

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

export default {
    updateCategory,
    imports
}