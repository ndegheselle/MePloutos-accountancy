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

    constructor(_id, _date, _description, _value, _accountId)
    {
        this.id = _id || null;
        this.date = _date || new Date();
        this.description = _description || "";
        this.value = _value || 0;

        this.accountId = _accountId || null;
        this.categoryId = null;
        this.orderNumber = 0;
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

export class Params
{
    static dexieDefinition = "++id, favoriteAccountId";
    // Id used for user params
    static userId = "user";

    constructor()
    {
        this.id = Params.userId;
        this.favoriteAccountId = "";
    }
}