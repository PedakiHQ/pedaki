import React from "react";
import type { IconProps } from "./type.ts";

// Lucide Icon: https://lucide.dev/icons/info
const IconInfoCircle = (props: IconProps) => (
	<svg
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		aria-label="info"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<circle cx="12" cy="12" r="10" />
		<path d="M12 16v-4" />
		<path d="M12 8h.01" />
	</svg>
);
export default IconInfoCircle;
