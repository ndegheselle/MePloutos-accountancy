<script>
    import { accounts } from "@lib/accountancy/store";
</script>

<div class="panel p-4">
    <span class="panel-block has-text-grey-lighter">
        Accounts
    </span>
    {#each $accounts as account}
    <a class="panel-block" href="/accounts/{account.id}">
        <span class="panel-icon">
            <i class="fa-regular fa-folder" style="color: {account.color}" ></i>
        </span>
        <div
            class="flex-container is-justify-content-space-between"
        >
            <span>{account.name}</span>
            <b class="has-text-link">{account.balance.toLocaleString(undefined, {
                currency: "EUR",
                style: "currency"
            })}</b>
        </div>
    </a>
    {/each}
</div>