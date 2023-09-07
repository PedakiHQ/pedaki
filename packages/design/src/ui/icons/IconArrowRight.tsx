import React from 'react';
import type { IconProps } from './type';

// Lucide icon: https://lucide.dev/icons/arrow-right
const IconArrowRight = (props: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default IconArrowRight;
