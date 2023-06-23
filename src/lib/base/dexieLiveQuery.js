import { readable } from 'svelte/store';
import { liveQuery } from "dexie";

export function useLiveQuery(querier, params, options) {
    const store = readable(options?.initialValue, (set) => {

        let unsubscribe = null;

        const updateQuery = (_params) => {

            if (unsubscribe) unsubscribe();

            const observable = liveQuery(() => querier(_params));
            unsubscribe = observable.subscribe({
                next: (val) => {
                    set(val);
                },
                error: options?.onError,
            });
        };

        params.subscribe((val) => {
            updateQuery(val);
        });
    });

    return store;
}