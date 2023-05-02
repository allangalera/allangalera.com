import { FiGithub, FiLinkedin, FiTwitter } from 'solid-icons/fi';
import { TbBrandMastodon } from 'solid-icons/tb';

const SOCIAL_LINKS = [
  {
    name: 'Github',
    href: 'https://github.com/allangalera/',
    Icon: FiGithub,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/allangalera/',
    Icon: FiLinkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/GaleraAllan',
    Icon: FiTwitter,
  },
  {
    name: 'Mastodon',
    href: 'https://hachyderm.io/@allangalera',
    Icon: TbBrandMastodon,
  },
];

export const Footer = () => {
  return (
    <footer class="flex gap-2 justify-center items-center p-2 bg-zinc-50 dark:bg-zinc-900 border-t border-t-zinc-300 dark:border-t-zinc-700">
      {SOCIAL_LINKS.map(({ href, Icon, name }) => (
        <a
          class="text-zinc-900 dark:text-zinc-50 text-3xl rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2"
          href={href}
          target="_blank"
          aria-label={`${name} profile`}
          title={name}
          rel="me"
        >
          <Icon />
        </a>
      ))}
    </footer>
  );
};
