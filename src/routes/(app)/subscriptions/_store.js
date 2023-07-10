import { derived } from 'svelte/store';
import {SubscriptionsRepo} from "@lib/db/subscriptions";
import {liveQuery} from "dexie";

export const subscriptions = derived(
    liveQuery(() => SubscriptionsRepo.getAll()),
    $subscriptions => $subscriptions || []
)