import { db } from '@lib/base/indexDB.js';

export function getAllInvestments()
{
    return db.investments.toArray();
}