import { BaseRepo } from '@base/db/BaseRepo';

export const SubscriptionsRepo = new BaseRepo("subscriptions");
export class Subscription
{
    constructor(_name)
    {
        this.name = _name || "";
        this.price = 0;
        this.dueEvery = 1;
    }
}
