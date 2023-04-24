import { writable } from 'svelte/store';

export const accounts = writable([]);
export const selectedAccount = writable(null);

export const categories = writable([]);
export const selectedCategory = writable(null);

export const transactions = writable([]);