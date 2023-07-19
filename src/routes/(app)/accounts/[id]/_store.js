import { writable, derived } from 'svelte/store';
import { liveQuery } from "dexie";

import {AccountsRepo} from "@lib/db/accounts";
import {TransactionsRepo} from "@lib/db/transactions";

import transactionsService from "@lib/services/transactions";
import { useLiveQuery } from "@base/db/dexieLiveQuery";
import { firstDayOfMonth } from "@base/helpers";
import { subscribeMultiples } from "@base/svelteHelpers";

export const filters = writable({
    accountId: null,
    date: firstDayOfMonth(),
});
export const hasfilterOnSelection = writable(false);

export const currentAccount = useLiveQuery(
    (_transactionsFilters) => AccountsRepo.getById(_transactionsFilters.accountId),
    filters, { initialValue: [] });

export const currentTransactions = useLiveQuery(
    (_transactionsFilters) => {
        selectedTransactions.set(new Map());
        return TransactionsRepo.getByAccount(_transactionsFilters.accountId, _transactionsFilters.date);
    },
    filters, { initialValue: [] });

export const selectedTransactions = writable(new Map());
export const filteredTransactions = writable([]);

export const transactionsRecap = derived(filteredTransactions,
    $transactions => {
        return transactionsService.getTransactionsRecap($transactions);
    }
);

// Whenever option or selected changed
subscribeMultiples(
    [hasfilterOnSelection, selectedTransactions], 
    ([$hasfilterOnSelection, $selectedTransactions]) => {
        if ($hasfilterOnSelection) 
            filteredTransactions.set(Array.from($selectedTransactions, ([key, value]) => value));
});
// Whenever option or current changed
subscribeMultiples(
    [hasfilterOnSelection, currentTransactions], 
    ([$hasfilterOnSelection, $currentTransactions]) => {
        if (!$hasfilterOnSelection)
            filteredTransactions.set($currentTransactions);
});