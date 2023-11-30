import { cn } from '~/utils';
import * as React from 'react';

const Callout = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        'relative flex items-start gap-3',
        'px-5 py-4',
        'mb-4',
        'overflow-hidden',
        'rounded-xl',
        'border',
        className,
      )}
      {...props}
    />
  ),
);
Callout.displayName = 'Callout';

const CalloutIcon = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div role="img" ref={ref} className={cn('mt-0.5 w-4', className)} {...props} />
));
CalloutIcon.displayName = 'CalloutIcon';

const CalloutContent = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-soft overflow-x-auto text-sub-xs [&_p]:leading-relaxed', className)}
    {...props}
  />
));
CalloutContent.displayName = 'CalloutContent';

export { Callout, CalloutIcon, CalloutContent };
