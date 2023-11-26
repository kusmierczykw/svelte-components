<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let triggerElementRef: HTMLElement;
    let lastActiveSection: HTMLElement;

    function handleWindowScroll(): void {
        const sections = getSections();
        const trigger = getTriggerBottom();
        const activeSection = findActiveSection(sections, trigger);

        if (activeSection.isEqualNode(lastActiveSection)) {
            return;
        }

        lastActiveSection = activeSection;

        dispatch('activeSectionChange', activeSection);
    }

    function findActiveSection(
        sections: HTMLElement[],
        triggerPosition: number
    ): HTMLElement {
        const [first] = sections;
        const result = sections.find((element) => {
            const { top, bottom } = element.getBoundingClientRect();

            return triggerPosition >= top && triggerPosition <= bottom;
        });

        return result ?? first;
    }

    function getSections(): HTMLElement[] {
        const sectionNodeList = document.querySelectorAll('section[id]');

        return Array.from(sectionNodeList) as HTMLElement[];
    }

    function getTriggerBottom(): number {
        return triggerElementRef.getBoundingClientRect().bottom;
    }
</script>

<svelte:window on:scroll={handleWindowScroll} />

<div class="active-section-trigger" bind:this={triggerElementRef} />
