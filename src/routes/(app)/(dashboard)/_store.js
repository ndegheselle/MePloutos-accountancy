import { writable, derived } from 'svelte/store';

import AccountsRepo from "@lib/repos/accounts";
import TransactionsRepo from "@lib/repos/transactions";
import InvestmentsRepo from "@lib/repos/investments";
import SubscriptionsRepo from "@lib/repos/subscriptions";

import transactionsService from "@lib/services/transactions";

import { params } from "@lib/store";
import {liveQuery} from "dexie";

import { firstDayOfMonth } from "@lib/helpers";

export const accounts = derived(
    liveQuery(() => AccountsRepo.getAll()),
    $accounts => $accounts || []
);
export const projects = writable([]);

// XXX : Check if in the future params throw updates too often
export const transactionsRecap = derived(
    params,
    ($params, set) => {
        if (!$params?.favoriteAccountId) return null;

        // Can't use async function in derived
        (async () => {
            // TODO : add global params to select the default date filter
            let transactions = await TransactionsRepo.getByAccount($params.favoriteAccountId, new Date(new Date().setMonth(new Date().getMonth() - 1)));
    
            let recap = transactionsService.getTransactionsRecap(transactions);
            set(recap);
        })();
    }
);

export const investments = writable([]);
export const subscriptions = writable([]);

// self invoked function to load the data
(async () => {
    investments.set(await InvestmentsRepo.getAll());
    subscriptions.set(await SubscriptionsRepo.getAll());
})();