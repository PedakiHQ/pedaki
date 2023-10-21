// Based on https://github.com/sindresorhus/is-network-error/blob/main/index.js
// eslint-disable-next-line @typescript-eslint/unbound-method
const objectToString = Object.prototype.toString;

const isError = (value: Object): value is Error => objectToString.call(value) === '[object Error]';

const errorMessages = new Set([
    'Failed to fetch', // Chrome
    'NetworkError when attempting to fetch resource.', // Firefox
    'The Internet connection appears to be offline.', // Safari 16
    'Load failed', // Safari 17+
    'Network request failed', // `cross-fetch`
    'fetch failed', // Undici (Node.js)
]);


export default function isNetworkError(error: unknown) {
    const isValid = error
        && isError(error)
        // && error.name === 'TypeError' // NOTE: This is the only line that is different from the original
        && typeof error.message === 'string';

    if (!isValid) {
        return false;
    }

    // We do an extra check for Safari 17+ as it has a very generic error message.
    // Network errors in Safari have no stack.
    if (error.message === 'Load failed') {
        return error.stack === undefined;
    }

    return errorMessages.has(error.message);
}