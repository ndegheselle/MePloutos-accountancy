<script>
    export let transactionsTotals = null;
</script>

<div class="columns is-mobile has-text-centered">
    <div class="column summary">
        <span class="title is-spaced">{transactionsTotals.positiveTotal.toLocaleString(undefined, {
            currency: "EUR",
            style: "currency",
        })}</span>
        <span class="percent has-text-success subtitle is-4"
            >{Math.round(transactionsTotals.positiveTotal * 100 / transactionsTotals.total)} %<i class="fa-solid fa-arrow-trend-up"></i></span
        >
    </div>
    <div class="column summary">
        <span class="title is-spaced">{transactionsTotals.negativeTotal.toLocaleString(undefined, {
            currency: "EUR",
            style: "currency",
        })}</span>
        <span class="percent has-text-danger subtitle is-4"
            >{Math.round(transactionsTotals.negativeTotal * 100 / transactionsTotals.total)} %<i class="fa-solid fa-arrow-trend-down"></i></span
        >
    </div>
</div>

<style>
    .percent {
        display: block;
    }
</style>
