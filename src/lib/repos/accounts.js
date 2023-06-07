import { db } from '@lib/base/indexDB.js';

export function createAccount(_account)
{
    return db.accounts.add(_account);
}

export function removeAccount(_accountId)
{
    return db.accounts.delete(_accountId);
}

export function updateAccount(_account)
{
    return db.accounts.update(_account.id, _account);
}

export function updateAccountBalance(_accountId, _balance)
{
    return db.accounts.update(_accountId, { balance: _balance });
}

export function getAllAccounts()
{
    return db.accounts.toArray();
}

export function getAccountById(_accountId)
{
    if (!_accountId) return Promise.resolve(null);
    return db.accounts.get(_accountId);
}