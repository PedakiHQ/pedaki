import { env } from '~/env.mjs';

type Navigation = {
  name: string;
} & (
  | {
      children?: never;
      href: string;
    }
  | {
      href?: never;
      children: (Navigation & { href: string; description: string })[];
    }
);

export const navigation = [
  {
    name: 'Modules',
    children: [
      {
        href: 'https://docs.pedaki.fr/modules/class-management',
        name: 'Gestion de classes 1',
        description: 'About the project',
      },
    ],
  },
  {
    name: 'Resources',
    children: [
      {
        href: '/pricing',
        name: 'Pricing',
        description: 'Here comes the money',
      },
      {
        href: '/about',
        name: 'About',
        description: 'About the project',
      },
    ],
  },
  {
    name: 'Documentation',
    children: [
      {
        href: `${env.NEXT_PUBLIC_DOCS_URL}/news/changelog`,
        name: 'Changelog',
        description: 'Voir les notes de version',
      },
      {
        href: `${env.NEXT_PUBLIC_DOCS_URL}/support/roadmap`,
        name: 'Roadmap',
        description: 'Voir la feuille de route',
      },
      {
        href: `${env.NEXT_PUBLIC_DOCS_URL}/faq`,
        name: 'FAQ',
        description: 'Voir les questions fréquentes',
      },
      {
        href: `${env.NEXT_PUBLIC_DOCS_URL}/news/post`,
        name: 'Posts',
        description: 'Voir les articles',
      },
    ],
  },
] as Navigation[];
