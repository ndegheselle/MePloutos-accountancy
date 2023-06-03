import { writable, derived } from 'svelte/store';
import { getAllAccountsLive, getAccountById } from "@lib/repos/accounts";
import { getTransactionsByAccount } from "@lib/repos/transactions";
import transactionsService from "@lib/services/transactions/transactions";

import { params } from "@lib/store";

export const accounts = derived(
    getAllAccountsLive(),
    $accounts => $accounts || []
);

export const projects = writable([]);

// XXX : Check if in the future params throw updates too often
export const favoriteAccount = derived(
    params,
    $params => {
        if (!$params.favoriteAccountId) return null;
        
        let account = getAccountById($params.favoriteAccountId);
            
        let transactions = getTransactionsByAccount($params.favoriteAccountId);

        let { categoriesValues, recap } = transactionsService.getTransactionsRecap(transactions);

        account.categoriesValues = categoriesValues;
        account.recap = recap;

        return account;
    }
);