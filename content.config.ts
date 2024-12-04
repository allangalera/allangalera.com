import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    publishedDate: z.date(),
    latestUpdate: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  posts: blogCollection,
};
