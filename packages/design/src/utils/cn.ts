import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      shadow: [
        {
          shadow: ['outline', 'outline-lg'],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
