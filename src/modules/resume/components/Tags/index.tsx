import { Component, Show } from 'solid-js';
import { pascalCase } from 'change-case';

type TagProps = {
  tag: string;
};

export const Tags: Component<TagProps> = (props) => {
  return (
    <Show when={props.tag.trim().length > 0}>
      <p class="text-sm text-emerald-600 dark:text-emerald-300">
        #{pascalCase(props.tag.trim())}
      </p>
    </Show>
  );
};
