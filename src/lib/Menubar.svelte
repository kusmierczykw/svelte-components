<script lang="ts">
    import ScrollableContainer from './Scrollable/ScrollableContainer.svelte';
    import ScrollableContainerItem from './Scrollable/ScrollableContainerItem.svelte';
    import ScrollableContainerItemsVisibilityObserver from './Scrollable/ScrollableContainerItemsVisibilityObserver.svelte';
    import {
        setItemRefs,
        setScrollableContainerRef,
        setItemRefsVisibility,
    } from './Scrollable/context';
    import { writable } from 'svelte/store';

    export let items: Array<{ label: string; anchorId: string }>;

    const scrollableContainerRef = writable<HTMLElement>();
    const itemRefs = writable<HTMLElement[]>([]);
    const itemRefsVisibility = writable<boolean[]>([]);

    setScrollableContainerRef(scrollableContainerRef);
    setItemRefs(itemRefs);
    setItemRefsVisibility(itemRefsVisibility);
</script>

<div style="width: 1200px">
    <ScrollableContainer
        bind:scrollableContainerRef={$scrollableContainerRef}
        showArrows={true}
    >
        {#each items as item, index}
            <ScrollableContainerItem
                active={false}
                bind:elementRef={$itemRefs[index]}
            >
                <a style="margin: 0 1rem" href={item.anchorId}>{item.label}</a>
            </ScrollableContainerItem>
        {/each}
    </ScrollableContainer>

    <ScrollableContainerItemsVisibilityObserver
        on:visibilityChange={({ detail }) => ($itemRefsVisibility = detail)}
    />
</div>
