import { db } from '@lib/base/indexDB.js';
import { Params } from '@lib/models';

export function getUserParams()
{
    return db.params.get(Params.userId);
}

export function updateUserParams(params)
{
    return db.params.update(Params.userId, params);
}