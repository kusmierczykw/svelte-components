<script lang="ts">
    import { getItemRefs, getItemRefsVisibility } from './context';
    import { derived } from 'svelte/store';
    import { firstItem, lastItem } from '../../utils/array';

    const itemRefs = getItemRefs();
    const itemRefsVisibility = getItemRefsVisibility();

    let isLeftArrowVisible = derived(
        itemRefsVisibility,
        (visibility) => !firstItem(visibility)
    );
    let isRightArrowVisible = derived(
        itemRefsVisibility,
        (visibility) => !lastItem(visibility)
    );

    function handleClickLeft(): void {
        scrollToInvisibleElement('left');
    }

    function handleClickRight(): void {
        scrollToInvisibleElement('right');
    }

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

        element.scrollIntoView({
            behavior: 'smooth',
            inline: 'nearest',
            block: 'nearest',
        });
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
