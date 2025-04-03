import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "./postcss.config.cjs";

export default defineConfig(({ mode }) => {
  // Ładowanie zmiennych środowiskowych
  const env = loadEnv(mode, process.cwd());

  return {
    root: "src",
    plugins: [react()],
    define: {
      "process.env": { ...process.env, ...env }, // Dodajemy zmienne środowiskowe
    },
    base: "/portfolio-website-2-React/", // Zapewnia poprawne odniesienia do plików statycznych
    build: {
      outDir: "../docs",
      emptyOutDir: true,
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
  };
});
