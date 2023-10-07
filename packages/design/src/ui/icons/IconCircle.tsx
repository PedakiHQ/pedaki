import React from 'react';
import type {IconProps} from './type.ts';

// Lucide icon: https://lucide.dev/icons/circlehttps://lucide.dev/icons/arrow-right
const IconCircle = (props: IconProps) => (
    <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"/>
    </svg>
);

export default IconCircle;
