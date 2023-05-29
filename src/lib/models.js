import { uuidv4 } from "./helpers";

export class Account
{
    static dexieDefinition = "++id, name, color, balance";

    constructor(_id, _name, _color, _balance)
    {
        this.id = _id || uuidv4();
        this.name = _name || "";
        this.color = _color || "#DDD";
        this.balance = _balance || 0;
    }
}

export class Category
{
    static dexieDefinition = "++id, name, color";

    constructor(_id, _name, _color)
    {
        this.id = _id;
        this.name = _name || "";
        this.color = _color || "#DDD";
    }
}

export class Transaction
{
    static dexieDefinition = "++id, date, description, value, categoryId";

    constructor(_description, _date, _value, _categoryId)
    {
        this.id = uuidv4();
        this.date = _date || new Date();
        this.description = _description || "";
        this.value = _value || 0;
        this.categoryId = _categoryId || null;
    }
}

export class Project
{
    static dexieDefinition = "++id, name";

    constructor(_name)
    {
        this.id = uuidv4();
        this.name = _name || "";
    }
}