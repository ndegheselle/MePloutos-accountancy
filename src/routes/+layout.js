import initGlobal from "@global/_init.js";
import initLib from "@lib/_init.js";

// Check for each page is still connected
export const load = async ({ route }) => {
  initGlobal();
  initLib();  
};

export const prerender = false;
export const ssr = false;