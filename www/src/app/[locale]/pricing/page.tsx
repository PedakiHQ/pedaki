import { Separator } from '@pedaki/design/ui/separator';
import Faq from '~/app/[locale]/pricing/faq';
import PriceTable from '~/app/[locale]/pricing/price-table';
import { PageHeader } from '~/components/PageHeader';
import { pageBaseStyle } from '~/styles/constants';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  title: 'Pricing',
};

const PricingPage = () => {
  return (
    <div className={pageBaseStyle}>
      <PageHeader
        title="Trouve une offre qui te convient"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
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
