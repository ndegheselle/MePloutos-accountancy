<script>
    import { onMount } from "svelte";
    import { PieChart } from "chartist";
    import { categories } from "@lib/store";

    let chart = null;

    $: {
        if (chart) chart.update(getChartData($categories, values));
    }

    function getChartData(_categories, _values)
    {
        _categories = _categories.filter(cat => !!_values[cat.id]);
        const total = _categories.reduce((acc, cat) => acc + Math.abs(_values[cat.id]), 0);
        return {
            series: _categories.map(cat => {
                return {
                    value: Math.abs(_values[cat.id]) * 100 / total,
                    className: `category-${cat.id}`
                }
            }),
            labels: _categories.map(cat => cat.name)
        }
    }

    onMount(async () => {
        chart = new PieChart(
            ".ct-chart",
            [],
            {
                donut: true,
                donutWidth: 60,
                donutSolid: true,
                startAngle: 270,
                showLabel: true,
            }
        );
    });

    export let values = {};
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