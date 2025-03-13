import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import aws from 'astro-sst';
import rehypeExternalLinks from 'rehype-external-links';
import { remarkReadingTime } from './src/remark/remark-reading-time';
import tailwindcss from '@tailwindcss/vite';

const rehypeExternalLinksConfig = {
  target: '_blank',
  rel: ['nofollow', 'noopener'],
} satisfies Parameters<typeof rehypeExternalLinks>[0];

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [[rehypeExternalLinks, rehypeExternalLinksConfig]],
  },
  integrations: [
    mdx({
      shikiConfig: {
        theme: 'css-variables',
      },
    }),
    solidJs(),
    sitemap(),
  ],
  site: 'https://allangalera.com',
  output: 'server',
  adapter: aws(),
  vite: {
    plugins: [tailwindcss()],
  },
});
