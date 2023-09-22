import SectionTitle from '~/components/section/SectionTitle';
import { getScopedI18n } from '~/locales/server';
import React from 'react';

const Naming = async () => {
  const namingT = await getScopedI18n('pages.about.naming');

  return (
    <section>
      <SectionTitle anchor="naming">{namingT('title')}</SectionTitle>
      <p className="text-secondary">{namingT('paragraphs.description')}</p>
    </section>
  );
};

export default Naming;
