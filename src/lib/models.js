import { uuidv4 } from "./helpers";

export class Account
{
    constructor(_id, _name, _color, _balance)
    {
        this.id = _id || uuidv4();
        this.name = _name || "";
        this.color = _color || "#DDD";
        this.balance = _balance || 0;
    }

    update(_transactions)
    {
        let catTmpMap = new Map();
        catTmpMap.set(null, 0);
        this.recap = {
            positiveTotal: 0,
            negativeTotal: 0,
            total: 0,
        };

        for (let transaction of _transactions)
        {
            if (!catTmpMap.has(transaction.categoryId)) catTmpMap.set(transaction.categoryId, 0);
            catTmpMap.set(transaction.categoryId, catTmpMap.get(transaction.categoryId) + Math.abs(transaction.value));

            if (transaction.value > 0)
                this.recap.positiveTotal += transaction.value;
            else
                this.recap.negativeTotal += transaction.value;
        }
        // Reverse so that None category is always at the end
        this.categories = Array.from(catTmpMap, function(entry) {
            return {id: entry[0], value: entry[1]};
        }).reverse();
        this.recap.total = Math.abs(this.recap.positiveTotal) + Math.abs(this.recap.negativeTotal);
    }
}

export class Category
{
    constructor(_id, _name, _color)
    {
        this.id = _id;
        this.name = _name || "";
        this.color = _color || "#DDD";
    }
}

export class Transaction
{
    constructor(_description, _date, _value, _categoryId)
    {
        this.id = uuidv4();
        this.date = _date || new Date();
        this.description = _description || "";
        this.value = _value || 0;
        this.categoryId = _categoryId || null;
    }
}