import { writable, derived } from 'svelte/store';
import { liveQuery } from "dexie";

import { getAccountById } from "@lib/repos/accounts";
import { getTransactionsByAccount } from "@lib/repos/transactions";
import transactionsService from "@lib/services/transactions/transactions";
import { firstDayOfMonth } from "@lib/helpers";

import { useLiveQuery } from "@lib/base/dexieLiveQuery";

let currentAccountId = null;

export function setCurrentAccountId(_accoundId) {
    currentAccountId = _accoundId;
}

export const transactionsFilters = writable({
    date: firstDayOfMonth(),
});

export const currentAccount = liveQuery(() => getAccountById(currentAccountId));
export const currentTransactions = useLiveQuery(
    (_transactionsFilters) => getTransactionsByAccount(currentAccountId, _transactionsFilters.date),
    transactionsFilters, { initialValue: [] });
export const transactionsRecap = derived(currentTransactions,
    $transactions => {
        return transactionsService.getTransactionsRecap($transactions);
    }
);