<script lang="ts">
    import {
        getItemRefsVisibility,
        getLeftArrowClick,
        getRightArrowClick,
    } from './context';
    import { derived } from 'svelte/store';
    import { firstItem, lastItem } from '../../utils/array';

    const clickLeftFn = getLeftArrowClick();
    const clickRightFn = getRightArrowClick();
    const isLeftArrowVisible = derived(
        getItemRefsVisibility(),
        (visibility) => !firstItem(visibility)
    );
    const isRightArrowVisible = derived(
        getItemRefsVisibility(),
        (visibility) => !lastItem(visibility)
    );

    function handleClickLeft(): void {
        clickLeftFn();
    }

    function handleClickRight(): void {
        clickRightFn();
    }
</script>

{#if $isLeftArrowVisible}
    <button
        on:click={handleClickLeft}
        class="scroll-arrow-button scroll-arrow-button-left"
    >
        ←
    </button>
{/if}

{#if $isRightArrowVisible}
    <button
        on:click={handleClickRight}
        class="scroll-arrow-button scroll-arrow-button-right"
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
        opacity: 0.85;
        transition: 300ms opacity;
        transform: translateY(-50%);
        background-color: white;
        outline: none;
        border: 0;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .scroll-arrow-button-left {
        left: 0;
    }

    .scroll-arrow-button-right {
        right: 0;
    }
</style>
