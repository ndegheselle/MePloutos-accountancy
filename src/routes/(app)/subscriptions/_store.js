import { writable, derived } from 'svelte/store';
import { getAllSubscriptions } from "@lib/repos/subscriptions";
import {liveQuery} from "dexie";

export const subscriptions = derived(
    liveQuery(() => getAllSubscriptions()),
    $subscriptions => $subscriptions || []
)