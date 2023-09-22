import { env } from '~/env.mjs';

interface Navigation {
  id: string;
  children?: readonly (Navigation & { href: string })[];
}

export const navigation = [
  {
    id: 'modules',
    children: [
      {
        id: 'management',
        href: 'https://docs.pedaki.fr/modules/class-management',
      },
    ],
  },
  {
    id: 'resources',
    children: [
      {
        id: 'pricing',
        href: '/pricing',
      },
      {
        id: 'about',
        href: '/about',
      },
    ],
  },
  {
    id: 'docs',
    children: [
      {
        id: 'changelog',
        href: `${env.NEXT_PUBLIC_DOCS_URL}/news/changelog`,
      },
      {
        id: 'roadmap',
        href: `${env.NEXT_PUBLIC_DOCS_URL}/support/roadmap`,
      },
      {
        id: 'faq',
        href: `${env.NEXT_PUBLIC_DOCS_URL}/faq`,
      },
      {
        id: 'post',
        href: `${env.NEXT_PUBLIC_DOCS_URL}/news/post`,
      },
    ],
  },
] as const satisfies readonly Navigation[];
