import React from "react";
import type { IconProps } from "./type.ts";

// Lucide icon: https://lucide.dev/icons/x
const IconX = (props: IconProps) => (
	<svg width="512" height="512" viewBox="0 0 24 24" {...props}>
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M18 6L6 18M6 6l12 12"
		/>
	</svg>
);
export default IconX;
