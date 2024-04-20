import type React from "react";

export type Mail<T> = ((props: T) => React.ReactElement) & {
	sender: string;
	subject: (props: T) => string;
};
