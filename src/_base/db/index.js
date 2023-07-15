import Dexie from 'dexie';

// tuto : https://dexie.org/docs/Tutorial/Svelte
export const db = new Dexie('myDatabase');
db.version(1.4).stores({
    accounts: "++id",
    transactions: "++id, accountId, date, orderNumber",
    categories: "++id",
    projects: "++id",
    investments: "++id",
    subscriptions: "++id",
    params: "++id",
});
db.open();