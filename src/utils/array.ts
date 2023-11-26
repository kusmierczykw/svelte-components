export const lastItem = <T>(array: T[]): T => {
    const [last] = array.slice(-1);

    return last;
};

export const firstItem = <T>(array: T[]): T => {
    const [first] = array;

    return first;
};
