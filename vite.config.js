import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    build: {
    outDir: "src/dist", // Specify the output directory
    emptyOutDir: true, // Clears the output directory before building
  },
});
