import { createAccount, updateAccount, removeAccount } from "../repos/accounts";
import { removeTransactionsByAccount} from "../repos/transactions";

function create(_account)
{
    return createAccount(_account);
}

function update(_account)
{
    return updateAccount(_account);
}

function remove(_accountId)
{
    removeTransactionsByAccount(_accountId);
    removeAccount(_accountId);
}

export default {
    create,
    update,
    remove
}