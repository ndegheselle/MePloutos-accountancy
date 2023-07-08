import { BaseRepo } from '@lib/base/db/BaseRepo';
import TransactionsRepo from "./transactions.js"

class AccountsRepo extends BaseRepo
{
    constructor()
    {
        super("accounts");
    }

    updateBalance(_accountId, _balance)
    {
        return this.table.update(_accountId, { balance: _balance });
    }

    remove(_accountId)
    {
        TransactionsRepo.removeByAccount(_accountId);
        return super.remove(_accountId);
    }
}

export default new AccountsRepo();