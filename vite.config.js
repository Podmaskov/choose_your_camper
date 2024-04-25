/* eslint-disable no-undef */
import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/choose_your_camper",
  plugins: [
    svgr(),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },
});
