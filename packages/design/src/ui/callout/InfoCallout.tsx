import React from 'react';
import { cn } from '../../utils';
import IconInfoCircle from '../icons/IconInfoCircle';
import { Callout, CalloutContent, CalloutIcon } from './index';

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
