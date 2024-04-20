import React from "react";
import type { IconProps } from "./type.ts";

// https://lucide.dev/icons/user-round-plus

const IconUserPlus = (props: IconProps) => (
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
		<path d="M2 21a8 8 0 0 1 13.292-6" />
		<circle cx="10" cy="8" r="5" />
		<path d="M19 16v6" />
		<path d="M22 19h-6" />
	</svg>
);
export default IconUserPlus;
