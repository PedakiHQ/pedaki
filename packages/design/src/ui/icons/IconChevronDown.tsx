import React from 'react';
import type { IconProps } from './type';

// Lucide icon: https://lucide.dev/icons/chevron-down
const IconChevronDown = (props: IconProps) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <path
      d="m6 9 6 6 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconChevronDown;
