import Dexie from 'dexie';

// tuto : https://dexie.org/docs/Tutorial/Svelte

export const db = new Dexie('myDatabase');
db.version(1).stores({
  friends: '++id, name, age', // Primary key and indexed props
});