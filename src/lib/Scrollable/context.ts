import { type Readable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

export function setScrollableContainerRef(ref: Readable<HTMLElement>): void {
    setContext('scrollableContainerRef', ref);
}

export function getScrollableContainerRef(): Readable<HTMLElement> {
    return getContext('scrollableContainerRef');
}

export function setItemRefs(ref: Readable<HTMLElement[]>): void {
    setContext('itemRefs', ref);
}

export function getItemRefs(): Readable<HTMLElement[]> {
    return getContext('itemRefs');
}

export function setItemRefsVisibility(ref: Readable<boolean[]>): void {
    setContext('itemRefsVisibility', ref);
}

export function getItemRefsVisibility(): Readable<boolean[]> {
    return getContext('itemRefsVisibility');
}
