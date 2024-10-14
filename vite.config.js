import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default {
  // Other Vite config options...
  build: {
    rollupOptions: {
      external: ["axios"],
    },
  },
};
