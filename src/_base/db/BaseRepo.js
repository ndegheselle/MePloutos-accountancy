import { uuidv4 } from "@base/helpers";
import { db } from "./index.js";

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

    remove(_id) {
        return this.table.delete(_id);
    }

    removeAll(_ids) {
        return this.table.bulkDelete(_ids);
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

export class BaseRepoSync extends BaseRepo
{
    syncEvent()
    {
        const event = new CustomEvent("accountancy://db-table-updated", { 
            detail: this.table.name 
        });
        document.dispatchEvent(event);
    }

    create(_object) {
        let result = super.create(_object);
        result.then(() => this.syncEvent());
        return result;
    }
    
    createAll(_objects)
    {
        let result = super.createAll(_objects);
        result.then(() => this.syncEvent());
        return result;
    }

    remove(_id) {
        let result = super.remove(_id);
        result.then(() => this.syncEvent());
        return result;
    }

    removeAll(_ids) {
        let result = super.removeAll(_ids);
        result.then(() => this.syncEvent());
        return result;
    }

    update(_object) {
        let result = super.update(_object);
        result.then(() => this.syncEvent());
        return result;
    }
}