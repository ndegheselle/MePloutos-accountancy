import { writable, derived } from 'svelte/store';
import {liveQuery} from "dexie";

import { getAllCategories } from "@lib/repos/categories";
import { updateUserParams } from "@lib/repos/params";

import { getUserParams } from "@lib/repos/params";
import { Category, Params } from "@lib/models";

// Fixed
export const params = derived(
  liveQuery(getUserParams),
  ($params) => {
    return $params || new Params();
  }
);
params.set = updateUserParams

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