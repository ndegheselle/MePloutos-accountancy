<script>
    import Money from "@components/miscs/Money.svelte";
    export let transactionsTotals = null;
</script>

<div class="columns is-mobile has-text-centered">
    <div class="column">
        <Money class="title is-spaced" value={transactionsTotals.positiveTotal} />
        <span class="percent has-text-success subtitle is-4"
            >{(transactionsTotals.positiveTotal * 100 / transactionsTotals.total).toFixed(2) || 0} %<i class="fa-solid fa-arrow-trend-up"></i></span
        >
    </div>
    <div class="column summary">
        <Money class="title is-spaced" value={transactionsTotals.negativeTotal} />
        <span class="percent has-text-danger subtitle is-4"
            >{(transactionsTotals.negativeTotal * 100 / transactionsTotals.total).toFixed(2) || 0 } %<i class="fa-solid fa-arrow-trend-down"></i></span
        >
    </div>
</div>

<style>
    .percent {
        display: block;
    }
</style>
