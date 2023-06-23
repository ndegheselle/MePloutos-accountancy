import { writable, derived } from 'svelte/store';
import { liveQuery } from "dexie";

import { getAccountById } from "@lib/repos/accounts";
import { getTransactionsByAccount } from "@lib/repos/transactions";
import transactionsService from "@lib/services/transactions/transactions";
import { firstDayOfMonth } from "@lib/helpers";

import { useLiveQuery } from "@lib/base/dexieLiveQuery";

let currentAccountId = null;

export function setCurrentAccountId(_accoundId)
{
    currentAccountId = _accoundId;
}

export const filtersTest = writable({
    date: firstDayOfMonth(),
});

const transactionsFilters = {
    date: firstDayOfMonth(),
};
export function setTransactionsDateFilter(_date)
{
    transactionsFilters.date = _date;
    currentTransactions.doQuery();
}

export const currentAccount = liveQuery(() => getAccountById(currentAccountId));
export const currentTransactions = liveQuery(() => getTransactionsByAccount(currentAccountId, transactionsFilters.date));
export const transactionsRecap = derived(currentTransactions,
    $transactions => {
        return transactionsService.getTransactionsRecap($transactions);
    }
);

export const transactionsTest = useLiveQuery(
    (_filterTest) => getTransactionsByAccount(currentAccountId, _filterTest.date), 
    filtersTest, {initialValue: []});