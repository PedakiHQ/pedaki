import { cn } from '~/utils';
import React from 'react';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('bg-gray-4 h-full w-full animate-pulse rounded-md', className)} {...props} />
  );
}

export { Skeleton };
