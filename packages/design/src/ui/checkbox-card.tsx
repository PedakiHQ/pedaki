"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import IconCheck from "~/ui/icons/IconCheck.tsx";
import { cn } from "~/utils";
import * as React from "react";

type CheckboxProps = Omit<
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
	"children"
> & {
	title: string | React.ReactNode;
	description: string | React.ReactNode;
	left?: React.ReactNode;
};

const Checkbox = ({
	className,
}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) => {
	return (
		<div className="group-data-[state=checked]:bg-primary-base group-data-[state=checked]:border-primary-dark h-5 w-5 rounded-sm border bg-white text-white">
			<CheckboxPrimitive.Indicator
				className={cn(
					"flex h-full w-full items-center justify-center text-current",
					className,
				)}
			>
				<IconCheck className="h-4 w-4" />
			</CheckboxPrimitive.Indicator>
		</div>
	);
};

const CheckboxCard = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	CheckboxProps
>(({ left, title, description, className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			"focus-ring hover:bg-weak data-[state=checked]:border-primary-base group inline-flex w-full shrink-0 items-center gap-3.5 rounded-md border bg-white p-4 disabled:cursor-not-allowed",
			className,
		)}
		{...props}
	>
		{left && <div className="flex-shrink-0">{left}</div>}
		<div className="flex flex-1 flex-col gap-1 text-left">
			<div>
				<span className="text-main group-disabled:text-sub text-label-sm">
					{title}
				</span>
			</div>
			<p className="text-p-sm group-disabled:text-soft text-sub">
				{description}
			</p>
		</div>
		<Checkbox />
	</CheckboxPrimitive.Root>
));
CheckboxCard.displayName = CheckboxPrimitive.Root.displayName;

export { CheckboxCard };
