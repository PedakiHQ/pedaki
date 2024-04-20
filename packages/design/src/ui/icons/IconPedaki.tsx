import React from "react";
import type { IconProps } from "./type.ts";

const IconPedaki = (props: IconProps) => (
	<svg role="img" viewBox="0 0 691 691" fill="none" {...props}>
		<rect
			x="1.5"
			y="1.5"
			width="688"
			height="688"
			rx="158.5"
			fill="url(#paint0_radial_30_22)"
			stroke="black"
			strokeWidth="3"
		/>
		<rect
			x="125"
			y="142"
			width="440.358"
			height="405.322"
			rx="60"
			fill="white"
		/>
		<g filter="url(#filter0_d_30_22)">
			<path
				d="M191.967 142H505.358C538.495 142 565.358 168.863 565.358 202V344.661H191.967V142Z"
				fill="#FDBA74"
			/>
			<path
				d="M191.967 344.661H565.358V487.322C565.358 520.459 538.495 547.322 505.358 547.322H191.967V344.661Z"
				fill="#33887E"
			/>
		</g>
		<rect x="256.904" y="142" width="28.4102" height="405.322" fill="#202139" />
		<defs>
			<filter
				id="filter0_d_30_22"
				x="91.9668"
				y="42"
				width="573.391"
				height="605.322"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset />
				<feGaussianBlur stdDeviation="50" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_30_22"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_30_22"
					result="shape"
				/>
			</filter>
			<radialGradient
				id="paint0_radial_30_22"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(345.5) rotate(90) scale(691)"
			>
				<stop offset="0.000755348" stopColor="#20213E" />
				<stop offset="1" stopColor="#1C1B1B" />
			</radialGradient>
		</defs>
	</svg>
);

export default IconPedaki;
