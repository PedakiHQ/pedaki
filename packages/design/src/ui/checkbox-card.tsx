'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import IconCheck from '~/ui/icons/IconCheck.tsx';
import {cn} from '~/utils';
import * as React from 'react';

type CheckboxProps = Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'children'> & {
    children: (props: {
        Checkbox: ({className}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) => React.ReactNode
    }) => React.ReactElement;
}

const Checkbox = ({className}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) => {
    return (
        <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current', className)}>
            <IconCheck className="h-3.5 w-3.5"/>
        </CheckboxPrimitive.Indicator>
    )
}

const CheckboxCard = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(({children, className, ...props}, ref) => (
    <label>
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                'focus-ring data-[state=checked]:bg-secondary data-[state=checked]:text-primary peer inline-flex h-4 w-4 shrink-0 rounded-sm border disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        >
            {children({Checkbox})}
        </CheckboxPrimitive.Root>
    </label>
));
CheckboxCard.displayName = CheckboxPrimitive.Root.displayName;

export {CheckboxCard};
