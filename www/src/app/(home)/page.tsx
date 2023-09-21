import Features from '~/app/(home)/features';
import Hero from '~/app/(home)/hero';
import SocialProof from '~/app/(home)/social-proof';
import VideoDemo from '~/app/(home)/video-demo';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'Pedaki: Le futur de la gestion scolaire', // TODO
  },
  description: 'lorem ipsum dolor sit amet',
  openGraph: {
    images: [
      // TODO
    ],
    locale: 'fr',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <VideoDemo />
      <SocialProof />
      <Features />
    </>
  );
}
