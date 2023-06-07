import { uuidv4 } from "../helpers";
import { createCategory, updateCategory, removeCategory } from '@lib/repos/categories.js';

function create(_category)
{
    _category.id = uuidv4();
    return createCategory(_category);
}

function update(_category)
{
    return updateCategory(_category);
}

function remove(_categoryId)
{
    return removeCategory(_categoryId);
}

export default {
    create,
    update,
    remove
}