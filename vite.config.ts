import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import UnoCSS from "unocss/vite";
import { presetIcons, presetWind } from "unocss";

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetWind({
          dark: "class",
        }),
        presetIcons(),
      ],
    }),
    sveltekit(),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
