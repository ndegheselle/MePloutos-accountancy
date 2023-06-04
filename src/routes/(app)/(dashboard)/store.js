import { writable, derived } from 'svelte/store';
import { getAllAccounts, getAccountById } from "@lib/repos/accounts";
import { getTransactionsByAccount } from "@lib/repos/transactions";
import transactionsService from "@lib/services/transactions/transactions";

import { params } from "@lib/store";
import {liveQuery} from "dexie";

export const accounts = derived(
    liveQuery(getAllAccounts),
    $accounts => $accounts || []
);

export const projects = writable([]);

export const transactionsRecap = writable(null);

// XXX : Check if in the future params throw updates too often
export const favoriteAccount = derived(
    params,
    $params => {
        if (!$params.favoriteAccountId) return null;

        let account = getAccountById($params.favoriteAccountId);
        // TODO : add date
        let transactions = getTransactionsByAccount($params.favoriteAccountId);

        transactionsRecap.set(
            transactionsService.getTransactionsRecap(transactions)
        );

        return account;
    }
);