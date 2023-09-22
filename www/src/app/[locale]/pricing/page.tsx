import { Separator } from '@pedaki/design/ui/separator';
import Faq from '~/app/[locale]/pricing/faq';
import PriceTable from '~/app/[locale]/pricing/price-table';
import { PageHeader } from '~/components/PageHeader';
import { getScopedI18n } from '~/locales/server';
import { pageBaseStyle } from '~/styles/constants';
import React from 'react';

export const generateMetadata = async () => {
  const pricingT = await getScopedI18n('pages.pricing');

  return {
    title: pricingT('metadata.title'),
    description: pricingT('metadata.description'),
  };
};

const PricingPage = async () => {
  const pricingT = await getScopedI18n('pages.pricing');

  return (
    <div className={pageBaseStyle}>
      <PageHeader title={pricingT('header.title')} description={pricingT('header.description')} />
      <div className="mt-8">
        {/* z-[2] is required as we use a blur hack in PriceTable */}
        <Separator gradient="gray" className="container relative z-[2]" />
        <PriceTable />
        <Faq />
      </div>
    </div>
  );
};

export default PricingPage;
