import { uuidv4 } from "./helpers";

export class Account
{
    constructor(_name, _color, _balance)
    {
        this.id = uuidv4();
        this.name = _name || "";
        this.color = _color || "#DDD";
        this.balance = _balance || 0;

        this.categoriesValues [
            {id: '0', value: 50},
            {id: '1', value: 11.5}
        ];
    }

    updateCategories(_categories)
    {
        this.categories = [];
        this.total = 0;
        for (let cat of this.categoriesValues)
        {
            total += cat.value;
        }

        this.categories.push();

        return this.categories.reduce((acc, val) => acc + val.value, 0);
    }
}

export class Category
{
    constructor(_id, _name, _color, _total)
    {
        this.id = _id || uuidv4();
        this.name = _name || "";
        this.color = _color || "#DDD";
        this.total = _total || 0;
    }
}