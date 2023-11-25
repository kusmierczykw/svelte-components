export const throttleTime = <T extends (...args: any[]) => void>(
    callback: T,
    time: number
) => {
    let isThrottled = false;

    return (...args: Parameters<T>) => {
        if (!isThrottled) {
            // Wywołaj funkcję
            callback(...args);

            // Ustaw flagę throttlingu na true
            isThrottled = true;

            // Odblokuj funkcję po określonym czasie
            setTimeout(() => {
                isThrottled = false;
            }, time);
        }
    };
};
