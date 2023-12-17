'use client';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { cn } from '~/utils';
import * as React from 'react';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> & {
    animate?: boolean;
  }
>(({ className, animate, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn(
      animate && 'transition-all overflow-hidden',
      animate &&
        'data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
      className,
    )}
    {...props}
  />
));
CollapsibleContent.displayName = 'CollapsibleContent';

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
