import { PageHeader } from '~/components/PageHeader';
import { pageBaseStyle } from '~/styles/constants';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  title: 'CguPage',
};

const CguPage = () => {
  return (
    <div className={pageBaseStyle}>
      <PageHeader title="Conditions générales d'utilisation" />
    </div>
  );
};

export default CguPage;
