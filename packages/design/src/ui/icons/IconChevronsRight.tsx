import React from "react";
import type { IconProps } from "./type.ts";

// https://lucide.dev/icons/chevrons-right
const IconChevronsRight = (props: IconProps) => (
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
		<path d="m6 17 5-5-5-5" />
		<path d="m13 17 5-5-5-5" />
	</svg>
);

export default IconChevronsRight;
