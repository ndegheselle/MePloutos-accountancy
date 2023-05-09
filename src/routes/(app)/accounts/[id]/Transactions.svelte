<script>
    import { transactions } from "@lib/store";
    import Money from "@components/Money.svelte";

    let groupedTransactions = [];

    $: groupTransactions($transactions);

    function groupTransactions(_transactions) {
        groupedTransactions = [];

        // Work because we know that the transactions are sorted
        let previousDate = new Date(0);
        for (let transaction of _transactions) {
            if (transaction.date.getTime() != previousDate.getTime()) {
                groupedTransactions.push({
                    date: transaction.date,
                    transactions: [],
                });
                previousDate = transaction.date;
            }
            groupedTransactions[
                groupedTransactions.length - 1
            ].transactions.push(transaction);
        }
    }

    export let account = null;
</script>

<nav class="panel">
    <div class="panel-block flex-container">
        <span class="has-text-grey-lighter">Transactions</span>

        <div class="dropdown is-right">
            <div class="dropdown-trigger">
                <button
                    class="button is-small is-light"
                    aria-haspopup="true"
                >
                    <span class="icon is-small">
                        <i class="fa-solid fa-ellipsis-vertical" />
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item"> Import transactions </a>
                </div>
            </div>
        </div>
    </div>
    {#each groupedTransactions as group}
        <div class="panel-block has-text-grey-light has-background-light">
            {group.date.toLocaleDateString()}
        </div>
        {#each group.transactions as transaction}
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true" />
                </span>
                <div class="flex-container">
                    {transaction.description}
                    <Money value={transaction.value} />
                </div>
            </a>
        {/each}
    {/each}
</nav>
