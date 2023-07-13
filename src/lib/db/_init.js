import { db } from "@base/db";
import { Params } from "./params";

export default function init() {
    db.on("ready", function () {
        // Create default params if not exist
        db.params.get(Params.userId).then((params) => {
            if (!params) {
                db.params.add(new Params(Params.userId));
            }
        });
    });
}