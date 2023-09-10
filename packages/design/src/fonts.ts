import { Fira_Code, Open_Sans } from 'next/font/google';

const OpenSansOptions = {
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
  preload: true,
} as Parameters<typeof Open_Sans>[0];

const FireCodeOptions = {
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mono',
  preload: false,
} as Parameters<typeof Fira_Code>[0];

export { Fira_Code as FireCodeRaw, FireCodeOptions, Open_Sans as OpenSansRaw, OpenSansOptions };
