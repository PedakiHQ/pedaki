"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "~/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

const separatorVariants = cva("bg-border shrink-0", {
	variants: {
		orientation: {
			horizontal: "h-[1px] w-full",
			vertical: "h-full w-[1px]",
		},
		gradient: {
			none: "",
			gray: "bg-gradient-to-r from-white via-neutral-200 to-white",
		},
	},
	defaultVariants: {
		orientation: "horizontal",
		gradient: "none",
	},
});

export interface SeparatorProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof separatorVariants> {}

const Separator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
		SeparatorProps
>(
	(
		{
			className,
			orientation = "horizontal",
			gradient,
			decorative = true,
			...props
		},
		ref,
	) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={cn(separatorVariants({ orientation, gradient }), className)}
			{...props}
		/>
	),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
