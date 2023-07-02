import { uuidv4 } from "@lib/helpers";

import { createSubscription, updateSubscription, removeSubscription } from "@lib/repos/subscriptions";

// Get subscriptions recap
function getSubscriptionsRecap(_subscriptions) {
    const recap = {
        number: 0,
        totalAnnual: 0,
        perMonth: 0,
    };

    if (_subscriptions?.length === 0) return recap;

    for (const subscription of _subscriptions) {
        recap.number += 1;
        let pricePerMonth = subscription.price / subscription.dueEvery;
        recap.totalAnnual += pricePerMonth * 12;
        recap.perMonth += pricePerMonth;
    }

    return recap;
}

function create(_subscription)
{
    _subscription.id = uuidv4();
    return createSubscription(_subscription);
}

function update(_subscription)
{
    return updateSubscription(_subscription);
}

function remove(_subscriptionId)
{
    return removeSubscription(_subscriptionId);
}

export default {
    getSubscriptionsRecap,
    create,
    update,
    remove
};