import { PostItem } from '@/components/PostItem';
import type { CollectionEntry } from 'astro:content';
import { Component, For } from 'solid-js';

type PostListProps = {
  posts: CollectionEntry<'posts'>[];
};

export const PostList: Component<PostListProps> = (props) => {
  return (
    <div class="flex w-full flex-col">
      <ul class="flex flex-col gap-4">
        <For each={props.posts}>{(post) => <PostItem {...post} />}</For>
      </ul>
    </div>
  );
};
