import { db } from "@base/db";
import { Params } from "./params";
import { isDesktop } from "@lib/desktop/helpers";
import DesktopSave from "@lib/desktop/save";
import "dexie-export-import";

let delayTimer;
function exportDatabase(event) {

    // 3 secondes buffer in case several events are fired at the same time
    clearTimeout(delayTimer);
    delayTimer = setTimeout(async function() {
        const databaseExport = await db.export({
            filter: function (table) {
                return table !== "transactions";
            }
        });
        await DesktopSave.saveDatabase(await databaseExport.text());
    }, 3000);
}

export default function init() {
    db.on("ready", function () {
        // Create default params if not exist
        db.params.get(Params.userId).then((params) => {
            if (!params) {
                db.params.add(new Params(Params.userId));
            }
        });
    });

    if (!isDesktop()) return;

    document.addEventListener("accountancy://db-table-updated", exportDatabase);
}