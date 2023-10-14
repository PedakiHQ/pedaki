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
    'border hover:border-orange-8 disabled:hover:border-gray-2',
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
        neutral: ['bg-gray-12', 'border-gray-12 hover:border-gray-11', 'text-white'],
        orange: ['bg-orange-9', 'border-orange-7 hover:border-orange-6', 'text-white'],
        transparent: [
          'text-primary hover:text-orange-9',
          'bg-transparent',
          'border-none hover:border-none',
        ],
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-5 px-2',
        lg: 'h-12 px-6 py-3',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
      ring: {
        default: [
          'ring-offset-bg-primary focus-visible:outline-none focus:ring-2 focus:ring-orange-4 focus:ring-offset-1',
          'data-[state=open]:ring-2 data-[state=open]:ring-orange-4 data-[state=open]:ring-offset-1',
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
