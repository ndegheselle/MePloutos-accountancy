import { derived } from 'svelte/store';
import InvestmentsRepo from "@lib/repos/investments";
import {liveQuery} from "dexie";

export const investments = derived(
    liveQuery(() => InvestmentsRepo.getAll()),
    $investments => $investments || []
)