import { writable, derived } from 'svelte/store';
import { liveQuery } from "dexie";

import { getAccountById } from "@lib/repos/accounts";
import { getTransactionsByAccount } from "@lib/repos/transactions";
import transactionsService from "@lib/services/transactions/transactions";

let currentAccountId = null;

export function setCurrentAccountId(_accoundId)
{
    currentAccountId = _accoundId;
}

export const transactionsFilters = writable({
    // 0 = current month
    // -1 = all
    monthsAgo: -1,
});

export const currentAccount = liveQuery(() => getAccountById(currentAccountId));
export const currentTransactions = derived(
    transactionsFilters,
    $filters => {
        return liveQuery(() => getTransactionsByAccount(currentAccountId, $filters.monthsAgo));
    }
);
export const transactionsRecap = derived(currentTransactions,
    $transactions => {
        console.log("transactionsRecap", $transactions)
        return transactionsService.getTransactionsRecap($transactions);
    }
);