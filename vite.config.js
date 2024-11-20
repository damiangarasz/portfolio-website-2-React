import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Ustawienie targetu na ESNext
  },
  server: {
    open: true, // Otwiera stronę w przeglądarce po uruchomieniu serwera
  },
  root: "src",
});
