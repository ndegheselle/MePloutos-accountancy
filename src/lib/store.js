import {  derived } from 'svelte/store';
import {liveQuery} from "dexie";

import ParamsRepo from "@lib/repos/params";
import CategoriesRepo from "@lib/repos/categories";

import { Category, Params } from "@lib/models";
import { isDesktop } from './helpers';

// Fixed
export const params = derived(
  liveQuery(() => ParamsRepo.getUserParams()),
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
params.set = ParamsRepo.updateUserParams

export const categories = derived(
  liveQuery(() => CategoriesRepo.getAll()),
  $categories => {
    $categories = $categories || [];
    // Add a "None" category if it doesn't exist
    if ($categories.length === 0 || $categories[0]?.id !== null)
      $categories.unshift(new Category("None", "#DDD"));
    return $categories;
  }
);

export const categoriesMap = derived(categories,
  $categories => new Map($categories.map((cat => [cat.id, cat])))
);