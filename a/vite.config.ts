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
      name: "a",
      filename: "remoteEntry.js",
      remotes: {
        b: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
  ],
});
