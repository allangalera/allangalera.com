import { chunkify } from '@/utils';
import { getCollection } from 'astro:content';

export const getPosts = async () => {
  return await getCollection('posts', ({ data }) => {
    if (process.env.NODE_ENV === 'development') return true;

    return !data.draft;
  });
};

export const getPaginatedPosts = async (page = 0, pageSize = 10) => {
  const posts = await getPosts();

  const sortedPosts = posts.sort((a, b) =>
    a.data.publishedDate < b.data.publishedDate ? 1 : -1,
  );

  const chunks = chunkify(sortedPosts, { pageSize });

  return chunks[page] ?? [];
};
