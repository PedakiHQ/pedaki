import { cn } from '~/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link.js';
import * as React from 'react';

const styledLinkVariants = cva(
  'inline-flex items-center transition-colors disabled:pointer-events-none disabled:opacity-50 focus-orange-ring',
  {
    variants: {
      variant: {
        subtle: 'text-primary hover:text-secondary',
        subtle_secondary: 'text-secondary hover:text-primary',
      },
      decoration: {
        underline:
          'underline underline-offset-2 hover:decoration-2 decoration-1 decoration-orange-9',
      },
    },
    defaultVariants: {
      variant: 'subtle',
      decoration: undefined,
    },
  },
);
export type StyledLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof styledLinkVariants> & {
    linkClassName?: string;
  };

const StyledLink: React.FC<StyledLinkProps> = ({
  className,
  variant,
  decoration,
  linkClassName,
  ...props
}) => {
  const { children, ...other } = props;

  return (
    <Link {...other} className={cn('inline-block w-max', linkClassName)}>
      <button className={cn(styledLinkVariants({ variant, decoration, className }))} type="button">
        {children}
      </button>
    </Link>
  );
};
StyledLink.displayName = 'StyledLink';

export { StyledLink };
