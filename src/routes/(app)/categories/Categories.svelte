<script>
    import { onMount } from "svelte";
    import { PieChart } from "chartist";
    import { categoriesMap } from "@lib/store";

    let chart = null;
    
    $: {
        if (chart && transactionsRecap.categoriesValues) chart.update(getChartData($categoriesMap, transactionsRecap));
    }

    function getChartData(_categoriesMap, _transactionsRecap)
    {
        return {
            series: _transactionsRecap.categoriesValues.map(cat => {
                return {
                    value: (Math.abs(cat.value) * 100 / _transactionsRecap.totals.total) || 1,
                    className: `category-${cat.id}`
                }
            }),
            labels: _transactionsRecap.categoriesValues.map(cat => _categoriesMap.get(cat.id).name)
        }
    }

    onMount(async () => {
        chart = new PieChart(
            ".ct-chart",
            {series: [], labels: []},
            {
                donut: true,
                donutWidth: 40,
                donutSolid: true,
                startAngle: 270,
                showLabel: true,
            }
        );
    });

    export let transactionsRecap = {};
</script>

<div class="ct-chart" />

<style>
    .ct-chart {
        height: 95%;
    }
</style>