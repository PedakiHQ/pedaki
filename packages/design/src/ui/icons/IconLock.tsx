import React from "react";
import type { IconProps } from "./type.ts";

// https://lucide.dev/icons/lock-keyhole

const IconLock = (props: IconProps) => (
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
		<circle cx="12" cy="16" r="1" />
		<rect x="3" y="10" width="18" height="12" rx="2" />
		<path d="M7 10V7a5 5 0 0 1 10 0v3" />
	</svg>
);
export default IconLock;
