<script>
    import { accounts } from "./store";

    $: total = $accounts.reduce((acc, account) => acc + account.balance, 0);
</script>

<div class="box mb-2">
    <span class="has-text-grey-lighter">Total</span>
    <h1 class="title">
        {total.toLocaleString(undefined, {
            currency: "EUR",
            style: "currency",
        })}
    </h1>
    <div class="progress">
        {#each $accounts as account}
            <div
                class="progress-bar"
                style="background-color: {account.color}; width: {account.balance * 100 / total}%;"
            />
        {/each}
    </div>
</div>

<style>
    .progress-bar {
        float: left;
        height: 100%;
    }
</style>
