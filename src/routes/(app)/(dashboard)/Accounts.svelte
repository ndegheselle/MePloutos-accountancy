<script>
    import { params } from "@lib/store";
    import { accounts } from "./_store";

    import { context } from "@global/dialogs/contextMenu.js";
    import Money from "@components/Money.svelte";
    import CreateUpdateModal from "@components/layout/CreateUpdateModal.svelte";

    import { AccountsRepo, Account } from "@lib/db/accounts.js";

    function showAccountContext(event, _account) {
        context.show({ x: event.pageX, y: event.pageY }, [
            {
                title: "Set as favorite",
                icon: "fa-regular fa-star",
                action: () => {
                    $params.favoriteAccountId = _account.id;
                },
            },
        ]);
    }

    let modal = null;
</script>

<div class="panel p-4 mb-0 accounts-container">
    <div class="panel-block flex-container p-0">
        <span class="has-text-grey-lighter">Accounts</span>
        <button class="button is-small is-light" on:click={() => modal.show(new Account())}>
            <span class="icon is-small">
                <i class="fa-solid fa-plus" />
            </span>
        </button>
    </div>

    {#each $accounts as account}
        <a
            class="panel-block"
            href="/accounts/{account.id}"
            on:contextmenu|preventDefault={(e) => {
                showAccountContext(e, account);
            }}
        >
            <span class="panel-icon">
                <i
                    class="fa-{$params.favoriteAccountId == account.id
                        ? 'solid'
                        : 'regular'} fa-folder"
                    style="color: {account.color}"
                />
            </span>
            <div class="flex-container">
                {#if $params.favoriteAccountId == account.id}
                    <b>{account.name}</b>
                {:else}
                    <span>{account.name}</span>
                {/if}
                <Money value={account.balance} />
            </div>
        </a>
    {/each}
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

<style>
    .accounts-container {
        min-height: 15rem;
    }
</style>
