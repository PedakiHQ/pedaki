import React from 'react';
import type { IconProps } from './type';

// Lucide icon: https://lucide.dev/icons/chevron-right
const IconChevronRight = (props: IconProps) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
);

export default IconChevronRight;
