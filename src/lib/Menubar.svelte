<script lang="ts">
    import ScrollableContainer from './Scrollable/ScrollableContainer.svelte';
    import ScrollableContainerItem from './Scrollable/ScrollableContainerItem.svelte';
    import ScrollableContainerItemsVisibilityObserver from './Scrollable/ScrollableContainerItemsVisibilityObserver.svelte';
    import {
        setActiveItem,
        setItemRefs,
        setItemRefsVisibility,
        setLeftArrowClick,
        setRightArrowClick,
        setScrollableContainerRef,
    } from './Scrollable/context';
    import { writable } from 'svelte/store';
    import ScrollableContainerActiveItemObserver from './Scrollable/ScrollableContainerActiveItemObserver.svelte';

    export let items: Array<{ label: string; anchorId: string }>;

    const scrollableContainerRef = writable<HTMLElement>();
    const itemRefs = writable<HTMLElement[]>([]);
    const itemRefsVisibility = writable<boolean[]>([]);
    const activeItem = writable<HTMLElement>();

    function scrollToInvisibleElement(direction: 'left' | 'right'): void {
        const firstIndex = 0;
        const lastIndex = $itemRefsVisibility.length - 1;
        const indexOfVisibleElement =
            direction === 'left'
                ? $itemRefsVisibility.findIndex(Boolean)
                : $itemRefsVisibility.findLastIndex(Boolean);

        if ([firstIndex, lastIndex].includes(indexOfVisibleElement)) {
            return;
        }

        const index =
            direction === 'left'
                ? indexOfVisibleElement - 1
                : indexOfVisibleElement + 1;
        const element = $itemRefs[index];

        scrollToElement(element);
    }

    function scrollToElement(element: Element): void {
        element.scrollIntoView({
            inline: 'nearest',
            block: 'nearest',
        });
    }

    setScrollableContainerRef(scrollableContainerRef);
    setItemRefs(itemRefs);
    setItemRefsVisibility(itemRefsVisibility);
    setActiveItem(activeItem);
    setLeftArrowClick(() => scrollToInvisibleElement('left'));
    setRightArrowClick(() => scrollToInvisibleElement('right'));
</script>

<div style="width: 1200px">
    <ScrollableContainer
        bind:scrollableContainerRef={$scrollableContainerRef}
        showArrows={true}
    >
        {#each items as item, index}
            <ScrollableContainerItem
                anchorId={item.anchorId}
                active={index === 1}
                bind:elementRef={$itemRefs[index]}
            >
                <a style="margin: 0 1rem" href={item.anchorId}>{item.label}</a>
            </ScrollableContainerItem>
        {/each}
    </ScrollableContainer>

    <ScrollableContainerItemsVisibilityObserver
        on:visibilityChange={({ detail }) => ($itemRefsVisibility = detail)}
    />

    <ScrollableContainerActiveItemObserver
        on:activeItemChange={({ detail }) => ($activeItem = detail)}
    />
</div>

<style lang="scss">
    :global(.active) {
        a {
            font-weight: bold;
        }
    }
</style>
