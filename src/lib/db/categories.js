import { BaseRepoSync } from '@base/db/BaseRepo';

export const CategoriesRepo = new BaseRepoSync("categories");
export class Category
{
    constructor(_name, _color)
    {
        this.id = null;
        this.name = _name || "";
        this.color = _color || "#DDD";
    }
}