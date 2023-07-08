import "dexie-export-import";
import { db } from "@lib/base/db/indexDB";

function clearDB() {
    db.tables.forEach(function (table) {
        table.clear();
    });
}

export default {
    exportDB: async function () {
        const blob = await db.export();
        // Upload the blod to a file on the client
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `accountancy-${new Date().toISOString().split('T')[0]}.json`;

        // Append link to the body
        document.body.appendChild(link);

        // Dispatch click event on the link
        // This is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            })
        );

        // Remove link from body
        document.body.removeChild(link);
    },
    importDB: async function (file) {
        clearDB();
        await db.import(file);
    }
};