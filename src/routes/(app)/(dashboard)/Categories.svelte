<script>
    import { onMount } from "svelte";
    import { PieChart } from "chartist";

    import { categories } from "@lib/accountancy/store";

    let chart = null;

    $: {
        if (chart) chart.update(getChartData($categories));
    }

    function getChartData(categories)
    {
        const total = categories.reduce((acc, cat) => acc + Math.abs(cat.total), 0);
        return {
            series: categories.map(cat => {
                return {
                    value: Math.abs(cat.total) * 100 / total,
                    className: `category-${cat.id}`
                }
            }),
            labels: categories.map(cat => cat.name)
        }
    }

    onMount(async () => {
        chart = new PieChart(
            ".ct-chart",
            getChartData($categories),
            {
                donut: true,
                donutWidth: 60,
                donutSolid: true,
                startAngle: 270,
                showLabel: true,
            }
        );
    });
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