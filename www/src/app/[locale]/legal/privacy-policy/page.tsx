import { PageHeader } from '~/components/PageHeader';
import { getScopedI18n } from '~/locales/server';
import { pageBaseStyle } from '~/styles/constants';
import React from 'react';

export const generateMetadata = async () => {
  const privacyT = await getScopedI18n('pages.privacyPolicy');

  return {
    title: privacyT('metadata.title'),
    description: privacyT('metadata.description'),
  };
};

const PrivacyPolicyPage = async () => {
  const privacyT = await getScopedI18n('pages.privacyPolicy');

  return (
    <div className={pageBaseStyle}>
      <PageHeader title={privacyT('header.title')} description={privacyT('header.description')} />
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
