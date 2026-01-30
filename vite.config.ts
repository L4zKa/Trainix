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
        theme_color: "#9600F8",
        background_color: "#0b0b0b00",
        icons: [
          {
            src: "/Trainix/TrainixLogo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
