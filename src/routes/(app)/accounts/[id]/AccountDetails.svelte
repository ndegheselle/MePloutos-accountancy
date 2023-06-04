<script>
    import { categoriesMap } from "@lib/store";
    import AccountRecap from "../AccountRecap.svelte";

    export let account = null;
    export let transactionsRecap = null;
</script>

<div class="box">
    {#if account && transactionsRecap}
        <h2 class="title flex-container">
            <span>{account.balance.toLocaleString(undefined, {
                currency: "EUR",
                style: "currency",
            })}</span>
            <button class="button is-small is-light">
                <span class="icon is-small">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </span>
            </button>
        </h2>
        <span class="has-text-grey">{account.name}</span>
        <div class="progress">
            {#each transactionsRecap.categoriesValues as category}
                <div
                class="progress-bar"
                style="background-color: {$categoriesMap.get(category.id)?.color}; width: {(category.value * 100) / transactionsRecap.totals.total}%;"
            />
            {/each}
        </div>
        <AccountRecap transactionsTotals={transactionsRecap.totals}/>
    {/if}
</div>
