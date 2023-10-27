'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import IconCheck from '~/ui/icons/IconCheck.tsx';
import { cn } from '~/utils';
import * as React from 'react';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'focus-orange-ring data-[state=checked]:bg-secondary data-[state=checked]:text-primary peer inline-flex h-4 w-4 shrink-0 rounded-sm border disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
      <IconCheck className="h-3.5 w-3.5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
