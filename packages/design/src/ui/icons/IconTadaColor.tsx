import React from "react";
import type { IconProps } from "./type.ts";

// Lucide icon: https://lucide.dev/icons/party-popper
const IconTadaColor = (props: IconProps) => (
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
		role="img"
		aria-label="party popper icon"
	>
		<path d="M5.8 11.3 2 22l10.7-3.79" stroke="#DD2E44" fill="#DD2E44" />
		<path d="M4 3h.01" stroke="#5D933D" />
		<path d="M22 8h.01" stroke="#FECC4E" />
		<path d="M15 2h.01" stroke="#9367CF" />
		<path d="M22 20h.01" stroke="#4BB9D0" />
		<path
			d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
			stroke="#AA8DD9"
		/>
		<path
			d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"
			stroke="#78B256"
		/>
		<path
			d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"
			stroke="#78B256"
		/>
		<path
			d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
			stroke="#A1041D"
			fill="#8e041a"
		/>
	</svg>
);

export default IconTadaColor;
