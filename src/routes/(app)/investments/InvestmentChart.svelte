<script>
    import { onMount } from "svelte";
    import { LineChart, FixedScaleAxis } from "chartist";

    $: {
        if (chart && investment?.values)
            chart.update(getChartData(investment.values));
    }

    function getChartData(_values) {
        return {
            series: [
                {
                    name: "values",
                    data: _values.map((v) => {
                        return { x: v.date, y: v.value };
                    }),
                },
            ],
            labels: _values.map((v) =>
                v.date.toLocaleString(undefined, {
                    month: "short",
                    day: "numeric",
                })
            ),
        };
    }

    onMount(async () => {
        chart = new LineChart(".ct-chart", { series: [], labels: [] });
    });

    let chart = null;
    export let investment = null;
</script>

<div class="ct-chart" />
