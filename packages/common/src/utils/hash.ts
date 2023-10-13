import * as crypto from 'crypto';
import bcrypt from 'bcryptjs';

export const hash256 = (input: string): string => {
  const sha256 = crypto.createHash('sha256');
  return sha256.update(input).digest('hex');
};

export const hmac = (input: string, secret = ''): string => {
  const hmac = crypto.createHmac('sha256', secret);
  return hmac.update(input).digest('hex');
};

export const hashPassword = (password: string, pepper: string): string => {
  const salt = bcrypt.genSaltSync(12);
  return bcrypt.hashSync(hmac(password, pepper), salt);
};

export const matchPassword = (
  password: string,
  hashedPassword: string,
  pepper: string,
): boolean => {
  return bcrypt.compareSync(hmac(password, pepper), hashedPassword);
};

export const ENCRYPTION_ALGORITHM = 'aes-256-gcm';
export const encrypt = (text: string, key: string): string => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, Buffer.from(key, 'utf-8'), iv);
  const encrypted = cipher.update(text, 'utf8', 'base64') + cipher.final('base64');
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, Buffer.from(encrypted)]).toString('hex');
};

export const decrypt = (encrypted: string, key: string): string => {
  const content = Buffer.from(encrypted, 'hex');
  const iv = content.subarray(0, 16);
  const tag = content.subarray(16, 32);
  const text = content.subarray(32);
  const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, Buffer.from(key, 'utf-8'), iv);
  decipher.setAuthTag(tag);
  return decipher.update(text.toString(), 'base64', 'utf8') + decipher.final('utf8');
};
