import { uuidv4 } from "../helpers";
import { categories } from "../store"

function create(_category)
{
    _category.id = uuidv4();
    categories.update(_categories => {
        _categories.push(_category);
        return _categories;
    });
}

function update(_category)
{
    categories.update(_categories => {
        let index = _categories.findIndex(c => c.id == _category.id);
        _categories[index] = _category;
        return _categories;
    });
}

function remove(_categoryId)
{
    categories.update(_categories => {
        let index = _categories.findIndex(c => c.id == _categoryId);
        if (index > -1) {
            _categories.splice(index, 1);
        }
        return _categories;
    });
}

export default {
    create,
    update,
    remove
}