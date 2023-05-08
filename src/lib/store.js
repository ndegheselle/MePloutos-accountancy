import { writable } from 'svelte/store';

import { Account, Category, Transaction } from './models';

export const accounts = writable([
    new Account("2a6f5e8d-5d0f-403c-b318-9faa670fe211", "Account 1", "#264653", 500.46),
    new Account("a2099acd-fa90-445e-b9cb-dffd160cc489", "Account 2", "#e9c46a", 203.00)
]);
export const currentAccount = writable(null);

export const categories = writable([
    new Category(null, 'None', 'hsl(0, 0%, 96%)'),
    new Category('0', 'cat 1', '#f7ede2'),
    new Category('1', 'cat 2', '#f5cac3'),
    new Category('2', 'cat 3', '#84a59d'),
    new Category('3', 'cat 4', '#f28482'),
]);

export const projects = writable([
    {
        name: 'Project 1',
        progress: 0.45
    },
    {
        name: 'Project 2',
        progress: 0.5
    },
    {
        name: 'Project 3',
        progress: 0.152
    }
]); 

export const transactions = writable([
    new Transaction('Transaction 1', new Date('2023-03-01'), 10.5, '0'),
    new Transaction('Transaction 2', new Date('2023-04-01'), -40, '1'),
    new Transaction('Transaction 3', new Date('2023-05-01'), 23, '1'),
    new Transaction('Transaction 4', new Date('2023-06-01'), -85)
]); 