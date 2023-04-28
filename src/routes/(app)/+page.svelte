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

<section class="p-2">
    <div class="columns is-variable is-1 mb-0">
        <div class="column">
            <div class="box mb-2">
                <span class="has-text-grey-lighter">Total</span>
                <h1 class="title">10 325.50 €</h1>
                <div class="progress">
                    <div
                        class="progress-bar has-background-warning"
                        style="width:40%;"
                    />
                    <div
                        class="progress-bar has-background-success"
                        style="width:30%;"
                    />
                    <div
                        class="progress-bar has-background-danger"
                        style="width:15%;"
                    />
                    <div
                        class="progress-bar has-background-primary"
                        style="width:15%;"
                    />
                </div>
            </div>
            <div class="panel p-4">
                <span class="panel-block has-text-grey-lighter">
                    Accounts
                </span>
                <a class="panel-block" href="#">
                    <span class="panel-icon has-text-warning">
                        <i class="gg-folder" />
                    </span>
                    <div
                        class="flex-container is-justify-content-space-between"
                    >
                        <span>Account 1</span>
                        <b class="has-text-link">1002 €</b>
                    </div>
                </a>
                <a class="panel-block" href="#">
                    <span class="panel-icon has-text-success">
                        <i class="gg-folder" />
                    </span>
                    <div
                        class="flex-container is-justify-content-space-between"
                    >
                        <span>Account 1</span>
                        <b class="has-text-link">1002 €</b>
                    </div>
                </a>

                <a class="panel-block" href="#">
                    <span class="panel-icon has-text-danger">
                        <i class="gg-folder" />
                    </span>
                    <div
                        class="flex-container is-justify-content-space-between"
                    >
                        <span>Account 1</span>
                        <b class="has-text-link">1002 €</b>
                    </div>
                </a>
                <a class="panel-block" href="#">
                    <span class="panel-icon has-text-primary">
                        <i class="gg-folder" />
                    </span>
                    <div
                        class="flex-container is-justify-content-space-between"
                    >
                        <span>Account 1</span>
                        <b class="has-text-link">1002 €</b>
                    </div>
                </a>
            </div>
        </div>
        <div class="column">
            <div class="box is-fullheight">
                <span class="has-text-grey-lighter">Categories</span>
                <div class="ct-chart" />
            </div>
        </div>
    </div>
    <div class="columns is-variable is-1">
        <div class="column">
            <div class="panel p-4">
                <a class="panel-block" href="#">
                    <div class="is-fullwidth">
                        <span>Project 1</span>
                        <progress class="progress mb-0" value="76" max="100"
                            >15%</progress
                        >
                    </div>
                </a>
                <a class="panel-block" href="#">
                    <div class="is-fullwidth">
                        <span>Project 1</span>
                        <progress class="progress mb-0" value="76" max="100"
                            >15%</progress
                        >
                    </div>
                </a>
                <a class="panel-block" href="#">
                    <div class="is-fullwidth">
                        <span>Project 1</span>
                        <progress class="progress mb-0" value="76" max="100"
                            >15%</progress
                        >
                    </div>
                </a>
                <a class="panel-block" href="#">
                    <div class="is-fullwidth">
                        <span>Project 1</span>
                        <progress class="progress mb-0" value="76" max="100"
                            >15%</progress
                        >
                    </div>
                </a>
            </div>
        </div>
        <div class="column">
            <div class="box">
                <span class="has-text-grey-lighter">This month</span>
                <div class="columns is-mobile has-text-centered">
                    <div class="column summary">
                        <span class="title is-spaced">+ 1500 €</span>
                        <span class="percent has-text-success subtitle is-3"
                            >82%</span
                        >
                    </div>
                    <div class="column summary">
                        <span class="title is-spaced">- 1500 €</span>
                        <span class="percent has-text-danger subtitle is-3"
                            >18%</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .percent {
        display: block;
    }

    .progress-bar {
        float: left;
        height: 100%;
    }

    .ct-chart {
        height: 95%;
    }
</style>
