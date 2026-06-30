import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://tau-alma.github.io",
  base: "/rock-3D-positioning-webpage",

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We apply @tailwind directives in global.css
    }),
  ],

  // Ensure .webm and .svg files are served correctly
  vite: {
    assetsInclude: ["**/*.webm", "**/*.svg"],
  },
});
