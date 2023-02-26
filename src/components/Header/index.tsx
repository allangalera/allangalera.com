import { ThemeDropdown } from "@/components/ThemeDropdown";

export const Header = () => {
  return (
    <header class="flex justify-between items-center sticky top-0 p-2 bg-zinc-50 dark:bg-zinc-900 border-b-zinc-700 border-b">
      <a
        class="text-zinc-900 dark:text-zinc-50 text-3xl rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 leading-tight"
        href="/"
      >
        Allan Galera
      </a>
      <ThemeDropdown />
    </header>
  );
};
