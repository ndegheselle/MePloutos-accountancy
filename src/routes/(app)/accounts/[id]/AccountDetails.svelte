<script>
    import {categories} from "@lib/store";
    export let account = null;
</script>

<div class="box mb-2">
    {#if account}
        <h2 class="title">
            {account.balance.toLocaleString(undefined, {
                currency: "EUR",
                style: "currency",
            })}
        </h2>
        <span class="has-text-grey">{account.name}</span>
        <div class="progress">
            {#each $categories as category}
                {#if account.categories.values.hasOwnProperty(category.id)}
                <div
                    class="progress-bar"
                    style="background-color: {category.color}; width: {(account.categories.values[category.id] * 100) / account.categories.total}%;"
                />
                {/if}
            {/each}
        </div>
    {/if}
</div>
