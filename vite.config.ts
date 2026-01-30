import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/Trainix/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Trainix",
        short_name: "Trainix",
        start_url: "/Trainix/",
        scope: "/Trainix/",
        display: "standalone",
        theme_color: "#0b0b0b",
        background_color: "#0b0b0b",
        icons: [
          {
            src: "/Trainix/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/Trainix/text.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/Trainix/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
