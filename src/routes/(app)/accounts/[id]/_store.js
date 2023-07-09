import { writable, derived } from 'svelte/store';
import { liveQuery } from "dexie";

import AccountsRepo from "@lib/repos/accounts";
import TransactionsRepo from "@lib/repos/transactions";

import transactionsService from "@lib/services/transactions";
import { firstDayOfMonth } from "@lib/helpers";

import { useLiveQuery } from "@lib/base/db/dexieLiveQuery";

let currentAccountId = null;

export function setCurrentAccountId(_accoundId) {
    currentAccountId = _accoundId;
}

export const transactionsFilters = writable({
    // - 1 month
    date: new Date(new Date().setMonth(new Date().getMonth() - 1)),
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