<script>
    import Categories from "@components/Categories.svelte";
    import { accounts, currentAccount, transactions, params } from "@lib/store";
    import AccountsTotal from "./AccountsTotal.svelte";
    import Accounts from "./Accounts.svelte";
    import Projects from "./Projects.svelte";
    import Recap from "./Recap.svelte";

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
    <div class="column pb-2">
        <AccountsTotal />
        <Accounts />
    </div>
    <div class="column pb-2">
        <Categories account={$currentAccount}/>
    </div>
</div>
<div class="columns is-variable is-1">
    <div class="column pb-2">
        <Projects />
    </div>
    <div class="column pb-2">
        <Recap account={$currentAccount}/>
    </div>
</div>