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
    return db.subscriptions.update(subscription.id, subscription);
}

// Delete subscription
export function removeSubscription(subscriptionId)
{
    return db.subscriptions.delete(subscriptionId);
}