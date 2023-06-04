import { db } from '@lib/base/indexDB.js';

export function getAllCategories()
{
    return db.categories.toArray();
}

export function createCategory(_category)
{
    return db.categories.add(_category);
}

export function removeAccount(_categoryId)
{
    return db.categories.delete(_categoryId);
}

export function updateAccountBalance(_category)
{
    return db.categories.update(_category.id, _category);
}