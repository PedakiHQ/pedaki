import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import * as React from "react";
import { type Mail } from "../type";
import { FROM_EMAIL_NO_REPLY } from "../constants";

const Email: Mail<{ name: string }> = ({ name = "name" }) => {
  return (
    <Html>
      <Button
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: "#000", color: "#fff" }}
      >
        Hello {name}
      </Button>
    </Html>
  );
};

Email.sender = FROM_EMAIL_NO_REPLY;
Email.subject = ({ name }) => `Hello ${name}`;

export default Email;
