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
      'font-size': [
        {
          'text': [
            'title-1',
            'title-2',
            'title-3',
            'title-4',
            'title-5',
            'title-6',
            'label-xl',
            'label-lg',
            'label-md',
            'label-sm',
            'label-xs',
            'p-xl',
            'p-lg',
            'p-md',
            'p-sm',
            'p-xs',
            'sub-md',
            'sub-sm',
            'sub-xs',
            'sub-2xs',
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
