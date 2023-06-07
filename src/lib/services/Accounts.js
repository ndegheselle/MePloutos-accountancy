import { uuidv4 } from "../helpers";

import { createAccount, updateAccount, removeAccount } from "../repos/accounts";
import { removeTransactionsByAccount} from "../repos/transactions";

function create(_account)
{
    _account.id = uuidv4();
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