<script>
    import Categories from "@app/categories/Categories.svelte";
    import AccountDetails from "./AccountDetails.svelte";

    import { currentAccount, transactionsRecap} from "./_store";
    import Transactions from "./transactions/Transactions.svelte";
</script>

<svelte:head>
    <title>MePloutos - Account</title> 
</svelte:head>

<div class="columns is-variable is-1 mb-0">
    <div class="column pb-2">
        <AccountDetails account={$currentAccount} transactionsRecap={$transactionsRecap}/>
    </div>
    <div class="column pb-2">
        <Categories transactionsRecap={$transactionsRecap} />
    </div>
</div>
<div>
    <Transactions accountId={$currentAccount?.id}/>
</div>