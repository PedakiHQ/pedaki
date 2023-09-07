import * as crypto from 'crypto';
import bcrypt from '@node-rs/bcrypt';

export const hash256 = (input: string): string => {
  const sha256 = crypto.createHash('sha256');
  return sha256.update(input).digest('hex');
};

export const hmac = (input: string, secret = ''): string => {
  const hmac = crypto.createHmac('sha256', secret);
  return hmac.update(input).digest('hex');
};

export const hashPassword = (password: string, pepper: string): string => {
  return bcrypt.hashSync(hmac(password, pepper), 12);
};

export const matchPassword = (
  password: string,
  hashedPassword: string,
  pepper: string,
): boolean => {
  return bcrypt.compareSync(hmac(password, pepper), hashedPassword);
};
