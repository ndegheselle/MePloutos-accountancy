<script>
    import Money from "@lib/accountancy/components/Money.svelte";
    import Category from "@lib/accountancy/components/Category.svelte";

    export let categoriesDico;
    export let transaction;
</script>

<section class="flex-container" class:is-selected={transaction.selected}>
    <Category category={categoriesDico[transaction.categoryId]} onlyIcon={true} />
    <span class="has-text-grey description">{transaction.description}</span>
    <span class="balance ml-auto has-text-right">
        <Money value={transaction.value} />
        <span class="date has-text-grey-light"
            >{new Date(transaction.date).toLocaleDateString()}</span
        >
    </span>
</section>


<style lang="scss">
    .is-selected .description {
        color: $grey-darker !important;
    }
    .date {
        display: block;
    }
</style>
