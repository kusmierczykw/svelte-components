export const debounceTime = function <T extends (...args: any[]) => any>(
    callback: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timerId: ReturnType<typeof setTimeout> | undefined;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
};
