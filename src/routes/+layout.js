import initComponents from "@components/_init.js";
import initLib from "@lib/_init.js";

// Need to be called ASAP
initLib();

// Check for each page is still connected
export const load = async ({ route }) => {
  initComponents();
};

export const prerender = false;
export const ssr = false;