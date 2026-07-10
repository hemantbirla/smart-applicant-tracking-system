import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // 1. Crucial fix: react must be invoked as a function react()
  plugins: [react()], 

  // 2. This tells Vitest/Vite to treat .js files in the src folder as JSX
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    css: true,
    restoreMocks: true,
  },
});