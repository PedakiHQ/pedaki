import { PageHeader } from '~/components/PageHeader';
import { getScopedI18n } from '~/locales/server';
import { pageBaseStyle } from '~/styles/constants';
import React from 'react';

export const generateMetadata = async () => {
  const termsT = await getScopedI18n('pages.termsOfService');

  return {
    title: termsT('metadata.title'),
    description: termsT('metadata.description'),
  };
};

const TermsOfService = async () => {
  const termsT = await getScopedI18n('pages.termsOfService');

  return (
    <div className={pageBaseStyle}>
      <PageHeader title={termsT('header.title')} description={termsT('header.description')} />
    </div>
  );
};

export default TermsOfService;
