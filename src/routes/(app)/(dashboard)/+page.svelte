<script>
    import Categories from "@app/categories/Categories.svelte";
    import AccountRecap from "@app/accounts/AccountRecap.svelte";

    import { transactionsRecap } from "./store";

    import AccountsTotal from "./AccountsTotal.svelte";
    import Accounts from "./Accounts.svelte";
    import Projects from "./Projects.svelte";
</script>

<div class="columns is-variable is-1">
    <div class="column">
        <AccountsTotal />
        <Accounts />
    </div>

    <div class="column">
        <div class="flex-list">
            <Categories transactionsRecap={$transactionsRecap} class="mb-2"/>

            <div class="box">
                <span class="has-text-grey-lighter">Account recap</span>
                {#if $transactionsRecap}
                    <AccountRecap transactionsTotals={$transactionsRecap.totals} />
                {:else}
                    <div class="flex-centered p-5">
                        <span class="has-text-grey">No favorite account</span>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>

<h1 class="title">Planning</h1>

<div class="box">
    <div class="flex-centered p-5">
        <span class="has-text-grey">Income</span>
    </div>
</div>

<Projects />

<div class="box">
    <div class="flex-centered p-5">
        <span class="has-text-grey">Investments</span>
    </div>
</div>

<style>

</style>