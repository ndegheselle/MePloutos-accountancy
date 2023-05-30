import { get, writable, derived } from 'svelte/store';

import { liveQuery } from "dexie";
import { db } from "./base/indexDB";

import accountsService from "./services/accounts";

export const currentAccountId = writable(null);

// #region Databases stores
export const accounts = derived(
  liveQuery(
    () => db.accounts.toArray()
  ),
  $accounts => $accounts || [] 
);

export const categories = derived(
  liveQuery(
    () => db.categories.toArray()
  ),
  $categories => $categories || []
);

export const projects = derived(
  liveQuery(
    () => db.projects.toArray()
  ),
  $projects => $projects || []
);
// #endregion

// #region Derived stores
export const categoriesMap = derived(categories,
    $categories => new Map($categories.map((cat => [cat.id, cat])))
    );

export const currentAccount = derived([accounts, currentAccountId], ([$accounts, $currentAccountId]) => {
  if ($currentAccountId == null) return null;
  return $accounts.find(acc => acc.id == $currentAccountId);
});

// Get current transactions if DB or currentAccountId is updated
export const currentTransactions = derived([
  liveQuery(
    () => db.transactions.where({ accountId: get(currentAccountId) }).toArray()
  ),
  currentAccount
],
  ([$transactions, $currentAccountId]) => $transactions
);

// currentAccountId -> currentAccount -> currentTransactions -> updateAccountTransactions
currentTransactions.subscribe($currentTransactions => {
  let $currentAccount = get(currentAccount);
  if (!$currentAccount) return;
  
  accountsService.updateAccountTransactions($currentAccount, $currentTransactions);
});

// #endregion

// Fixed
export const params = writable({
    favoriteAccount: "2a6f5e8d-5d0f-403c-b318-9faa670fe211",
});