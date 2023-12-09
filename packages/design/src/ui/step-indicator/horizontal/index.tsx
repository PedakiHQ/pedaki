import IconChevronRight from '../../../../../../../app.pedaki.fr/apps/store/.yalc/@pedaki/design/ui/icons/IconChevronRight';
import { cn } from '../../../../../../../app.pedaki.fr/apps/store/.yalc/@pedaki/design/utils/cn';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const stepIndicatorVariants = cva('flex flex-row justify-center items-center gap-4', {
  variants: {},
  defaultVariants: {},
});

export interface StepIndicatorHorizontalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof stepIndicatorVariants> {
  children: React.ReactNode[];
}

const StepIndicatorHorizontal = ({
  className,
  children,
  ...props
}: StepIndicatorHorizontalProps) => {
  return (
    <div className={cn(stepIndicatorVariants({}), className)} {...props}>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index !== children.length - 1 && <IconChevronRight className="h-4 w-4 text-sub" />}
        </React.Fragment>
      ))}
    </div>
  );
};
StepIndicatorHorizontal.displayName = 'StepIndicatorHorizontal';

export { StepIndicatorHorizontal };
