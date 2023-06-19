<script>
    import { confirm } from "@global/dialogs";
    import { investments } from "./store";
    import investmentsService from "@lib/services/overview/investments";

    import InvestmentCreateUpdateModal from "./InvestmentCreateUpdateModal.svelte";

    let modal = null;
    $: investmentsRecap = investmentsService.getInvestmentsRecap($investments);

    function deleteInvestments(_investment) {
        confirm
            .show(
                `Are you sure you want to delete the subscription '${_investment.name}' ?`,
                "Delete investment",
                "is-danger"
            )
            .then((success) => {
                if (!success) return;

                investmentsService.remove(_investment.id);
            });
    }
</script>

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

<div class="columns">
    {#each $investments as investment}
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
