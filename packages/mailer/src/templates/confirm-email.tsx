import { Html } from "@react-email/html";
import { Link } from "@react-email/link";
import { Head } from "@react-email/head";
import * as React from "react";
import { type Mail } from "../type";
import { FROM_EMAIL_NO_REPLY } from "../constants";

const ConfirmEmailEmail: Mail<{
  name: string;
  url: string;
}> = ({
  name = "name",
  url = "https://example.com/confirm-email?token=123",
}) => {
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

ConfirmEmailEmail.sender = FROM_EMAIL_NO_REPLY;
ConfirmEmailEmail.subject = () => `Confirmer votre adresse email`;

export default ConfirmEmailEmail;
