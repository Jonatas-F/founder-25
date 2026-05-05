import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Para deploy no GitHub Pages: a base precisa bater com o nome do repositório.
// Em dev local, mantém a raiz "/".
const base = process.env.GITHUB_PAGES === "true" ? "/founder-25/" : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
});
