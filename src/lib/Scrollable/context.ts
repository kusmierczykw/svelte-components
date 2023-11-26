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

export function setActiveItem(ref: Readable<boolean[]>): void {
    setContext('activeItem', ref);
}

export function getActiveItem(): Readable<boolean[]> {
    return getContext('activeItem');
}

export function setLeftArrowClick(fn: () => void): void {
    setContext('leftArrowClick', fn);
}

export function getLeftArrowClick(): () => void {
    return getContext('leftArrowClick');
}

export function setRightArrowClick(fn: () => void): void {
    setContext('rightArrowClick', fn);
}

export function getRightArrowClick(): () => void {
    return getContext('rightArrowClick');
}
