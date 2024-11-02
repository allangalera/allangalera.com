import { FiGithub, FiLinkedin, FiTwitter } from 'solid-icons/fi';
import { TbBrandMastodon } from 'solid-icons/tb';
import { TbButterfly } from 'solid-icons/tb';

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
    name: 'Bluesky',
    href: 'https://bsky.app/profile/allangalera.bsky.social',
    Icon: TbButterfly,
  },
  {
    name: 'Mastodon',
    href: 'https://hachyderm.io/@allangalera',
    Icon: TbBrandMastodon,
  },
];

export const Footer = () => {
  return (
    <footer class="flex items-center justify-center gap-2 border-t border-t-zinc-300 p-2 dark:border-t-zinc-700">
      {SOCIAL_LINKS.map(({ href, Icon, name }) => (
        <a
          class="rounded-lg p-2 text-3xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
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
