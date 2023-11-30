import { cn } from '~/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link.js';
import * as React from 'react';

const styledLinkVariants = cva(
  'inline-flex items-center transition-colors disabled:pointer-events-none data-[disabled]:text-disabled data-[disabled]:decoration-stroke-disabled data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed focus-ring underline-offset-4 hover:decoration-2 decoration-1',
  {
    variants: {
      variant: {
          gray: 'text-sub decoration-text-sub',
          black: 'text-black decoration-black',
          blue: 'text-blue-base decoration-blue-base',
          primary: 'text-primary-base decoration-primary-light',
          error: 'text-state-error decoration-state-error',
      },
      decoration: {
        underline: 'underline',
          hover: 'hover:underline',
          none: undefined,
      },
    },
    defaultVariants: {
      variant: 'black',
      decoration: 'hover',
    },
  },
);
export type StyledLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof styledLinkVariants> & {
    linkClassName?: string;
    disabled?: boolean;
  };

const StyledLink: React.FC<StyledLinkProps> = ({ className, variant, decoration, ...props }) => {
  const { children, ...other } = props;

  return (
    <Link {...other} className={cn(styledLinkVariants({ variant, decoration }), className)} data-disabled={other.disabled}>
      {children}
    </Link>
  );
};
StyledLink.displayName = 'StyledLink';

export { StyledLink };
