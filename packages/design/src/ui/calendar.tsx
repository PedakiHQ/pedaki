'use client';

import { IconChevronLeft } from '~/ui/icons';
import IconChevronRight from '~/ui/icons/IconChevronRight.tsx';
import { cn } from '~/utils';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { buttonVariants } from './button.tsx';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = React.forwardRef<React.ElementRef<typeof DayPicker>, CalendarProps>(
  ({ className, classNames, showOutsideDays = true, ...props }, ref) => {
    return (
      <DayPicker
        // @ts-ignore
        ref={ref}
        showOutsideDays={showOutsideDays}
        className={cn('p-3', className)}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-label-sm font-medium',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            buttonVariants({ variant: 'ghost-sub' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell: 'text-soft rounded-md w-9 font-normal text-[0.8rem]',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            buttonVariants({ variant: 'ghost-sub' }),
            'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
          ),
          day_range_end: 'day-range-end',
          day_selected:
            '!bg-primary-base text-white hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white',
          day_today: 'border !border-primary-base',
          day_outside:
            'day-outside text-disabled opacity-50 aria-selected:bg-primary-base/50 aria-selected:text-disabled aria-selected:opacity-30',
          day_disabled: 'text-disabled opacity-50',
          day_range_middle: 'aria-selected:bg-primary-base-light aria-selected:text-white',
          day_hidden: 'invisible',
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <IconChevronLeft className="h-4 w-4" />,
          IconRight: ({ ...props }) => <IconChevronRight className="h-4 w-4" />,
        }}
        {...props}
      />
    );
  },
);
Calendar.displayName = 'Calendar';

export { Calendar };
