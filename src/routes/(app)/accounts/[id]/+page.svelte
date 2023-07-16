<script>
    import Categories from "@app/categories/Categories.svelte";
    import AccountDetails from "./AccountDetails.svelte";

    import { currentAccount, transactionsRecap, selectedTransactions} from "./_store";
    import Transactions from "./transactions/Transactions.svelte";
    import transactionsService from "@lib/services/transactions";
    
    let selectedRecap = null;
    $: {
        
        selectedRecap = transactionsService.getTransactionsRecap(Array.from($selectedTransactions, ([key, value]) => value) || []);
    }
</script>

<svelte:head>
    <title>MePloutos - Account</title> 
</svelte:head>

<div class="columns is-variable is-1 mb-0">
    <div class="column pb-2">
        <AccountDetails account={$currentAccount} transactionsRecap={$transactionsRecap}/>
    </div>
    <div class="column pb-2">
        <div class="flex-list">
            <Categories transactionsRecap={$transactionsRecap} selectedRecap={selectedRecap}/>
        </div>
    </div>
</div>
<div>
    <Transactions accountId={$currentAccount?.id}/>
</div>