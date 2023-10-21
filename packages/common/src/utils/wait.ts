type ArrayElement<ArrayType> = ArrayType extends (infer ElementType)[] ? ElementType : never;
type ResolveType<T> = T extends Promise<infer R> ? R : T;

type Wait = <T>(
    promises:
        T extends number ? T :
            T extends ArrayElement<T>[] ? (Promise<ArrayElement<T>> | ArrayElement<T>)[] :
                T | Promise<T>,
    minimumWaitTime?: T extends number ? never : number
) => Promise<
    T extends number ? void :
        T extends ArrayElement<T>[] ? ResolveType<ArrayElement<T>>[] :
            ResolveType<T>
>;

const wait: Wait = async (promises, minimumWaitTime ) => {

    if (typeof promises === 'number') {
        return new Promise(res => setTimeout(res, promises));
    }

    const multiplePromisesProvided = Array.isArray(promises);

    const arrayOfPromises = multiplePromisesProvided
        ? promises
        : [promises];

    const resolved = (await Promise.allSettled([
        ...arrayOfPromises,
        new Promise(resolve => setTimeout(resolve, minimumWaitTime))
    ])).slice(0, arrayOfPromises.length);

    const flatResolved = resolved.map(result => {
        if (result.status === 'rejected') {
            throw result.reason;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return result.value;
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return multiplePromisesProvided
        ? flatResolved
        : flatResolved[0];
};

export default wait;