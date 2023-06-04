<script>
    import Categories from "@app/categories/Categories.svelte";
    import AccountRecap from "@app/accounts/AccountRecap.svelte";

    import { favoriteAccount, transactionsRecap } from "./store";

    import AccountsTotal from "./AccountsTotal.svelte";
    import Accounts from "./Accounts.svelte";
    import Projects from "./Projects.svelte";
</script>

<div class="columns is-variable is-1 mb-0">
    <div class="column py-0">
        <AccountsTotal />
        <Accounts />
        <div class="box">
            <span class="has-text-grey-lighter">This month</span>
            {#if $favoriteAccount}
                <AccountRecap transactionsTotals={$transactionsRecap.totals} />
            {:else}
                <div class="flex-centered p-5">
                    <span class="has-text-grey">No favorite account</span>
                </div>
            {/if}
        </div>
    </div>

    <div class="column py-0">
        <div class="box mb-2">
            <span class="has-text-grey-lighter">Categories</span>

            {#if $favoriteAccount}
                <Categories account={$transactionsRecap} />
            {:else}
                <div class="flex-centered p-5">
                    <span class="has-text-grey">No favorite account</span>
                </div>
            {/if}
        </div>
        <Projects />
    </div>
</div>