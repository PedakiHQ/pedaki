import { Fira_Code, Open_Sans } from 'next/font/google';
import { cn } from './utils';

export const FontSans = Open_Sans({
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
  preload: true,
});

export const FontMono = Fira_Code({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mono',
  preload: false,
});

export const fontClassName: string = cn(FontSans.variable, FontMono.variable);
