import { db } from '@lib/base/indexDB.js';

export function createAccount(_account)
{
    return db.accounts.add(_account);
}

export function removeAccount(_accountId)
{
    return db.accounts.delete(_accountId);
}

export function updateAccountBalance(_accountId, _balance)
{
    return db.accounts.update(_accountId, { balance: _balance });
}