export class Account
{
    static dexieDefinition = "++id, name, color, balance";

    constructor()
    {
        this.name = "";
        this.color = "#DDD";
        this.balance = 0;
    }
}

export class Category
{
    static dexieDefinition = "++id, name, color";

    constructor(_id, _name, _color)
    {
        this.id = _id || null;
        this.name = _name || "";
        this.color = _color || "#DDD";
    }
}

export class Transaction
{
    static dexieDefinition = "++id, date, description, value, *accountId, *categoryId";

    constructor(_description, _date, _value, _categoryId)
    {
        this.date = _date || new Date();
        this.description = _description || "";
        this.value = _value || 0;

        this.categoryId = _categoryId || null;
        this.accountId = null;
    }
}

export class Project
{
    static dexieDefinition = "++id, name";

    constructor(_name)
    {
        this.name = _name || "";
    }
}