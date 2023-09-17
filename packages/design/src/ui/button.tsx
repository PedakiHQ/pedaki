import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../utils/cn';

const buttonVariants = cva(
  [
    'group inline-flex items-center text-center justify-center gap-sm text-sm no-underline font-medium transition-colors gap-2',
    'disabled:text-gray-600',
    'ring-offset-background  focus-visible:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2',
    'text-primary disabled:text-gray-300',
    'bg-white disabled:bg-gray-200',
    'disabled:cursor-not-allowed',
    'border hover:border-orange-500 disabled:hover:border-gray-200',
  ],
  {
    variants: {
      variant: {
        outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground',
        orange: [
          'bg-orange hover:bg-white',
          'border-orange-500 disabled:border-gray-200',
          'text-white hover:text-primary',
        ],
        transparent: [
          'text-primary hover:text-orange',
          'bg-transparent',
          'border-none hover:border-none',
        ],
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-5 px-2',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
      rounded: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
