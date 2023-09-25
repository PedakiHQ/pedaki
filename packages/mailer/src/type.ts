import type React from 'react';
import type { Sender } from './constants.ts';

export type Mail<T> = ((props: T) => React.ReactElement) & {
  sender: Sender;
  subject: (props: T) => string;
};
