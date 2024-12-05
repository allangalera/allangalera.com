import type { Component } from 'solid-js';
import type { CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';

type PostItemProps = CollectionEntry<'posts'>;

export const PostItem: Component<PostItemProps> = (props) => {
  return (
    <li class="flex flex-col gap-2 rounded border border-zinc-300 p-2 dark:border-zinc-700">
      <a class="text-2xl hover:underline" href={`/posts/${props.id}`}>
        {props.data.title}
      </a>

      <div class="flex justify-between text-sm font-bold text-zinc-500 dark:text-zinc-300">
        <time class="" datetime={props.data.publishedDate.toISOString()}>
          {new Intl.DateTimeFormat('en-US', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
          }).format(props.data.publishedDate)}
        </time>
        <span>{readingTime(props.body ?? '').text}</span>
      </div>
    </li>
  );
};
