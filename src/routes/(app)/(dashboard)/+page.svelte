<script>
    import Categories from "@app/categories/Categories.svelte";
    import AccountRecap from "@app/accounts/AccountRecap.svelte";

    import { accounts, currentAccount, transactions, params } from "@lib/store";
    import AccountsTotal from "./AccountsTotal.svelte";
    import Accounts from "./Accounts.svelte";
    import Projects from "./Projects.svelte";

    // if favorite account change
    $: getFavoriteAccount($params.favoriteAccount);

    function getFavoriteAccount(_favAccountId) {
        $currentAccount = $accounts.find(a => a.id == _favAccountId);
        // TODO : Also keep in param which filter get the transactions with
        // And also get transactions from a repo (and everything else)
        $currentAccount.update($transactions);
    }
</script>

<div class="columns is-variable is-1 mb-0">
    <div class="column py-0">
        <AccountsTotal />
        <Accounts />
        <div class="box">
            <span class="has-text-grey-lighter">This month</span>
            <AccountRecap account={$currentAccount}/>
        </div>
    </div>
    <div class="column py-0">
        <div class="box mb-2">
            <span class="has-text-grey-lighter">Categories</span>
            <Categories account={$currentAccount}/>
        </div>
        <Projects />
    </div>
</div>