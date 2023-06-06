<script>
    import Categories from "@app/categories/Categories.svelte";
    import AccountDetails from "./AccountDetails.svelte";

    import { currentAccount, currentTransactions, transactionsRecap } from "./store";
    import Transactions from "./transactions/Transactions.svelte";
</script>

<div class="columns is-variable is-1 mb-0">
    <div class="column pb-2">
        <AccountDetails account={$currentAccount} transactionsRecap={$transactionsRecap}/>
    </div>
    <div class="column pb-2">
        <div class="box is-fullheight mb-2">
            <span class="has-text-grey-lighter">Categories</span>
            <Categories transactionsRecap={$transactionsRecap}/>
        </div>
    </div>
</div>
<div>
    <Transactions transactions={$currentTransactions} accountId={$currentAccount?.id}/>
</div>