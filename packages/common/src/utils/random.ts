import { nanoid } from 'nanoid';

export function randomId(): string {
  return `v-${Math.random().toString(36).substring(2, 9)}`;
}

export const generateToken = (numberOfCharacters = 32, prefix = ''): string =>
  prefix + nanoid(numberOfCharacters - prefix.length);
