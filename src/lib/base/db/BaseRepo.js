import { uuidv4 } from "@lib/helpers";
import { db } from "./indexDB.js";

export class BaseRepo
{
    constructor(_tableName)
    {
        this.table = db.table(_tableName);
    }

    create(_object) {
        _object.id = uuidv4();
        return this.table.add(_object);
    }
    
    createAll(_objects)
    {
        for (let obj of _objects)
        {
            obj.id = uuidv4();
        }
        return this.table.bulkAdd(_objects);
    }

    removeAll(_ids) {
        return this.table.bulkDelete(_ids);
    }

    remove(_id) {
        return this.table.delete(_id);
    }

    update(_object) {
        return this.table.update(_object.id, _object);
    }

    getAll() {
        return this.table.toArray();
    }

    getById(_id) {
        if (!_id) return Promise.resolve(null);
        return this.table.get(_id);
    }
}