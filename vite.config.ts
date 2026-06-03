import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "three-vendor": [
            "three",
            "three-stdlib",
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
            "@react-three/rapier",
            "@react-three/cannon",
          ],
          "gsap-vendor": ["gsap", "@gsap/react"],
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": ["react-icons", "react-fast-marquee"],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});