import {  derived } from 'svelte/store';
import {liveQuery} from "dexie";

import { getAllCategories } from "@lib/repos/categories";
import { updateUserParams } from "@lib/repos/params";

import { getUserParams } from "@lib/repos/params";
import { Category, Params } from "@lib/models";
import { isDesktop } from './helpers';

// Fixed
export const params = derived(
  liveQuery(getUserParams),
  ($params) => {
    let params = $params || new Params();

    // Default params for web
    if (!isDesktop()) {
      params.saveDataLocallyOnClose = false;
      params.saveImportedFiles = false;
    }
    return params;
  }
);
params.set = updateUserParams

export const categories = derived(
  liveQuery(getAllCategories),
  $categories => {
    $categories = $categories || [];
    // Add a "None" category if it doesn't exist
    if ($categories.length === 0 || $categories[0]?.id !== null)
      $categories.unshift(new Category(null, "None", "#DDD"));
    return $categories;
  }
);

export const categoriesMap = derived(categories,
  $categories => new Map($categories.map((cat => [cat.id, cat])))
);