import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import aws from 'astro-sst/lambda';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
        path: './tailwind.config.cjs',
      },
    }),
    solidJs(),
  ],
  output: 'server',
  adapter: aws(),
});
