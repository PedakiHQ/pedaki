import { Resend } from "resend";
import { type Mail } from "./type";
import { render } from "@react-email/render";
import previewEmail from "preview-email";
// import { randomId } from "../lib/random";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async <T,>(
  to: string[] | string,
  mail: Mail<T>,
  props: T,
) => {
  const react = mail(props);
  const subject = mail.subject(props);
  const sender = mail.sender;
  const html = render(react, {});

  if (
    process.env.NODE_ENV === "development" &&
    process.env.MAILER_PREVIEW !== "false"
  ) {
    await previewEmail(
      {
        from: sender,
        to,
        subject,
        html,
      },
      {
        openSimulator: false,
        // TODO: this is not great
        template: "node_modules/@pedaki/common/mailer/preview-email.pug",
      },
    );

    return Promise.resolve({ MessageId: 'randomId()' });
  }

  return resend.sendEmail({
    from: sender,
    to,
    subject,
    html,
  });
};
