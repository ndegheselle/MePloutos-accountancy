import { writable } from 'svelte/store';

import { uuidv4 } from './helpers';

const idAccount1 = uuidv4();
const idAccount2 = uuidv4();

export const accounts = writable([
    {
        id: idAccount1,
        name: 'Account 1',
        balance: 500.23,
        color: '#264653',
    },
    {
        id: idAccount2,
        name: 'Account 2',
        balance: 203.52,
        color: '#e9c46a',
    }
]);

export const categories = writable([
    {
        id: uuidv4(),
        name: 'cat 1',
        total: 203.52,
        color: '#f7ede2' 
    },
    {
        id: uuidv4(),
        name: 'cat 2',
        total: 400.52,
        color: '#f5cac3'
    },
    {
        id: uuidv4(),
        name: 'cat 3',
        total: 203.52,
        color: '#84a59d'
    },
    {
        id: uuidv4(),
        name: 'cat 4',
        total: 100.52,
        color: '#f28482'
    }
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
        value: 6.5
    },
]); 