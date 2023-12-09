import IconCheck from '~/ui/icons/IconCheck';
import { cn } from '~/utils/cn';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const stepIndicatorVariants = cva(
  'w-5 h-5 items-center flex justify-center rounded-full p-0.5 font-medium text-p-sm leading-[20px]',
  {
    variants: {
      status: {
        active: 'bg-primary-base text-white',
        completed: 'bg-primary-light text-white',
        pending: 'border text-soft bg-white',
      },
    },
    defaultVariants: {
      status: 'pending',
    },
  },
);

export interface StepIndicatorHorizontalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepIndicatorVariants> {
  number: number;
  text: string;
}

const StepIndicatorHorizontalItem = ({
  className,
  status,
  number,
  text,
  ...props
}: StepIndicatorHorizontalProps) => (
  <div className="flex transform items-center gap-2">
    <div
      className={cn(stepIndicatorVariants({ status }), className)}
      {...props}
      data-current={status === 'active'}
    >
      {status === 'completed' ? <IconCheck className="h-3 w-3" /> : number}
    </div>
    <span className={cn(status === 'active' ? 'text-main' : 'text-sub')}>{text}</span>
  </div>
);
StepIndicatorHorizontalItem.displayName = 'StepIndicatorHorizontalItem';

export { StepIndicatorHorizontalItem };
