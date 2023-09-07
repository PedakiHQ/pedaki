/* c8 ignore start */

export const safeHistoryReplaceState = (state: unknown, title: string, url: string) => {
  try {
    history.replaceState(state, title, url);
  } catch (e) {
    console.error(e);
  }
};
