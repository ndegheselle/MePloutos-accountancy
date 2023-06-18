import { db } from '@lib/base/indexDB.js';

// Get all subscriptions
export function getAllSubscriptions()
{
    return db.subscriptions.toArray();
}

// Create new subscription
export function createSubscription(subscription)
{
    return db.subscriptions.add(subscription);
}

// Update subscription
export function updateSubscription(subscription)
{
    return db.subscriptions.update(subscription);
}

// Delete subscription
export function deleteSubscription(subscriptionId)
{
    db.subscriptions.delete(subscriptionId);
}