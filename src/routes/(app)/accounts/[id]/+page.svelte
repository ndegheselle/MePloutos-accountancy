<script>
    import Categories from "@components/Categories.svelte";
    import AccountDetails from "./AccountDetails.svelte";

    import { accounts } from "@lib/store";

    let account = null;
    $: updateAccount( $accounts, data.accountId);

    function updateAccount(_accounts, accountId)
    {
        account = _accounts.find(a => a.id == accountId);
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