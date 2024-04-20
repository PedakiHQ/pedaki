import React from "react";
import type { IconProps } from "./type.ts";

// https://lucide.dev/icons/panel-left-close

const IconPanelLeftClose = (props: IconProps) => (
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
		<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
		<path d="M9 3v18" />
		<path d="m16 15-3-3 3-3" />
	</svg>
);
export default IconPanelLeftClose;
