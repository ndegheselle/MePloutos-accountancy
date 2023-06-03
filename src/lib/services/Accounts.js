import { createAccount, removeAccount } from "../repos/accounts";

function save(_account)
{
    return createAccount(_account);
}

function remove(_accountId)
{
    removeAccount(_accountId);
}

export default {
    save,
    remove
}