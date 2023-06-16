<script>
    import { onMount } from "svelte";
    import { PieChart } from "chartist";
    import { categoriesMap } from "@lib/store";

    $: {
        if (chart && transactionsRecap.categoriesValues)
            chart.update(getChartData($categoriesMap, transactionsRecap));
    }

    function getChartData(_categoriesMap, _transactionsRecap) {
        return {
            series: _transactionsRecap.categoriesValues.map((cat) => {
                return {
                    value:
                        (Math.abs(cat.value) * 100) /
                            _transactionsRecap.totals.total || 1,
                    className: `category-${cat.id}`,
                };
            }),
            labels: _transactionsRecap.categoriesValues.map(
                (cat) => _categoriesMap.get(cat.id).name
            ),
        };
    }

    onMount(async () => {
        chart = new PieChart(
            ".ct-chart",
            { series: [], labels: [] },
            {
                donut: true,
                donutWidth: 40,
                donutSolid: true,
                startAngle: 270,
                showLabel: true,
            }
        );
    });

    let chart = null;
    let clazz = "";
    export { clazz as class };
    export let transactionsRecap = {};
</script>

<div class="box flex-auto-height {clazz}">
    <span class="has-text-grey-lighter box-title">Categories</span>
    {#if transactionsRecap}
        <div class="ct-chart" />
    {:else}
        <div class="flex-centered p-5">
            <span class="has-text-grey">No values</span>
        </div>
    {/if}
</div>

<style>
    .ct-chart {
        height: 95%;
    }
</style>
