import { writable } from 'svelte/store';

function showAlert(message, type) {
    alertStore.set({
        message,
        type
    });
}

export const alertStore = writable(null);
export const alert = {
    show: showAlert,
    error:      (message) => showAlert(message, "is-danger"),
    warning:    (message) => showAlert(message, "is-warning"),
    info:       (message) => showAlert(message, "is-info"),
    success:    (message) => showAlert(message, "is-success"),
};