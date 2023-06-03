import { db } from '@lib/base/indexDB.js';
import {liveQuery} from "dexie";

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

export function getAllAccountsLive()
{
    return liveQuery(
        () => db.accounts.toArray()
      );
}

// Get account by id
export function getAccountById(_accountId)
{
    return db.accounts.get(_accountId);
}