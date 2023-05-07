<script>
    import Categories from "@components/Categories.svelte";
    import AccountDetails from "./AccountDetails.svelte";

    import { accounts, categories } from "@lib/store";

    let account = null;
    $: updateAccount($accounts, $categories, data.accountId);

    function updateAccount(_accounts, _categories, accountId)
    {
        account = _accounts.find(a => a.id == accountId);
        
        for (let cat of account.categories)
        {
            cat.category = _categories.find(c => c.id == cat.category.id);
        }
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