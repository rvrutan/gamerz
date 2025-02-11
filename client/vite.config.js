import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["gamerz-client.onrender.com", "gamerz.onrender.com"],
    host: "0.0.0.0",
    port: 3001,
    open: true,
    proxy: {
      "/api": {
        //test local http://localhost:3001
        target: "https://gamerz.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/auth": {
        //test local http://localhost:3001
        target: "https://gamerz.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [tailwindcss(), react()],
  preview: {
    host: true,
    port: 3000,
  },
});
