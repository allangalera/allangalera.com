import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
});
