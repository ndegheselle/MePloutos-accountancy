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

export default {
    getSubscriptionsRecap
};