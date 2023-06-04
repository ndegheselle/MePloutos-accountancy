import { writable, derived } from 'svelte/store';
import {liveQuery} from "dexie";

import { getAllCategories } from "@lib/repos/categories";
import { Category } from "@lib/models";

// Fixed
export const params = writable({
  favoriteAccountId: null,
});

export const categories = derived(
  liveQuery(getAllCategories),
  $categories => {
    $categories = $categories || [];
    $categories.unshift(new Category(null, "None", "#DDD"));
    return $categories;
  }
);
export const categoriesMap = derived(categories,
  $categories => new Map($categories.map((cat => [cat.id, cat])))
);