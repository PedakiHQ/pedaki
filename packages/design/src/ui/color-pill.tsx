import { cn } from "~/utils";
import type React from "react";

export interface ColorPillProps extends React.HTMLAttributes<HTMLDivElement> {
	// CSS color value
	color: string;
}

export const ColorPill = ({ color, className, ...props }: ColorPillProps) => {
	return (
		<div
			className={cn(
				"relative block rounded-full border leading-none",
				className,
			)}
			style={{ backgroundColor: color }}
			{...props}
		></div>
	);
};
