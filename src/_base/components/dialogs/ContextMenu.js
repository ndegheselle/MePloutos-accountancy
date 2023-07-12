import { writable } from 'svelte/store';

export const contextMenuStore = writable({
    show: false,
    position: {x: 0, y: 0},
    items: [],
    dataContext: null,
});

export const context = {
    show(_position, _items, _dataContext = null) {
        contextMenuStore.update((c) => {
            c.show = true;
            c.position = _position;
            c.items = _items;
            c.dataContext = _dataContext;
            return c;
        });
    },
    hide() {
        contextMenuStore.update((c) => {
            c.show = false;
            return c;
        });
    }
};