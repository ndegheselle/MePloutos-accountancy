<script>
    import { investments } from "./store";

    $: investmentsRecap = getInvestmentsRecap($investments);

    function getInvestmentsRecap(_investments)
    {
        if (_investments?.length === 0) return {
            number: 0,
            total: 0,
            percentage: 0,
        };
    }
</script>

<div class="box">
    <div class="columns">
        <div class="column">
            <span class="is-size-1 number-of-investments title mb-0">{investmentsRecap.number}</span>
            <span class="is-size-6 has-text-grey-lighter number-of-investments">Investments</span>
        </div>
        <div class="column">
            <span class="title is-spaced">{investmentsRecap.total.toLocaleString(undefined, {
                currency: "EUR",
                style: "currency",
            })}</span>
            <span class="percent subtitle is-4 percent { (investmentsRecap.percentage < 0) ? 'has-text-danger' : 'has-text-success' }"
                >{investmentsRecap.percentage} %<i class="fa-solid fa-arrow-trend-{ (investmentsRecap.percentage < 0) ? 'down' : 'up' }"></i></span
            >
        </div>
    </div>
</div>

<style>
    .percent {
        display: block;
    }
    .number-of-investments {
        display: block;
        line-height: 1.1;
        text-align: right;
    }
</style>
