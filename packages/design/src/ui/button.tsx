import { Slot } from '@radix-ui/react-slot';
import { cn } from '~/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  [
    'group inline-flex items-center text-center justify-center gap-sm text-sm no-underline font-medium transition-colors gap-2',
    'disabled:text-gray-6',
    'text-primary disabled:text-gray-3',
    'bg-white disabled:bg-gray-2',
    'disabled:cursor-not-allowed',
    'border hover:border-orange-8 disabled:hover:border-gray-4',
  ],
  {
    variants: {
      variant: {
        outline: '',
        orange_outline: [
          'bg-orange hover:bg-white',
          'border-orange-5 disabled:border-gray-2',
          'text-white hover:text-primary',
        ],
        neutral: [
          'bg-gray-12',
          'border-gray-12 disabled:border-gray-4 hover:border-gray-11',
          'text-white',
        ],
        orange: [
          'bg-orange-9 hover:bg-orange-10 focus:bg-orange-10',
          'border-transparent',
          'text-white',
        ],
        transparent: [
          'text-primary hover:text-orange-9',
          'bg-transparent',
          'border-none hover:border-none',
        ],
        red: [
          'bg-tomatoA-3 disabled:bg-tomatoA-2',
          'border-tomatoA-4 hover:border-tomatoA-5 disabled:border-tomatoA-3',
          'text-tomatoA-10 disabled:text-tomatoA-9',
        ],
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-5 px-2 py-1',
        lg: 'h-12 px-6 py-3',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
      ring: {
        default: [
          'focus-ring',
          'data-[state=open]:ring-2 data-[state=open]:ring-orange-8 data-[state=open]:ring-offset-1',
        ],
        none: '',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'default',
      rounded: 'default',
      ring: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ring, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, ring, rounded }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
