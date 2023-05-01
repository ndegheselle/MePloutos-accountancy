<script>
    import { transactions } from "@lib/store";

    let total = 0;
    let positiveTotal = 0;
    let negativeTotal = 0;

    $: updateTotals($transactions);

    // TODO : param where you can select the account you want the recap on
    function updateTotals(transactions)
    {
        positiveTotal, negativeTotal = 0;
        for (const transaction of transactions)
        {
            if (transaction.value > 0)
                positiveTotal += transaction.value;
            else
                negativeTotal += transaction.value;
        }

        total = Math.abs(negativeTotal) + positiveTotal;
    }

</script>

<div class="box">
    <span class="has-text-grey-lighter">This month</span>
    <div class="columns is-mobile has-text-centered">
        <div class="column summary">
            <span class="title is-spaced">{positiveTotal.toLocaleString(undefined, {
                currency: "EUR",
                style: "currency",
            })}</span>
            <span class="percent has-text-success subtitle is-4"
                >{Math.round(positiveTotal * 100 / total)} %<i class="fa-solid fa-arrow-trend-up"></i></span
            >
        </div>
        <div class="column summary">
            <span class="title is-spaced">{negativeTotal.toLocaleString(undefined, {
                currency: "EUR",
                style: "currency",
            })}</span>
            <span class="percent has-text-danger subtitle is-4"
                >{Math.round(negativeTotal * 100 / total)} %<i class="fa-solid fa-arrow-trend-down"></i></span
            >
        </div>
    </div>
</div>

<style>
    .percent {
        display: block;
    }
</style>
