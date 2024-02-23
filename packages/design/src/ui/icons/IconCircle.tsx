import React from 'react';
import type { IconProps } from './type.ts';

// https://lucide.dev/icons/circle

const IconCircle = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
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
    <circle cx="12" cy="12" r="10" />
  </svg>
);
export default IconCircle;
