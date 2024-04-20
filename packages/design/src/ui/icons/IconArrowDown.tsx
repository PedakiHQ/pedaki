import React from "react";
import type { IconProps } from "./type.ts";

// https://lucide.dev/icons/arrow-down

const IconArrowDown = (props: IconProps) => (
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
		aria-label="Arrow Down Icon"
		{...props}
	>
		<path d="M12 5v14" />
		<path d="m19 12-7 7-7-7" />
	</svg>
);
export default IconArrowDown;
