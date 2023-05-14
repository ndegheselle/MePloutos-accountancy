<script>
    export let account = null;
</script>

<div class="columns is-mobile has-text-centered">
    <div class="column summary">
        <span class="title is-spaced">{account.recap.positiveTotal.toLocaleString(undefined, {
            currency: "EUR",
            style: "currency",
        })}</span>
        <span class="percent has-text-success subtitle is-4"
            >{Math.round(account.recap.positiveTotal * 100 / account.recap.total)} %<i class="fa-solid fa-arrow-trend-up"></i></span
        >
    </div>
    <div class="column summary">
        <span class="title is-spaced">{account.recap.negativeTotal.toLocaleString(undefined, {
            currency: "EUR",
            style: "currency",
        })}</span>
        <span class="percent has-text-danger subtitle is-4"
            >{Math.round(account.recap.negativeTotal * 100 / account.recap.total)} %<i class="fa-solid fa-arrow-trend-down"></i></span
        >
    </div>
</div>

<style>
    .percent {
        display: block;
    }
</style>
