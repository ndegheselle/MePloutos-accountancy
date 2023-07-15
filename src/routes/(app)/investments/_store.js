import { derived } from 'svelte/store';
import {InvestmentsRepo} from "@lib/db/investments";
import {liveQuery} from "dexie";

export const investments = derived(
    liveQuery(() => InvestmentsRepo.getAll()),
    $investments => $investments || []
)