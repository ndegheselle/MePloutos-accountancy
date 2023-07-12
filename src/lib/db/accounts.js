import { BaseRepo } from '@base/db/BaseRepo';
import {TransactionsRepo} from "./transactions.js"

class AccountsRepository extends BaseRepo
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

export const AccountsRepo = new AccountsRepository();
export class Account
{
    constructor()
    {
        this.name = "";
        this.color = "#DDD";
        this.balance = 0;
    }
}