import { Separator } from '@pedaki/design/ui/separator';
import AboutUs from '~/app/[locale]/about/about-us';
import Assets from '~/app/[locale]/about/assets';
import BrandColors from '~/app/[locale]/about/brand-colors';
import Fonts from '~/app/[locale]/about/fonts';
import Naming from '~/app/[locale]/about/naming';
import { PageHeader } from '~/components/PageHeader';
import { getScopedI18n } from '~/locales/server';
import { pageBaseStyle } from '~/styles/constants';
import React from 'react';

export const generateMetadata = async () => {
  const aboutT = await getScopedI18n('pages.about');

  return {
    title: aboutT('metadata.title'),
    description: aboutT('metadata.description'),
  };
};

const AboutPage = async () => {
  const aboutT = await getScopedI18n('pages.about');

  return (
    <div className={pageBaseStyle}>
      <PageHeader title={aboutT('header.title')} description={aboutT('header.description')} />
      <div className="container mt-8">
        <Separator gradient="gray" className="mb-8" />
        <div className="flex flex-col gap-16">
          <AboutUs />
          <Naming />
          <Assets />
          <BrandColors />
          <Fonts />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
