import { DropdownMenu } from "@kobalte/core";
import { FiSun, FiMoon, FiMonitor } from "solid-icons/fi";
import { setTheme } from "@/utils";
import { THEME_OPTIONS } from "@/constants";

export const ThemeDropdown = () => {
  return (
    <DropdownMenu.Root sameWidth={false} slide={true}>
      <DropdownMenu.Trigger class="text-gray-900 dark:text-gray-50">
        <p>Theme</p>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
          <DropdownMenu.Item
            onSelect={() => setTheme(THEME_OPTIONS.Light)}
            class="flex gap-1 items-center"
          >
            <FiSun />
            <p>Light</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => setTheme(THEME_OPTIONS.Dark)}
            class="flex gap-1 items-center"
          >
            <FiMoon />
            <p>Dark</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            class="flex gap-1 items-center"
            onSelect={() => setTheme(THEME_OPTIONS.System)}
          >
            <FiMonitor />
            <p>System</p>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
