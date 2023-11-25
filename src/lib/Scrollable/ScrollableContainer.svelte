<script lang="ts">
    import ScrollableContainerArrows from './ScrollableContainerArrows.svelte';

    export let arrows = true;
    export let scrollableContainerRef: HTMLElement;
</script>

<div class="scrollable-container">
    <div class="scrollable-area" bind:this={scrollableContainerRef}>
        <slot />
    </div>

    <ScrollableContainerArrows {arrows} />
</div>

<style lang="scss">
    .scrollable-container {
        position: relative;

        &:hover :global(.scroll-arrow-button) {
            opacity: 0.9;
        }
    }

    .scrollable-area {
        overflow-x: auto;
        display: flex;
        flex-wrap: nowrap;
        white-space: nowrap;
    }
</style>
