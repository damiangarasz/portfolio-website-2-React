import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src",
  plugins: [react()],
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
});
