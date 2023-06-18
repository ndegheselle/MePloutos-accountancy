<script>
    import { subscriptions } from "./store";

    $: subscriptionsRecap = getSubscriptionsRecap($subscriptions);

    function getSubscriptionsRecap(_subscriptions) {
        if (_subscriptions?.length === 0)
            return {
                number: 0,
                totalAnnual: 0,
                perMonth: 0,
            };
    }
</script>

<div class="box">
    <div class="columns">
        <div class="column">
            <span class="is-size-1 number-of-investments title mb-0"
                >{subscriptionsRecap.number}</span
            >
            <span class="is-size-6 has-text-grey-lighter number-of-investments"
                >Subscriptions</span
            >
        </div>
        <div class="column flex-centered is-justify-content-start">
            <span class="title mb-0 has-text-danger">{subscriptionsRecap.totalAnnual.toLocaleString(undefined, {
                currency: "EUR",
                style: "currency",
            })}</span>
            <span class="ml-2 is-size-6 has-text-grey-lighter">per month</span>
        </div>
    </div>
</div>

<style>
    .percent {
        display: block;
    }
    .number-of-investments {
        display: block;
        line-height: 1.1;
        text-align: right;
    }
</style>
