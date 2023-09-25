import type React from 'react';
import type { Sender } from './constants';

export type Mail<T> = ((props: T) => React.ReactElement) & {
  sender: Sender;
  subject: (props: T) => string;
};
