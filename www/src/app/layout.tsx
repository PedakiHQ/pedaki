import React from 'react';
import '@pedaki/design/tailwind/index.css';
import '../styles/globals.css';
import { cn } from '@pedaki/design/utils';
import { fontClassName } from '~/config/font';
import type { Metadata } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import { Providers } from './[locale]/(home)/providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={cn(fontClassName)} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pedaki.fr'),
  title: {
    template: '%s - Pedaki',
    default: 'Pedaki',
  },
  description: 'todo',
  applicationName: 'Pedaki',
  openGraph: {
    title: 'Pedaki',
    description: 'todo',
    siteName: 'Pedaki',
    locale: 'fr',
    url: 'https://www.pedaki.fr',
  },
  keywords: ['management', 'school', 'école', 'gestion'], // TODO
  themeColor: '#ffffff',
  robots: 'index, follow',
  colorScheme: 'light',
  manifest: 'https://www.pedaki.fr/site.webmanifest',
  alternates: {
    canonical: 'https://www.pedaki.fr',
    languages: {
      'x-default': 'https://www.pedaki.fr',
      fr: 'https://www.pedaki.fr',
      en: 'https://www.pedaki.fr/en',
    },
  },
  authors: [
    {
      name: 'Nathan',
      url: 'https://github.com/vahor',
    },
  ],
  icons: [
    { rel: 'icon', url: 'https://www.pedaki.fr/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://www.pedaki.fr/apple-touch-icon.png' },
    { rel: 'mask-icon', url: 'https://www.pedaki.fr/favicon.ico' },
    { rel: 'image/x-icon', url: 'https://www.pedaki.fr/favicon.ico' },
  ],
};
