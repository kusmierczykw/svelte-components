<script lang="ts">
    export let elementRef: HTMLElement;
    export let active: boolean;
</script>

<div bind:this={elementRef} class="scrollable-container-item">
    <slot />
</div>
