<script>
    import { goto } from "$app/navigation";
    import { categoriesMap } from "@lib/store";
    import { AccountsRepo } from "@lib/db/accounts.js";
    import AccountRecap from "../AccountRecap.svelte";

    import CreateUpdateModal from "@components/layout/CreateUpdateModal.svelte";
    import { confirm } from "@global/dialogs/Confirm.js";

    function deleteAccount() {
        confirm
            .show(
                `Are you sure you want to delete the account '${account.name}' and all linked transactions ?`,
                "Delete account",
                "is-danger"
            )
            .then((success) => {
                if (!success) return;

                AccountsRepo.remove(account.id);
                goto("/");
            });
    }

    let modal = null;

    export let account = null;
    export let transactionsRecap = null;
</script>

<div class="box mb-0">
    {#if account && transactionsRecap}
        <h2 class="title flex-container">
            <span
                >{account.balance.toLocaleString(undefined, {
                    currency: "EUR",
                    style: "currency",
                })}</span
            >
            <div class="dropdown is-right">
                <div class="dropdown-trigger">
                    <button
                        class="button is-small is-light"
                        aria-haspopup="true"
                    >
                        <span class="icon is-small">
                            <i class="fa-solid fa-ellipsis-vertical" />
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <a
                            class="dropdown-item"
                            on:click={() => modal.show(account)}
                        >
                            <i class="fa-solid fa-file-pen mr-1" /> Edit account
                        </a>
                        <a
                            class="dropdown-item has-text-danger"
                            on:click={deleteAccount}
                        >
                            <i class="fa-solid fa-trash mr-1" /> Delete account
                        </a>
                    </div>
                </div>
            </div>
        </h2>
        <span class="has-text-grey">{account.name}</span>
        <div class="progress">
            {#each transactionsRecap.categoriesNegative as category}
                <div
                    class="progress-bar"
                    style="background-color: {$categoriesMap.get(category.id)
                        ?.color}; width: {(category.value * 100) /
                        transactionsRecap.totals.negativeTotal}%;"
                />
            {/each}
        </div>
        <AccountRecap transactionsTotals={transactionsRecap.totals} />
    {/if}
</div>

<CreateUpdateModal
    name="Account"
    repo={AccountsRepo}
    form={[
        [
            {
                prop: "color",
                type: "color",
                class: "is-one-quarter",
            },
            {
                prop: "name",
            },
        ],
    ]}
    bind:modal
/>