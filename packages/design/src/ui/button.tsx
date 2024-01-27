import { Slot } from '@radix-ui/react-slot';
import { cn } from '~/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  [
    'group inline-flex items-center justify-center text-label-sm no-underline font-medium transition-colors',
    'disabled:cursor-not-allowed data-[disabled]:cursor-not-allowed',
    'disabled:bg-weak data-[disabled]:bg-weak',
    'disabled:text-disabled data-[disabled]:text-disabled',
  ],
  {
    variants: {
      variant: {
        // Filled
        'filled-primary': ['bg-primary-base hover:bg-primary-dark', 'text-white'],
        'filled-neutral': ['bg-surface hover:bg-strong', 'text-white'],
        'filled-error': ['bg-red-base hover:bg-red-dark', 'text-white'],

        // Stroke
        'stroke-primary-main': ['bg-transparent', 'border hover:border-primary-base', 'text-main'],
        'stroke-primary': [
          'bg-transparent',
          'border hover:border-primary-base',
          'text-primary-base',
        ],

        // Ghost
        'ghost-primary': [
          'bg-transparent',
          'border border-transparent',
          'text-main hover:text-primary-base',
        ],
        'ghost-sub': [
          'bg-transparent hover:bg-weak',
          'border border-transparent',
          'text-sub hover:text-main',
        ],

        // Lighter
        'lighter-primary': [
          'bg-primary-lighter hover:bg-primary-light',
          'border border-transparent',
          'text-primary-base hover:text-primary-dark',
        ],
      },
      size: {
        lg: 'h-12 space-x-3 px-6 py-3',
        md: 'h-10 space-x-2 px-4 py-2.5',
        sm: 'h-9 space-x-1 px-2.5 py-2',
        xs: 'h-8 space-x-0.5 px-1.5 py-1.5',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
      ring: {
        default: [
          'focus-ring',
          'data-[state=open]:ring-2 data-[state=open]:ring-shadow-focus-primary data-[state=open]:ring-offset-1',
        ],
        none: '',
      },
    },
    defaultVariants: {
      variant: 'filled-primary',
      size: 'md',
      rounded: 'default',
      ring: 'default',
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'>,
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
