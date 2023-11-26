<script lang="ts">
    export let elementRef: HTMLElement;
    export let active: boolean;
    export let anchorId: string;
</script>

<div
    data-anchor-id={anchorId}
    bind:this={elementRef}
    class:active
    class="scrollable-container-item"
>
    <slot />
</div>
