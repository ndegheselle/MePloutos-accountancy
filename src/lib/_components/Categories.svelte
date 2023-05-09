<script>
    import { onMount } from "svelte";
    import { PieChart } from "chartist";
    import { categoriesMap } from "@lib/store";

    let chart = null;

    $: {
        if (chart) chart.update(getChartData($categoriesMap, account));
    }

    function getChartData(_categoriesMap, _account)
    {
        return {
            series: _account.categories.map(cat => {
                return {
                    value: Math.abs(cat.value) * 100 / _account.recap.total,
                    className: `category-${cat.id}`
                }
            }),
            labels: _account.categories.map(cat => _categoriesMap.get(cat.id).name)
        }
    }

    onMount(async () => {
        chart = new PieChart(
            ".ct-chart",
            {series: [], labels: []},
            {
                donut: true,
                donutWidth: 60,
                donutSolid: true,
                startAngle: 270,
                showLabel: true,
            }
        );
    });

    export let account = {};
</script>

<div class="box is-fullheight">
    <span class="has-text-grey-lighter">Categories</span>
    <div class="ct-chart" />
</div>

<style>
    .ct-chart {
        height: 95%;
    }
</style>