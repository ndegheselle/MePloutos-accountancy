<script>
    import { onMount } from "svelte";
    import { PieChart } from "chartist";

    onMount(async () => {
        new PieChart(
            ".ct-chart",
            {
                series: [20, 10, 30, 40],
            },
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