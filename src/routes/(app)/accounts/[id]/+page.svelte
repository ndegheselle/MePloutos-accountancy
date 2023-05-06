<script>
    import Categories from "@components/Categories.svelte";
    import AccountDetails from "./AccountDetails.svelte";

    import { accounts, categories } from "@lib/store";

    let account = null;
    $: updateAccount($accounts, data.accountId);
    $: updateAccountCategories($categories, account);

    function updateAccount(_accounts, accountId)
    {
        account = _accounts.find(a => a.id == accountId);
    }

    function updateAccountCategories(_categories, _account)
    {
        // Get the categories ?
    }

    export let data;
</script>

<div class="columns is-variable is-1 mb-0">
    <div class="column pb-2">
        <AccountDetails account={account}/>
    </div>
    <div class="column pb-2">
        <Categories />
    </div>
</div>