<script>
    import { accounts } from "@lib/store";
    import Money from "@components/Money.svelte";
    import AccountCreateUpdateModal from "../accounts/AccountCreateUpdateModal.svelte";

    let modal = null;
</script>

<div class="panel p-4 mb-2">
    <div class="panel-block flex-container p-0">
        <span class="has-text-grey-lighter">Accounts</span>
        <button class="button is-small is-light" on:click={() => modal.show()}>
            <span class="icon is-small">
                <i class="fa-solid fa-plus"></i>
            </span>
        </button>
    </div>

    {#each $accounts as account}
        <a class="panel-block" href="/accounts/{account.id}">
            <span class="panel-icon">
                <i
                    class="fa-regular fa-folder"
                    style="color: {account.color}"
                />
            </span>
            <div class="flex-container">
                <span>{account.name}</span>
                <Money value={account.balance}/>
            </div>
        </a>
    {/each}
</div>

<AccountCreateUpdateModal bind:modal />