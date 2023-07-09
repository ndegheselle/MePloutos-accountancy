<script>
    import { confirm  } from "@global/dialogs/Confirm.js";
    import { subscriptions } from "./_store";
    import subscriptionsService from "@lib/services/tracking/subscriptions";

    import SubscriptionCreateUpdateModal from "./SubscriptionCreateUpdateModal.svelte";

    let modal = null;
    $: subscriptionsRecap =
        subscriptionsService.getSubscriptionsRecap($subscriptions);

    function deleteSubscription(_subscription) {
        confirm.show(`Are you sure you want to delete the subscription '${_subscription.name}' ?`, 
        "Delete subscription", "is-danger").then((success) => {
            if (!success) return;
            
            subscriptionsService.remove(_subscription.id);
        });
    }
</script>

<svelte:head>
    <title>MePloutos - Subscriptions</title> 
</svelte:head>

<div class="box is-flex">
    <div class="flex-container">
        <span class="text-header">
            <span class="is-size-1 title mb-0">{subscriptionsRecap.number}</span
            >
            <span class="is-size-6 has-text-grey-lighter ml-2"
                >Subscriptions</span
            >
        </span>

        <span class="text-header">
            <span class="title mb-0 has-text-link"
                >{subscriptionsRecap.perMonth.toLocaleString(undefined, {
                    currency: "EUR",
                    style: "currency",
                })}</span
            >
            <span class="is-size-6 has-text-grey-lighter ml-2">per month</span>
        </span>

        <span class="text-header">
            <span class="title mb-0 has-text-link"
                >{(subscriptionsRecap.perMonth * 12).toLocaleString(undefined, {
                    currency: "EUR",
                    style: "currency",
                })}</span
            >
            <span class="is-size-6 has-text-grey-lighter ml-2">per year</span>
        </span>
    </div>
    <div class="dropdown is-right my-auto ml-4">
        <div class="dropdown-trigger">
            <button class="button is-small is-light" aria-haspopup="true">
                <span class="icon is-small">
                    <i class="fa-solid fa-ellipsis-vertical" />
                </span>
            </button>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a class="dropdown-item" on:click={() => modal.show()}>
                    <i class="fa-solid fa-plus" /> Add subscription
                </a>
            </div>
        </div>
    </div>
</div>

<div class="columns is-multiline px-2">
    {#each $subscriptions as subscription}
        <div class="column is-one-third p-1">
            <div class="box is-fullheight flex-container">
                <div class="is-fullwidth">
                    <div class="flex-container">
                        <span class="title is-size-4 subscription-title mb-0 ">
                            <i
                                class="fa-solid fa-dollar-sign has-text-grey-lighter"
                            />
                            {subscription.name}
                        </span>
                        <div class="dropdown is-right">
                            <div class="dropdown-trigger">
                                <button
                                    class="button is-small is-light"
                                    aria-haspopup="true"
                                >
                                    <span class="icon is-small">
                                        <i
                                            class="fa-solid fa-ellipsis-vertical"
                                        />
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a
                                        class="dropdown-item"
                                        on:click={() =>
                                            modal.show(subscription)}
                                    >
                                        <i class="fa-solid fa-file-pen mr-1" /> Edit subscription
                                    </a>
                                    <a
                                        class="dropdown-item has-text-danger"
                                        on:click={() => deleteSubscription(subscription)}
                                    >
                                        <i class="fa-solid fa-trash mr-1" /> Delete
                                        subscription
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span class="is-size-4 title mb-0 has-text-link"
                            >{(
                                (subscription.price / subscription.dueEvery)
                            ).toLocaleString(undefined, {
                                currency: "EUR",
                                style: "currency",
                            })}</span
                        >
                        <span class="is-size-6 has-text-grey-lighter"
                            >per month</span
                        >
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>

<SubscriptionCreateUpdateModal bind:modal />

<style>
    .text-header {
        display: flex;
        align-items: center;
    }
    .subscription-title {
        display: block;
    }
</style>
