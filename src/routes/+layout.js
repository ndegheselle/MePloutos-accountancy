import initComponents from "@components/_init.js";
import initDb from "@lib/db/_init.js";

import { isDesktop } from '@lib/desktop/helpers.js'
import initDesktop from '@lib/desktop/_init.js';
// Check for each page is still connected
export const load = async ({ route }) => {
  if (isDesktop())
    initDesktop();
    
  initDb();
  initComponents();
};

export const prerender = false;
export const ssr = false;