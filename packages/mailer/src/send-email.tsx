import { Resend } from "resend";
import { type Mail } from "./type";
import { render } from "@react-email/render";

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
    const previewEmail = (await import("preview-email")).default;
    // TODO: add randomId
    // import { randomId } from "../lib/random";

    await previewEmail(
      {
        from: sender,
        to,
        subject,
        html,
      },
      {
        openSimulator: false,
        template: "./preview-email.pug",
      },
    );

    return Promise.resolve({ MessageId: "randomId()" });
  }

  return resend.sendEmail({
    from: sender,
    to,
    subject,
    html,
  });
};
