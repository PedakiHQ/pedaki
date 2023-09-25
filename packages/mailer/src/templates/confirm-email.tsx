import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Link } from '@react-email/link';
import { FROM_EMAIL_NO_REPLY } from '~/constants';
import type { Mail } from '~/type';
import * as React from 'react';

const ConfirmEmailTemplate: Mail<{
  name: string;
  url: string;
}> = ({ name = 'name', url = 'https://example.com/confirm-email?token=123' }) => {
  return (
    <Html>
      <Head />
      <span>Hello {name},</span>
      <Link href={url} target="_blank">
        {url}
      </Link>
    </Html>
  );
};

ConfirmEmailTemplate.sender = FROM_EMAIL_NO_REPLY;
ConfirmEmailTemplate.subject = () => `Confirmer votre adresse email`;

export default ConfirmEmailTemplate;
