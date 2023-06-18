<script>
    import { subscriptions } from "./store";
    import subscriptionsService from "@lib/services/overview/subscriptions";

    $: subscriptionsRecap = subscriptionsService.getSubscriptionsRecap($subscriptions);
</script>

<a class="box" href="/subscriptions">
    <div class="columns is-mobile">
        <div class="column has-text-right">
            <span class="is-size-1 title-placement title mb-0"
                >{subscriptionsRecap.number}</span
            >
            <span class="is-size-6 has-text-grey-lighter title-placement"
                >Subscriptions</span
            >
        </div>
        <div class="column flex-container">
            <span>
                <span class="title mb-0 has-text-danger">{subscriptionsRecap.perMonth.toLocaleString(undefined, {
                    currency: "EUR",
                    style: "currency",
                })}</span>
                <span class="title-placement is-size-6 has-text-grey-lighter">per month</span>
            </span>
        </div>
    </div>
</a>

<style>
    .title-placement {
        display: block;
        line-height: 1.1;
    }
</style>
