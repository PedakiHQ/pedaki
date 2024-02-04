'use client';

import { Button } from '~/ui/button.tsx';
import IconCalendar from '~/ui/icons/IconCalendar.tsx';
import { cn } from '~/utils';
import * as React from 'react';
import { Calendar } from './calendar.tsx';
import { Popover, PopoverContent, PopoverTrigger } from './popover.tsx';

interface DayPickerProps {
  date: Date | undefined;
  setDate: (date: Date | string | undefined) => void;
  format: (date: Date | string | undefined) => string;
  disabled?: boolean;
  className?: string;
  calendarProps?: React.ComponentProps<typeof Calendar>;
}

const DayPicker = React.forwardRef<React.ElementRef<typeof Calendar>, DayPickerProps>(
  ({ date, setDate, format, disabled, className, calendarProps }, ref) => {
    return (
      <Popover open={disabled ? false : undefined}>
        <PopoverTrigger asChild>
          <Button
            variant="stroke"
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-soft',
              className,
            )}
            disabled={disabled}
          >
            <IconCalendar className="mr-2 h-4 w-4" />
            <span>{format(date)}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            ref={ref}
            {...calendarProps}
            mode="single"
            initialFocus
            selected={date}
            onSelect={setDate}
          />
        </PopoverContent>
      </Popover>
    );
  },
);
DayPicker.displayName = 'DayPicker';

export default DayPicker;
