import { writable } from 'svelte/store';

export const confirmStore = writable({
    show: false,
    title: "",
    message: "",
    type: "",
    callback: Function,
});

export const confirm = {
    show(message, title, type) {
        let resultPromise;

        confirmStore.update(m => {
            m.show = true;
            m.message = message;
            m.title = title;
            m.type = type || "is-success";
            resultPromise = new Promise(function(resolve, reject) {
                m.callback = resolve;
            });
            return m;
        });

        return resultPromise;
    }
}