import { writable, derived } from 'svelte/store';

import { getAllCategoriesLive } from "@lib/repos/categories";

// Fixed
export const params = writable({
  favoriteAccountId: null,
});

export const categories = derived(
  getAllCategoriesLive(),
  $categories => $categories || []
);
export const categoriesMap = derived(categories,
  $categories => new Map($categories.map((cat => [cat.id, cat])))
);