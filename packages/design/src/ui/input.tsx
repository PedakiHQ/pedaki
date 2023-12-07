import type { IconType } from '~/ui/icons/type.ts';
import { cn } from '~/utils';
import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconType;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, className, type, ...props }, ref) => {
    return (
      <div className="relative">
        {Icon && (
          <Icon className="text-sub pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform" />
        )}
        <input
          type={type}
          className={cn(
            'focus-ring placeholder:text-soft text-sub-xs file:text-sub-xs data-[invalid=true]:border-state-error flex h-10 w-full rounded-md border bg-white px-3 py-2 file:border-0 file:bg-transparent file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
            Icon && 'pl-12',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
