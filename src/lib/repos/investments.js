import { db } from '@lib/base/indexDB.js';

export function getAllInvestments()
{
    return db.investments.toArray();
}

// Create new investment
export function createInvestment(_investment)
{
    return db.investments.add(_investment);
}

// Update subscription
export function updateInvestment(_investment)
{
    return db.investments.update(_investment.id, _investment);
}

// Delete subscription
export function removeInvestment(_investmentId)
{
    return db.investments.delete(_investmentId);
}