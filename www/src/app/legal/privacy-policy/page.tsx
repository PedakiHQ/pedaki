import { PageHeader } from '~/components/PageHeader';
import { pageBaseStyle } from '~/styles/constants';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  title: 'PrivacyPolicy',
};

const PrivacyPolicyPage = () => {
  return (
    <div className={pageBaseStyle}>
      <PageHeader title="Privacy Policy" />
      <ul>
        <li>Parler d&apos;aws (europe)</li>
        <li>Parler de vercel</li>
        <li>Parler des analytics (europe)</li>
        <li>Parler des planetscale (europe) - db pour les comptes/stockage de licenses</li>
        <li>Parler des mintlify (docs)</li>
        <li>Parler des cookies de connexions</li>
        <li>Parler de stripe (paiment)</li>
        <li>Donner un lien vers la doc où on parlera de comment leurs données sont stockées</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicyPage;
