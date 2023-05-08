<script>
    import { onMount } from "svelte";
    import { PieChart } from "chartist";
    import { categories } from "@lib/store";

    let chart = null;

    $: {
        if (chart) chart.update(getChartData($categories, account));
    }

    function getChartData(_categories, _account)
    {
        _categories = _categories.filter(cat => !!_account.categories[cat.id]);
        return {
            series: _categories.map(cat => {
                return {
                    value: Math.abs(_account.categories[cat.id]) * 100 / _account.recap.total,
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