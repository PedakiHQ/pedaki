import React from "react";
import type { IconProps } from "./type.ts";

// https://lucide.dev/icons/plus

const IconPlus = (props: IconProps) => (
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
		role="img"
		aria-label="Plus Icon"
		{...props}
	>
		<path d="M5 12h14" />
		<path d="M12 5v14" />
	</svg>
);
export default IconPlus;
