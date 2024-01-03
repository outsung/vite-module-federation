import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    topLevelAwait(),
    federation({
      name: "b",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      remotes: {
        c: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
  ],
});
