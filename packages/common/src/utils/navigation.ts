/* c8 ignore start */

export const safeHistoryReplaceState = (url: string) => {
	try {
		history.replaceState(null, "", url);
	} catch (e) {
		console.error(e);
	}
};
