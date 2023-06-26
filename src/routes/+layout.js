import { init as initPopups } from "@global/popups.js";

// Check for each page is still connected
export const load = async ({ route }) => {
  initPopups();
};

export const prerender = false;
export const ssr = false;