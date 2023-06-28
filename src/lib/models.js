export class Account
{
    static dexieDefinition = "++id";

    constructor()
    {
        this.name = "";
        this.color = "#DDD";
        this.balance = 0;
    }
}

export class Category
{
    static dexieDefinition = "++id";

    constructor(_id, _name, _color)
    {
        this.id = _id || null;
        this.name = _name || "";
        this.color = _color || "#DDD";
    }
}

export class Transaction
{
    static dexieDefinition = "++id, accountId, date, orderNumber";

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
    static dexieDefinition = "++id";

    constructor(_name)
    {
        this.name = _name || "";
    }
}

export class Investment
{
    static dexieDefinition = "++id";

    constructor(_name)
    {
        this.name = _name || "";
        this.startDate = new Date();

        // XXX : amélioration possible avec valeurs passés, gestion d'investissement régulier, etc.
        this.actualValue = 0;
        this.investedValue = 0;
    }
}

export class Subscription
{
    static dexieDefinition = "++id";

    constructor(_name)
    {
        this.name = _name || "";
        this.price = 0;
        this.dueEvery = 1;
    }
}

export class Params
{
    static dexieDefinition = "++id";
    // Id used for user params
    static userId = "user";

    constructor()
    {
        this.id = Params.userId;
        this.favoriteAccountId = "";
        // XXX : not used yet, seems a bit overkill
        this.saveDataLocallyOnClose = true;
        this.saveImportedFiles = true;
    }
}