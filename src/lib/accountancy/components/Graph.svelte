<script>
    import { onMount } from "svelte";
    import { PieChart } from "chartist";

    let chart = null;

    $: onValuesChange(totals, categories);
    
    function onValuesChange()
    {
        if (!chart) return;

        chart.update(getChartData());
    }

    function getChartData()
    {
        const values = categories.map(c => totals[c.id]);
        const total = values.reduce((acc, val) => acc + Math.abs(val));
        return {
            series: values.map(v => Math.abs(v) * 100 / total),
            labels: categories.map(c => c.name)
        }
    }

    onMount(async () => {
        chart = new PieChart(
            "#chart",
            getChartData(),
            {
                donut: true,
                donutWidth: 30,
                donutSolid: true,
                startAngle: 270,
                showLabel: true,
            }
        );
    });

    export let totals = {};
    export let categories = [];
</script>

<div id="chart" />
