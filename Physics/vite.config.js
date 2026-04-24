import { defineConfig } from "vite";

export default defineConfig({
  // Set base if deploying to a subdirectory, e.g. GitHub Pages:
  // base: "/physica/",
  base: "./",

  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
  },

  server: {
    port: 5173,
    open: true,
  },
});
