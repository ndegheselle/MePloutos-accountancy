import Dexie from 'dexie';
import { Account, Transaction, Category, Project  } from '../models';

// tuto : https://dexie.org/docs/Tutorial/Svelte
export const db = new Dexie('myDatabase');
db.version(1).stores({
  accounts: Account.dexieDefinition,
  transactions: Transaction.dexieDefinition,
  categories: Category.dexieDefinition,
  projects: Project.dexieDefinition,
});

db.open().then((db) => {
  // custom logic to initialize DB here
  // insert default values
});