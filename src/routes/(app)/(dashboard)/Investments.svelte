<script>
    import { investments } from "./_store";
    import Money from "@components/miscs/Money.svelte";
    import investmentsService from "@lib/services/tracking/investments";

    $: investmentsRecap = investmentsService.getInvestmentsRecap($investments);
</script>

<a class="box" href="/investments">
    <div class="columns is-mobile">
        <div class="column">
            <span class="is-size-1 number-of-investments title mb-0">{investmentsRecap.number}</span>
            <span class="is-size-6 has-text-grey-lighter number-of-investments">Investments</span>
        </div>
        <div class="column flex-container">
            <span>
                <Money class="title is-spaced" value={investmentsRecap.total} />
                <span class="percent subtitle is-4 { (investmentsRecap.percentage < 0) ? 'has-text-danger' : 'has-text-success' }"
                    >{investmentsRecap.percentage} %<i class="fa-solid fa-arrow-trend-{ (investmentsRecap.percentage < 0) ? 'down' : 'up' }"></i></span
                >
            </span>
        </div>
    </div>
</a>

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
