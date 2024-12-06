import { FiSun, FiMoon, FiMonitor } from 'solid-icons/fi';
import type { ThemeOptions } from '@/types';
import { setTheme } from '@/utils';
import { THEME_OPTIONS } from '@/constants';
import { Menu } from '@ark-ui/solid/menu';

export const ThemeDropdown = () => (
  <Menu.Root
    onSelect={(selected) => {
      setTheme(selected.value as ThemeOptions);
    }}
  >
    <Menu.Trigger class="rounded-lg p-2 text-lg leading-tight text-zinc-900 hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-800">
      Theme
    </Menu.Trigger>
    <Menu.Positioner>
      <Menu.Content class="rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
        <Menu.Item
          class="flex cursor-pointer items-center gap-2 rounded-t-lg p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          value={THEME_OPTIONS.Light}
        >
          <FiSun />
          <p class="text-sm leading-tight">Light</p>
        </Menu.Item>
        <Menu.Item
          value={THEME_OPTIONS.Dark}
          class="flex cursor-pointer items-center gap-2 p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700"
        >
          <FiMoon />
          <p class="text-sm leading-tight">Dark</p>
        </Menu.Item>
        <Menu.Item
          value={THEME_OPTIONS.System}
          class="flex cursor-pointer items-center gap-2 rounded-b-lg p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700"
        >
          <FiMonitor />
          <p class="text-sm leading-tight">System</p>
        </Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
);
