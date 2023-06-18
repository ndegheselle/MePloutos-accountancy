import Dexie from 'dexie';
import { Account, Transaction, Category, Project, Params, Investment, Subscription } from '../models';

// tuto : https://dexie.org/docs/Tutorial/Svelte
export const db = new Dexie('myDatabase');
db.version(1.4).stores({
  accounts: Account.dexieDefinition,
  transactions: Transaction.dexieDefinition,
  categories: Category.dexieDefinition,
  projects: Project.dexieDefinition,
  investments: Investment.dexieDefinition,
  subscriptions: Subscription.dexieDefinition,
  params: Params.dexieDefinition,
});

db.open();
db.on("ready", function () {

  /*
  db.accounts.clear();
  db.transactions.clear();
  db.categories.clear();
  db.projects.clear();
  db.params.clear();
  */

  // Create default params if not exist
  db.params.get(Params.userId).then((params) => {
    if (!params) {
      db.params.add(new Params(Params.userId));
    }
  });
});