<script>
    import Categories from "@app/categories/Categories.svelte";
    import AccountRecap from "@app/accounts/AccountRecap.svelte";

    import { transactionsRecap } from "./store";

    import AccountsTotal from "./AccountsTotal.svelte";
    import Accounts from "./Accounts.svelte";
    import Projects from "./Projects.svelte";
    import Investments from "./Investments.svelte";
</script>

<div class="columns is-variable is-1">
    <div class="column pb-0">
        <AccountsTotal />
        <Accounts />
    </div>

    <div class="column pb-0">
        <div class="flex-list">
            <Categories transactionsRecap={$transactionsRecap} class="mb-2"/>

            <div class="box">
                <span class="has-text-grey-lighter box-title">Account recap</span>
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

<hr class="mx-5 my-4"/>
<div class="columns is-variable is-1">
    <div class="column pb-0">
        <Projects />
    </div>
    <div class="column">
        <Investments />
    </div>
</div>