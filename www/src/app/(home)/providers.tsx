'use client';

import React from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

interface Props {
  children: (React.ReactElement | React.ReactNode) | (React.ReactElement | React.ReactNode)[];
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <BalancerProvider>{children}</BalancerProvider>
    </>
  );
};
