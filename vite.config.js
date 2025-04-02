import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Ładowanie zmiennych środowiskowych
  const env = loadEnv(mode, process.cwd());

  return {
    root: "src",
    plugins: [react()],
    define: {
      "process.env": { ...process.env, ...env }, // Dodajemy zmienne środowiskowe
    },
    base: "./", // Zapewnia poprawne odniesienia do plików statycznych
    build: {
      outDir: "../docs",
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
