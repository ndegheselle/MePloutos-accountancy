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
            {#each accountCategories as category}
                <div
                    class="progress-bar"
                    style="background-color: {category.color}; width: {(category.total * 100) / account.categoriesTotal()}%;"
                />
            {/each}
        </div>
    {/if}
</div>
