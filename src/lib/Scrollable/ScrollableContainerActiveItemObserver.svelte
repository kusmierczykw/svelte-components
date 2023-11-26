<script lang="ts">
    import ActiveSectionObserver from './ActiveSectionObserver.svelte';
    import { getItemRefs } from './context';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    const itemRefs = getItemRefs();

    function handleActiveSectionChange(event: CustomEvent<HTMLElement>): void {
        const { detail } = event;
        const activeSectionId = detail.getAttribute('id');
        const item = $itemRefs.find(
            (item) => activeSectionId === item.getAttribute('data-anchor-id')
        );

        dispatch('activeItemChange', item);
    }
</script>

<ActiveSectionObserver on:activeSectionChange={handleActiveSectionChange} />
