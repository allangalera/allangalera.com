import { DropdownMenu } from "@kobalte/core";
import { FiSun, FiMoon, FiMonitor } from "solid-icons/fi";
import { setTheme } from "@/utils";
import { THEME_OPTIONS } from "@/constants";

export const ThemeDropdown = () => {
  return (
    <DropdownMenu.Root sameWidth={false} slide={true}>
      <DropdownMenu.Trigger class="text-zinc-900 dark:text-zinc-50">
        <p>Theme</p>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content class="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-lg">
          <DropdownMenu.Arrow />
          <DropdownMenu.Item
            onSelect={() => setTheme(THEME_OPTIONS.Light)}
            class="flex gap-2 items-center p-2 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-t-lg"
          >
            <FiSun />
            <p class="text-sm leading-tight">Light</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => setTheme(THEME_OPTIONS.Dark)}
            class="flex gap-2 items-center p-2 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <FiMoon />
            <p class="text-sm leading-tight">Dark</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            class="flex gap-2 items-center p-2 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700  rounded-b-lg"
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
