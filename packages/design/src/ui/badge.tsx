import { cn } from "~/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type * as React from "react";

const badgeVariants = cva(
	"bg-white inline-flex items-center rounded-full border px-2.5 py-0.5 text-sub-xs font-semibold transition-colors focus-ring",
	{
		variants: {
			variant: {
				outline: "",
			},
		},
		defaultVariants: {
			variant: "outline",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
