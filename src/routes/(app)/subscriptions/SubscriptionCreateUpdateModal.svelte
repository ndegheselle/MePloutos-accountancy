<script>
    import { Subscription } from "@lib/models";

    import subscriptionsService from "@lib/services/overview/subscriptions.js";

    function handleClosing() {
        show = false;
    }

    function handleSuccess() {
        if (currentSubscription.id)
            subscriptionsService.update(currentSubscription);
        else
            subscriptionsService.create(currentSubscription);

        handleClosing();
    }

    let edit = false;
    let show = false;
    let currentSubscription = {};

    export const modal = {
        show(_subscription) {
            edit = !!_subscription;
            currentSubscription = _subscription || new Subscription();
            show = true;
        },
    };
</script>

<div class="modal" class:is-active={show} on:closing={handleClosing}>
    <div class="modal-background" />
    <div class="modal-content">
        <div class="box p-0">
            <div class="p-4">
                <span class="has-text-grey-lighter"
                    >{edit ? "Edit subscription" : "Add subscription"}</span
                >

                <div class="field">
                    <div class="control">
                        <label class="label"
                            >Name
                            <input
                                class="input"
                                type="text"
                                bind:value={currentSubscription.name}
                            />
                        </label>
                    </div>
                </div>
                <div class="columns">
                    <div class="field column">
                        <div class="control">
                            <label class="label"
                                >Price
                                <input
                                    class="input"
                                    type="number"
                                    bind:value={currentSubscription.price}
                                />
                            </label>
                        </div>
                    </div>
                    <div class="field column">
                        <label class="label mb-0">Due every</label>
                        <div class="control">
                            <div class="select is-fullwidth">
                                <select bind:value={currentSubscription.dueEvery} class="is-fullwidth">
                                    <option value={1}>Every month</option>
                                    <option value={3}>Every quarter</option>
                                    <option value={6}>Every semester</option>
                                    <option value={12}>Every year</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="is-flex is-justify-content-flex-end p-2">
                <button class="button" aria-label="close">Cancel</button>
                <button class="ml-1 button is-success" on:click={handleSuccess}
                    >{edit ? "Edit" : "Add"}</button
                >
            </footer>
        </div>
    </div>
</div>
