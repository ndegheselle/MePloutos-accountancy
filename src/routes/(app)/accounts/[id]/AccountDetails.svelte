<script>
    import { categoriesMap } from "@lib/store";
    import AccountRecap from "@components/AccountRecap.svelte";
    export let account = null;
</script>

<div class="box">
    {#if account}
        <h2 class="title has-text-centered">
            {account.balance.toLocaleString(undefined, {
                currency: "EUR",
                style: "currency",
            })}
        </h2>
        <span class="has-text-grey">{account.name}</span>
        <div class="progress">
            {#each account.categories as category}
                <div
                class="progress-bar"
                style="background-color: {$categoriesMap.get(category.id).color}; width: {(category.value * 100) / account.recap.total}%;"
            />
            {/each}
        </div>
        <AccountRecap account={account}/>
    {/if}
</div>
