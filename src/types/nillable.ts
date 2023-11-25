export type Nillable<T> = T | null | undefined;

export function isNillable<T>(predictable: Nillable<T>): predictable is null | undefined {
	return predictable === null || predictable === undefined;
}
