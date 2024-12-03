import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  root: "src",
  plugins: [TanStackRouterVite(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Dla uproszczenia budowania
      },
    },
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    environment: "happy-dom",
  },
});
