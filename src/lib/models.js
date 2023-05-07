import { uuidv4 } from "./helpers";

export class Account
{
    constructor(_id, _name, _color, _balance)
    {
        this.id = _id || uuidv4();
        this.name = _name || "";
        this.color = _color || "#DDD";
        this.balance = _balance || 0;

        this.categories = {
            values: {
                "0": 320,
                null: 50
            }}
        }
    }
}

export class Category
{
    constructor(_id, _name, _color)
    {
        this.id = _id || uuidv4();
        this.name = _name || "";
        this.color = _color || "#DDD";
    }
}