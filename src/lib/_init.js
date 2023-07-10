import { db } from './base/db/indexDB.js';
import { Params } from './db/params.js';

function initDatabase() {
    db.on("ready", function () {
        // Create default params if not exist
        db.params.get(Params.userId).then((params) => {
            if (!params) {
                db.params.add(new Params(Params.userId));
            }
        });
    });
}

export default function init()
{
    initDatabase();
}