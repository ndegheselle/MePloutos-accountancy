import init from "@global/$init.js";

// Check for each page is still connected
export const load = async ({ route }) => {
  init();
};

export const prerender = false;
export const ssr = false;