import { db } from "@base/db";
import { Params } from "./params";

export default function init() {
    db.version(1.4).stores({
        accounts: "++id",
        transactions: "++id, accountId, date, orderNumber",
        categories: "++id",
        projects: "++id",
        investments: "++id",
        subscriptions: "++id",
        params: "++id",
    });
    db.open();
    db.on("ready", function () {
        // Create default params if not exist
        db.params.get(Params.userId).then((params) => {
            if (!params) {
                db.params.add(new Params(Params.userId));
            }
        });
    });
}