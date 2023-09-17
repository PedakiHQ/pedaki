import { cn } from '../utils';
import React from "react";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('bg-tertiary animate-pulse rounded-md h-full w-full', className)} {...props} />;
}

export { Skeleton };
