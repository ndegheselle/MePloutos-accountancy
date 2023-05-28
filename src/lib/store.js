import { writable, derived } from 'svelte/store';

import { liveQuery } from "dexie";
import { db } from "./base/indexDB";

export const accounts = liveQuery(
    () => db.accounts.toArray()
  );

export const currentAccount = writable(null);

export const categories = liveQuery(
    () => db.categories.toArray()
  );

export const transactions = liveQuery(
    () => db.transactions.toArray()
  );

export const projects = liveQuery(
    () => db.projects.toArray()
  );

// Derived stores
export const categoriesMap = derived( categories,
    $categories => new Map($categories.map((cat => [cat.id, cat])))
    );

export const params = writable({
    favoriteAccount: "2a6f5e8d-5d0f-403c-b318-9faa670fe211",
});