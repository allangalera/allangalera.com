import { DropdownMenu } from '@kobalte/core';
import { FiSun, FiMoon, FiMonitor } from 'solid-icons/fi';
import { setTheme } from '@/utils';
import { THEME_OPTIONS } from '@/constants';

export const ThemeDropdown = () => {
  return (
    <DropdownMenu.Root sameWidth={false} slide={true}>
      <DropdownMenu.Trigger class="rounded-lg p-2 text-lg leading-tight text-zinc-900 hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-800">
        Theme
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content class="rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
          <DropdownMenu.Arrow />
          <DropdownMenu.Item
            onSelect={() => setTheme(THEME_OPTIONS.Light)}
            class="flex cursor-pointer items-center gap-2 rounded-t-lg p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <FiSun />
            <p class="text-sm leading-tight">Light</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => setTheme(THEME_OPTIONS.Dark)}
            class="flex cursor-pointer items-center gap-2 p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <FiMoon />
            <p class="text-sm leading-tight">Dark</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            class="flex cursor-pointer items-center gap-2 rounded-b-lg p-2 hover:bg-zinc-200  dark:hover:bg-zinc-700"
            onSelect={() => setTheme(THEME_OPTIONS.System)}
          >
            <FiMonitor />
            <p class="text-sm leading-tight">System</p>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
