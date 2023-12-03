import { cn } from '~/utils';
import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'focus-ring placeholder:text-soft text-sub-xs file:text-sub-xs flex h-10 w-full rounded-md border bg-white px-3 py-2 file:border-0 file:bg-transparent file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
