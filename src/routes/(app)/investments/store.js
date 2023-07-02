import { writable, derived } from 'svelte/store';
import { getAllInvestments } from "@lib/repos/investments";
import {liveQuery} from "dexie";

export const investments = derived(
    liveQuery(() => getAllInvestments()),
    $investments => $investments || []
)