<script lang="ts">
    import ScrollableContainerArrows from './ScrollableContainerArrows.svelte';

    export let scrollableContainerRef: HTMLElement;
    export let showArrows = true;

    let arrows = false;

    const handleMouseEnter = (): void => (arrows = true);

    const handleMouseLeave = (): void => (arrows = false);
</script>

<div
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    class="scrollable-container"
>
    <div bind:this={scrollableContainerRef} class="scrollable-area">
        <slot />
    </div>

    {#if showArrows && arrows}
        <ScrollableContainerArrows />
    {/if}
</div>

<style lang="scss">
    .scrollable-container {
        position: relative;
    }

    .scrollable-area {
        overflow-x: auto;
        display: flex;
        flex-wrap: nowrap;
        white-space: nowrap;
    }
</style>
