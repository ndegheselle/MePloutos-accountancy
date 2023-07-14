import { BaseRepoSync } from '@base/db/BaseRepo';

export const SubscriptionsRepo = new BaseRepoSync("subscriptions");
export class Subscription
{
    constructor(_name)
    {
        this.name = _name || "";
        this.price = 0;
        this.dueEvery = 1;
    }
}
