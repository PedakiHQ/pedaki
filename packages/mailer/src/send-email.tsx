import { render } from '@react-email/render';
import { Resend } from 'resend';
import type { Mail } from './type.ts';

const isDev = process.env.NODE_ENV === 'development' && process.env.MAILER_PREVIEW !== 'false';
const resend = isDev ? null : new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async <T,>(
  to: string[] | string,
  mail: Mail<T>,
  props: T,
): Promise<{
  MessageId: string;
}> => {
  const react = mail(props);
  const subject = mail.subject(props);
  const sender = mail.sender;
  const html = render(react, {});

  if (isDev) {
    const previewEmail = (await import('preview-email')).default;
    await previewEmail(
      {
        from: sender,
        to,
        subject,
        html,
      },
      {
        openSimulator: false,
        template: 'node_modules/@pedaki/mailer/preview-email.pug',
      },
    );

    return Promise.resolve({ MessageId: 'randomId()' });
  } else {
    const { data, error } = await resend!.emails.send({
      from: sender,
      to,
      subject,
      html,
    });

    if (error ?? !data) {
      return Promise.reject(error?.message ?? 'Unknown error');
    }

    return Promise.resolve({ MessageId: data.id });
  }
};
