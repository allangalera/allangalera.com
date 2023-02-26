import { FiGithub, FiLinkedin } from "solid-icons/fi";

export const Footer = () => {
  return (
    <footer class="flex gap-2 justify-center items-center p-4">
      <a
        class="text-zinc-900 dark:text-zinc-50 text-3xl rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2"
        href="https://github.com/allangalera/"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        class="text-zinc-900 dark:text-zinc-50 text-3xl rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2"
        href="https://www.linkedin.com/in/allangalera/"
        target="_blank"
      >
        <FiLinkedin />
      </a>
    </footer>
  );
};