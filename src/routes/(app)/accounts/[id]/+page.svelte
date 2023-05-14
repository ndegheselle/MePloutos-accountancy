<script>
    import Categories from "@app/categories/Categories.svelte";
    import AccountDetails from "./AccountDetails.svelte";

    import { accounts, currentAccount, transactions } from "@lib/store";
    import Transactions from "./transactions/Transactions.svelte";

    // if transactions or current account change
    $: updateAccount($transactions, data.accountId);

    function updateAccount(_transactions, accountId)
    {
        $currentAccount = $accounts.find(a => a.id == accountId);
        $currentAccount.update(_transactions);
    }

    export let data;
</script>

<div class="columns is-variable is-1 mb-0">
    <div class="column pb-2">
        <AccountDetails account={$currentAccount}/>
    </div>
    <div class="column pb-2">
        <div class="box is-fullheight mb-2">
            <span class="has-text-grey-lighter">Categories</span>
            <Categories account={$currentAccount}/>
        </div>
    </div>
</div>
<div>
    <Transactions account={$currentAccount}/>
</div>