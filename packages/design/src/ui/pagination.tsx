import type { ButtonProps } from '~/ui/button.tsx';
import { Button, buttonVariants } from '~/ui/button.tsx';
import IconChevronLeft from '~/ui/icons/IconChevronLeft.tsx';
import IconChevronRight from '~/ui/icons/IconChevronRight.tsx';
import IconChevronsLeft from '~/ui/icons/IconChevronsLeft.tsx';
import IconChevronsRight from '~/ui/icons/IconChevronsRight.tsx';
import IconMoreHorizontal from '~/ui/icons/IconMoreHorizontal.tsx';
import { cn } from '~/utils';
import Link from 'next/link.js';
import * as React from 'react';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-2', className)} {...props} />
  ),
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />,
);
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Partial<Pick<ButtonProps, 'size'>> &
  React.ComponentProps<typeof Link>;

const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: 'ghost-sub',
        size,
      }),
      'border-main hover:bg-weak border',
      isActive && 'border-primary-base',
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  href,
  ...props
}: React.ComponentProps<typeof Button> & { href: string }) => (
    <Link href={href} prefetch={false}>
  <Button aria-label="Go to previous page" size="icon" variant="ghost-sub" {...props}>
      <IconChevronLeft className="h-4 w-4" />
  </Button>
    </Link>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  href,
  ...props
}: React.ComponentProps<typeof Button> & { href: string }) => (
  <Link href={href} prefetch={false}>
    <Button aria-label="Go to next page" size="icon" variant="ghost-sub" {...props}>
      <IconChevronRight className="h-4 w-4" />
    </Button>
  </Link>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationFirst = ({
  href,
  ...props
}: React.ComponentProps<typeof Button> & { href: string }) => (
  <Link href={href} prefetch={false}>
    <Button aria-label="Go to first page" size="icon" variant="ghost-sub" {...props}>
      <IconChevronsLeft className="h-4 w-4" />
    </Button>
  </Link>
);
PaginationFirst.displayName = 'PaginationFirst';

const PaginationLast = ({
  href,
  ...props
}: React.ComponentProps<typeof Button> & { href: string }) => (
  <Link href={href} prefetch={false}>
    <Button aria-label="Go to last page" size="icon" variant="ghost-sub" {...props}>
      <IconChevronsRight className="h-4 w-4" />
    </Button>
  </Link>
);
PaginationLast.displayName = 'PaginationLast';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <IconMoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
};
