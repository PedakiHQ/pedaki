import { cn } from "~/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import Link from "next/link.js";
import type * as React from "react";

const styledLinkVariants = cva(
	"inline-flex items-center transition-colors disabled:pointer-events-none data-[disabled]:text-disabled data-[disabled]:decoration-stroke-disabled data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed focus-ring hover:decoration-2 decoration-1",
	{
		variants: {
			variant: {
				white: "text-white decoration-white",
				gray: "text-sub decoration-text-sub",
				black: "text-black decoration-black",
				blue: "text-blue-base decoration-blue-base",
				primary: "text-primary-base decoration-primary-light",
				error: "text-state-error decoration-state-error",
			},
			decoration: {
				underline: "underline",
				hover: "hover:underline",
				none: undefined,
			},
			offset: {
				1: "underline-offset-1",
				2: "underline-offset-2",
				3: "underline-offset-3",
				4: "underline-offset-4",
			},
		},
		defaultVariants: {
			variant: "black",
			decoration: "hover",
			offset: 4,
		},
	},
);
export type StyledLinkProps = React.ComponentProps<typeof Link> &
	VariantProps<typeof styledLinkVariants> & {
		linkClassName?: string;
		disabled?: boolean;
	};

const StyledLink: React.FC<StyledLinkProps> = ({
	className,
	variant,
	decoration,
	offset,
	...props
}) => {
	const { children, ...other } = props;

	return (
		<Link
			{...other}
			className={cn(
				styledLinkVariants({ variant, decoration, offset }),
				className,
			)}
			data-disabled={other.disabled}
		>
			{children}
		</Link>
	);
};
StyledLink.displayName = "StyledLink";

export { StyledLink };
