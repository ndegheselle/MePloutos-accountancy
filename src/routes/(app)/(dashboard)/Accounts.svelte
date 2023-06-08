<script>
    import { accounts } from "./store";
    import Money from "@components/Money.svelte";
    import AccountCreateUpdateModal from "../accounts/AccountCreateUpdateModal.svelte";
    import { params } from "@lib/store";
    import { context } from "@global/contextMenu";

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

<div class="panel p-4 mb-2">
    <div class="panel-block flex-container p-0">
        <span class="has-text-grey-lighter">Accounts</span>
        <button class="button is-small is-light" on:click={() => modal.show()}>
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
                    class="fa-{params.favoriteAccountId == account.id
                        ? 'solid'
                        : 'regular'} fa-folder"
                    style="color: {account.color}"
                />
            </span>
            <div class="flex-container">
                <span>{account.name}</span>
                <Money value={account.balance} />
            </div>
        </a>
    {/each}
</div>

<AccountCreateUpdateModal bind:modal />
