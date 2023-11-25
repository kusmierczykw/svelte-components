<script lang="ts">
    export let arrows = true;

    function handleClickLeft(): void {}

    function handleClickRight(): void {}
</script>

{#if arrows}
    <button
        class="scroll-arrow-button scroll-arrow-button-left"
        on:click={handleClickLeft}>←</button
    >

    <button
        class="scroll-arrow-button scroll-arrow-button-right"
        on:click={handleClickRight}
    >
        →
    </button>
{/if}

<style lang="scss">
    /**
      Arrows styles
  */
    .scroll-arrow-button {
        position: absolute;
        z-index: 2;
        height: 32px;
        width: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        opacity: 0;
        transition: 300ms opacity;
        transform: translateY(-50%);
        background-color: white;
        margin-left: 16px;
        outline: none;
        border: 0;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .scroll-arrow-button-left {
        margin-left: -8px;
        left: 0;
    }

    .scroll-arrow-button-right {
        margin-right: -8px;
        right: 0;
    }
</style>
