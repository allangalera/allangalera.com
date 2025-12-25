import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import aws from "astro-sst";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    mdx({
      shikiConfig: {
        theme: "css-variables",
      },
    }),
    solidJs(),
    sitemap(),
  ],
  site: "https://allangalera.com",
  output: "server",
  adapter: aws(),
  vite: {
    plugins: [tailwindcss()],
  },
});
