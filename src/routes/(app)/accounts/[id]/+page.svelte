<script>
    import Categories from "@components/Categories.svelte";
    import AccountDetails from "./AccountDetails.svelte";

    import { accounts, currentAccount, transactions } from "@lib/store";

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
        <Categories />
    </div>
</div>