<script>
    import { onMount } from "svelte";
    import { PieChart } from "chartist";
    import { categoriesMap } from "@lib/store";
    import CategoryIcon from "./CategoryIcon.svelte";

    $: updateFilters(currentFilter, transactionsRecap);

    $: {
        if (chart && categoriesValues?.length) {
            chart.update(
                getChartData($categoriesMap, categoriesValues, categoriesTotal)
            );
        }
    }

    function updateFilters(_currentFilter, _transactionsRecap) {
        if (!_transactionsRecap.categoriesTotal) return;

        switch (_currentFilter) {
            case "all":
                categoriesTotal = _transactionsRecap.totals.total;
                categoriesValues = _transactionsRecap.categoriesTotal;
                break;
            case "onlyNegatives":
                categoriesTotal = _transactionsRecap.totals.negativeTotal;
                categoriesValues = _transactionsRecap.categoriesNegative;
                break;
            case "onlyPositives":
                categoriesTotal = _transactionsRecap.totals.positiveTotal;
                categoriesValues = _transactionsRecap.categoriesPositive;
                break;
        }
    }

    function getChartData(_categoriesMap, _categoriesValues, _total) {
        return {
            series: _categoriesValues.map((cat) => {
                return {
                    value: (Math.abs(cat.value) * 100) / Math.abs(_total) || 1,
                    className: `category-${cat.id}`,
                };
            }),
            labels: _categoriesValues.map((cat) =>
                cat.value.toLocaleString(undefined, {
                    currency: "EUR",
                    style: "currency",
                })
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

    let currentFilter = "onlyNegatives";
    let categoriesValues = [];
    let categoriesTotal = 0;

    let chart = null;
    let clazz = "";
    export { clazz as class };
    export let transactionsRecap = {};
</script>

<div class="box  {clazz}">
    <div class="flex-container">
        <span class="has-text-grey-lighter box-title">Categories</span>
        <div class="dropdown is-right">
            <div class="dropdown-trigger">
                <button class="button is-small is-light" aria-haspopup="true">
                    <span class="icon is-small">
                        <i class="fa-solid fa-filter" />
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a
                        class="dropdown-item {currentFilter == 'all'
                            ? 'is-active'
                            : ''}"
                        on:click={() => (currentFilter = "all")}
                    >
                        All
                    </a>
                    <a
                        class="dropdown-item {currentFilter == 'onlyNegatives'
                            ? 'is-active'
                            : ''}"
                        on:click={() => (currentFilter = "onlyNegatives")}
                    >
                        Only negatives
                    </a>
                    <a
                        class="dropdown-item {currentFilter == 'onlyPositives'
                            ? 'is-active'
                            : ''}"
                        on:click={() => (currentFilter = "onlyPositives")}
                    >
                        Only positives
                    </a>
                </div>
            </div>
        </div>
    </div>
    {#if transactionsRecap}
        <div class="ct-chart" />
        <div class="columns is-gapless is-multiline categories-legend">
            {#each categoriesValues as cat}
                <div class="column is-one-third is-flex is-align-items-center">
                    <CategoryIcon categoryId={cat.id} class="small-icon"/>
                    <span class="ml-2">{$categoriesMap.get(cat.id).name}</span>
                </div>
            {/each}
        </div>
    {:else}
        <div class="flex-centered p-5">
            <span class="has-text-grey">No values</span>
        </div>
    {/if}
</div>

<style>
    .categories-legend span {
        font-size: 0.8rem;
    }
</style>