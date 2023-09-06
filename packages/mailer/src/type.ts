import { type Sender } from "./constants";
import type React from "react";

export type Mail<T> = ((props: T) => React.ReactElement) & {
  sender: Sender;
  subject: (props: T) => string;
};
