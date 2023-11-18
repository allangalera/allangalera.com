import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import aws from 'astro-sst';
import { remarkReadingTime } from './src/remark/remark-reading-time';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    mdx({
      shikiConfig: {
        theme: 'css-variables',
      },
    }),
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.cjs',
    }),
    solidJs(),
    sitemap(),
  ],
  site: 'https://allangalera.com',
  output: 'server',
  adapter: aws({
    deploymentStrategy: 'regional',
    serverRoutes: ['/api/*'],
  }),
});
