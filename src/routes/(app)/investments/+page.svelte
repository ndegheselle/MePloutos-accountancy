<script>
    import { confirm } from "@global/dialogs/Confirm";
    import { investments } from "./_store";
    import investmentsService from "@lib/services/overview/investments";

    import InvestmentCreateUpdateModal from "./InvestmentCreateUpdateModal.svelte";

    let modal = null;
    $: investmentsRecap = investmentsService.getInvestmentsRecap($investments);

    function deleteInvestment(_investment) {
        confirm
            .show(
                `Are you sure you want to delete the investment '${_investment.name}' ?`,
                "Delete investment",
                "is-danger"
            )
            .then((success) => {
                if (!success) return;

                investmentsService.remove(_investment.id);
            });
    }

    function getGains(_investment) {
        return _investment.actualValue - _investment.investedValue;
    }
</script>

<svelte:head>
    <title>MePloutos - Investments</title> 
</svelte:head>

<div class="box is-flex">
    <div class="flex-container">
        <span class="text-header">
            <span class="is-size-1 title mb-0">{investmentsRecap.number}</span>
            <span class="is-size-6 has-text-grey-lighter ml-2">Investments</span
            >
        </span>
        <span>
            <span
                class="mr-4 subtitle is-4 {investmentsRecap.percentage < 0
                    ? 'has-text-danger'
                    : 'has-text-success'}"
                >{investmentsRecap.percentage} %<i
                    class="fa-solid fa-arrow-trend-{investmentsRecap.percentage <
                    0
                        ? 'down'
                        : 'up'}"
                /></span
            >
            <span class="title is-spaced"
                >{investmentsRecap.total.toLocaleString(undefined, {
                    currency: "EUR",
                    style: "currency",
                })}</span
            >
        </span>
    </div>
    <div class="dropdown is-right my-auto ml-4">
        <div class="dropdown-trigger">
            <button class="button is-small is-light" aria-haspopup="true">
                <span class="icon is-small">
                    <i class="fa-solid fa-ellipsis-vertical" />
                </span>
            </button>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a class="dropdown-item" on:click={() => modal.show()}>
                    <i class="fa-solid fa-plus" /> Add investment
                </a>
            </div>
        </div>
    </div>
</div>

<div class="columns is-multiline px-2">
    {#each $investments as investment}
        <div class="column is-half p-1">
            <div class="box is-fullheight flex-container">
                <div class="is-fullwidth">
                    <div class="flex-container">
                        <span class="title is-size-4 subscription-title mb-0">
                            <i
                                class="fa-solid fa-chart-line has-text-grey-lighter"
                            />
                            {investment.name}
                        </span>
                        <div class="dropdown is-right">
                            <div class="dropdown-trigger">
                                <button
                                    class="button is-small is-light"
                                    aria-haspopup="true"
                                >
                                    <span class="icon is-small">
                                        <i
                                            class="fa-solid fa-ellipsis-vertical"
                                        />
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a
                                        class="dropdown-item"
                                        on:click={() => modal.show(investment)}
                                    >
                                        <i class="fa-solid fa-file-pen mr-1" /> Edit
                                        investment
                                    </a>
                                    <a
                                        class="dropdown-item has-text-danger"
                                        on:click={() =>
                                            deleteInvestment(investment)}
                                    >
                                        <i class="fa-solid fa-trash mr-1" /> Delete
                                        investment
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex-container">
                        <span class="is-size-4 title mb-0"
                            >{investment.actualValue.toLocaleString(undefined, {
                                currency: "EUR",
                                style: "currency",
                            })}</span
                        >
                        <span
                            class={getGains(investment) < 0
                                ? "has-text-danger"
                                : "has-text-success"}
                        >
                            <i
                                class="fa-solid fa-arrow-trend-{getGains(
                                    investment
                                ) < 0
                                    ? 'down'
                                    : 'up'}"
                            />
                            {(getGains(investment) * 100) / investment.investedValue}% (<span
                                >{getGains(investment).toLocaleString(
                                    undefined,
                                    {
                                        currency: "EUR",
                                        style: "currency",
                                    }
                                )}</span
                            >)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>

<InvestmentCreateUpdateModal bind:modal />

<style>
    .text-header {
        display: flex;
        align-items: center;
    }
    .subscription-title {
        display: block;
    }
</style>
