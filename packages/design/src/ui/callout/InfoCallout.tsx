import { cn } from '~/utils';
import React from 'react';
import IconInfoCircle from '../icons/IconInfoCircle.tsx';
import { Callout, CalloutContent, CalloutIcon } from './index.tsx';

interface InfoCalloutProps {
  children: React.ReactNode;
  className?: string;
}

const InfoCallout = ({ children, className }: InfoCalloutProps) => {
  return (
    <Callout className={cn('border-border', 'bg-secondary/50', className)}>
      <CalloutIcon>
        <IconInfoCircle className="text-muted h-4 w-4" />
      </CalloutIcon>
      <CalloutContent>{children}</CalloutContent>
    </Callout>
  );
};

export default InfoCallout;
