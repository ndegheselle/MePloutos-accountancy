import { writable } from 'svelte/store';

export const loadingStore = writable({
    show: false,
    message: "Loading...",
});

// Loading show or hide
export const loading = {
    show(message) {
        loadingStore.update(m => {
            m.show = true;
            m.message = message || "Loading...";
            return m;
        });
    },
    hide() {
        loadingStore.update(m => {
            m.show = false;
            return m;
        });
    }
};