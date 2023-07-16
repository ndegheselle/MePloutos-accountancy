import { writable, derived } from 'svelte/store';
import { liveQuery } from "dexie";

import {AccountsRepo} from "@lib/db/accounts";
import {TransactionsRepo} from "@lib/db/transactions";

import transactionsService from "@lib/services/transactions";
import { useLiveQuery } from "@base/db/dexieLiveQuery";
import { firstDayOfMonth } from "@base/helpers";

let currentAccountId = null;

export function setCurrentAccountId(_accoundId) {
    currentAccountId = _accoundId;
}

export const transactionsFilters = writable({
    // - 1 month
    date: firstDayOfMonth(),
});

export const currentAccount = liveQuery(() => AccountsRepo.getById(currentAccountId));

export const currentTransactions = useLiveQuery(
    (_transactionsFilters) => TransactionsRepo.getByAccount(currentAccountId, _transactionsFilters.date),
    transactionsFilters, { initialValue: [] });
export const transactionsRecap = derived(currentTransactions,
    $transactions => {
        return transactionsService.getTransactionsRecap($transactions);
    }
);
export const selectedTransactions = writable(new Map());