import { contextMenu } from "./store.js";

export const context = {
    show(_position, _items, _context = null) {
        contextMenu.update((c) => {
            c.visible = true;
            c.position = _position;
            c.items = _items;
            c.context = _context;
            return c;
        });
    }
};