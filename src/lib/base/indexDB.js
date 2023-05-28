import Dexie from 'dexie';
import { Account, Transaction, Category  } from '../models';

// tuto : https://dexie.org/docs/Tutorial/Svelte
export const db = new Dexie('myDatabase');
db.version(1).stores({
  accounts: Account.dexieDefinition,
  transactions: Transaction.dexieDefinition,
  categories: Category.dexieDefinition,
});