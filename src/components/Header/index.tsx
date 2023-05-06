import { ThemeDropdown } from '@/components/ThemeDropdown';
import type { Component } from 'solid-js';

type HeaderProps = {
  hasPosts: boolean;
};
export const Header: Component<HeaderProps> = (props) => {
  return (
    <header class="sticky top-0 flex items-center justify-between border-b border-b-zinc-300 bg-zinc-50 p-2 dark:border-b-zinc-700 dark:bg-zinc-900">
      <a
        class="rounded-lg p-2 text-3xl leading-tight hover:bg-zinc-100 dark:hover:bg-zinc-800"
        href="/"
      >
        Allan Galera
      </a>
      <div class="flex items-center justify-center gap-4">
        {props.hasPosts ? (
          <a class="text-lg underline" href="/posts">
            Blog
          </a>
        ) : null}
        <a class="text-lg underline" href="/resume">
          Resume
        </a>
        <ThemeDropdown />
      </div>
    </header>
  );
};
