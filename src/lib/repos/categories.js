import { db } from '@lib/base/indexDB.js';

export function getAllCategories()
{
    return db.categories.toArray();
}

export function createCategory(_category)
{
    return db.categories.add(_category);
}

export function updateCategory(_category)
{
    return db.categories.update(_category.id, _category);
}

export function removeCategory(_categoryId)
{
    return db.categories.delete(_categoryId);
}