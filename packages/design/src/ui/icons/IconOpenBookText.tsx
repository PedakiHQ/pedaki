import React from 'react';
import type { IconProps } from './type.ts';

// https://lucide.dev/icons/book-open-text

const IconOpenBookText = (props: IconProps) => (
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
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    <path d="M6 8h2" />
    <path d="M6 12h2" />
    <path d="M16 8h2" />
    <path d="M16 12h2" />
  </svg>
);
export default IconOpenBookText;
