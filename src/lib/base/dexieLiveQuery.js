import { readable } from 'svelte/store';
import { liveQuery } from "dexie";

export function useLiveQuery(querier, params, options) {
    const store = readable(options?.initialValue, (set) => {

        let subscribtion = null;
        const updateQuery = (_params) => {

            if (subscribtion) subscribtion.unsubscribe();

            const observable = liveQuery(() => querier(_params));
            subscribtion = observable.subscribe({
                next: (val) => {
                    set(val);
                },
                error: options?.onError,
            });
        };

        if (params)
        {
            params.subscribe((val) => {
                updateQuery(val);
            });
        }
    });

    return store;
}