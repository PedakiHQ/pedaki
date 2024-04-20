// https://github.com/streamich/react-use/blob/e27c1930da8b94a2c570954786aa68a3dc5624be/src/useBeforeUnload.ts

import { useCallback, useEffect } from "react";
import { off, on } from "./util.ts";

const useBeforeUnload = (
	enabled: boolean | (() => boolean) = true,
	message?: string,
) => {
	const handler = useCallback(
		(event: BeforeUnloadEvent) => {
			const finalEnabled = typeof enabled === "function" ? enabled() : true;

			if (!finalEnabled) {
				return;
			}

			event.preventDefault();

			if (message) {
				event.returnValue = message;
			}

			return message;
		},
		[enabled, message],
	);

	useEffect(() => {
		if (!enabled) {
			return;
		}

		on(window, "beforeunload", handler);

		return () => off(window, "beforeunload", handler);
	}, [enabled, handler]);
};

export default useBeforeUnload;
