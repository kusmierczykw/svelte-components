<script lang="ts">
    import { getItemRefs, getScrollableContainerRef } from './context';
    import { createEventDispatcher, onMount } from 'svelte';
    import { derived } from 'svelte/store';

    const dispatch = createEventDispatcher();
    const observer = derived(
        [getItemRefs(), getScrollableContainerRef()],
        ([itemRefs, scrollableContainerRef], set) => {
            const visibility = itemRefs.map(() => false);
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const { target, isIntersecting: visible } = entry;
                        const index = itemRefs.indexOf(target as HTMLElement);
                        const shouldUpdate = visibility[index] !== visible;

                        if (!shouldUpdate) {
                            return;
                        }

                        visibility[index] = visible;
                        set(visibility);
                    });
                },
                { root: scrollableContainerRef, threshold: 0.98 }
            );

            itemRefs.forEach((item) => observer.observe(item));

            return () => observer.disconnect();
        },
        [] as boolean[]
    );

    onMount(() => {
        const unsubscribe = observer.subscribe((visibility) => {
            dispatch('visibilityChange', visibility);
        });

        return () => unsubscribe();
    });
</script>
