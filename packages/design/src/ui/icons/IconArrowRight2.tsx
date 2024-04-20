import React from "react";
import type { IconProps } from "./type.ts";

// Lucide icon: https://lucide.dev/icons/move-right

const IconArrowRight2 = (props: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M18 8L22 12L18 16" />
		<path d="M2 12H22" />
	</svg>
);
export default IconArrowRight2;
