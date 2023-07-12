<script>
    import TransactionsService from "@lib/services/transactions";
    import {TransactionsRepo} from "@lib/db/transactions";
    import { context } from "@components/dialogs/contextMenu.js";
    import { confirm } from "@components/dialogs/Confirm.js";

    import Money from "@components/miscs/Money.svelte";
    import CategoryIcon from "@app/categories/CategoryIcon.svelte";

    import CategorySelectionModal from "@app/categories/CategorySelectionModal.svelte";
    import ModalImport from "./ModalImport.svelte";

    import { transactionsFilters } from "../_store";
    import { firstDayOfMonth } from "@base/helpers";

    let groupedTransactions = [];
    let categoryModal = null;
    let importModal = null;
    let currentFilter = 0;

    $: groupedTransactions =
        TransactionsService.groupTransactionsByDate(transactions);

    function showTransactionContext(event, _transaction) {
        context.show({ x: event.pageX, y: event.pageY }, [
            {
                title: "Set category",
                icon: "fa-solid fa-tag",
                action: setSelectedTransactionCategory,
            },
            {
                title: "Remove",
                icon: "fa-solid fa-trash",
                style: "has-text-danger",
                action: removeSelectedTransactions,
            },
        ]);
    }

    function showImportModal() {
        importModal.show(accountId);
    }

    function setSelectedTransactionCategory() {
        categoryModal.show().then((selectedCategory) => {
            TransactionsRepo.update(
                transactions.filter((t) => t.selected),
                selectedCategory
            );
        });
    }

    function removeSelectedTransactions() {
        const selectedTransactions = transactions.filter((t) => t.selected);
        confirm
            .show(
                `Are you sure you want to delete these transactions (${selectedTransactions.length}) ?`,
                "Delete transactions",
                "is-danger"
            )
            .then((success) => {
                if (success) TransactionsRepo.remove(selectedTransactions);
            });
    }

    function transactionsFilterDate(filter) {
        currentFilter = filter;
        let date = null;
        switch (filter) {
            // Current month
            case 0:
                date = firstDayOfMonth();
                break;
            case 1:
                date = new Date(new Date().setMonth(new Date().getMonth() - 1));
                break;
            case 6:
                date = new Date(new Date().setMonth(new Date().getMonth() - 6));
                break;
            case 12:
                date = new Date(
                    new Date().setMonth(new Date().getMonth() - 12)
                );
                break;
            // All
            default:
                date = null;
        }

        $transactionsFilters.date = date;
    }

    export let accountId = null;
    export let transactions = null;
</script>

<nav class="panel">
    <div class="panel-block flex-container">
        <span class="has-text-grey-lighter">Transactions</span>

        <div>
            <div class="dropdown is-right">
                <div class="dropdown-trigger">
                    <button
                        class="button is-small is-light"
                        aria-haspopup="true"
                    >
                        <span class="icon is-small">
                            <i class="fa-solid fa-filter" />
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <a
                            class="dropdown-item {currentFilter == 0
                                ? 'is-active'
                                : ''}"
                            on:click={() => transactionsFilterDate(0)}
                        >
                            Current month
                        </a>
                        <a
                            class="dropdown-item {currentFilter == 1
                                ? 'is-active'
                                : ''}"
                            on:click={() => transactionsFilterDate(1)}
                        >
                            1 month
                        </a>
                        <a
                            class="dropdown-item {currentFilter == 6
                                ? 'is-active'
                                : ''}"
                            on:click={() => transactionsFilterDate(6)}
                        >
                            6 month
                        </a>
                        <a
                            class="dropdown-item {currentFilter == 12
                                ? 'is-active'
                                : ''}"
                            on:click={() => transactionsFilterDate(12)}
                        >
                            1 year
                        </a>
                        <a
                            class="dropdown-item {currentFilter == -1
                                ? 'is-active'
                                : ''}"
                            on:click={() => transactionsFilterDate(-1)}
                        >
                            All
                        </a>
                    </div>
                </div>
            </div>
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
                        <a class="dropdown-item" on:click={showImportModal}>
                            <i class="fa-solid fa-file-import" /> Import transactions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {#each groupedTransactions as group}
        <div class="panel-block has-text-grey-light has-background-light">
            {group.date.toLocaleDateString()}
        </div>
        {#each group.transactions as transaction}
            <a
                class="panel-block"
                on:click={() => {
                    transaction.selected = !transaction.selected;
                }}
                on:contextmenu|preventDefault={(e) => {
                    transaction.selected = true;
                    showTransactionContext(e, transaction);
                }}
            >
                <span class="panel-icon">
                    <CategoryIcon
                        categoryId={transaction.categoryId}
                        selected={transaction.selected}
                    />
                </span>
                <div class="flex-container">
                    {transaction.description}
                    <Money value={transaction.value} />
                </div>
            </a>
        {/each}
    {/each}
</nav>

<CategorySelectionModal bind:modal={categoryModal} />
<ModalImport bind:modal={importModal} />
