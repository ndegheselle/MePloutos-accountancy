import { writable } from 'svelte/store';

import { Account, Category } from './models';

export const accounts = writable([
    new Account("2a6f5e8d-5d0f-403c-b318-9faa670fe211", "Account 1", "#264653", 500.46),
    new Account("a2099acd-fa90-445e-b9cb-dffd160cc489", "Account 2", "#e9c46a", 203.00)
]);

export const categories = writable([
    new Category('0', 'cat 1', '#f7ede2', 203.52),
    new Category('1', 'cat 2', '#f5cac3', 400.52),
    new Category('2', 'cat 3', '#84a59d', 203.52),
    new Category('3', 'cat 4', '#f28482', 100.52),
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
    {
        description: 'Transaction 1',
        date: new Date('2023-03-01'),
        value: 10.5
    },
    {
        description: 'Transaction 2',
        date: new Date('2023-03-30'),
        value: -40.5
    },
    {
        description: 'Transaction 3',
        date: new Date('2023-04-10'),
        value: 8
    },
]); 