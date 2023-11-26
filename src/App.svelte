<script>
    import Menubar from './lib/Menubar.svelte';

    const items = [
        {
            label: 'Sekcja pierwsza',
            anchorId: '1',
        },
        {
            label: 'Sekcja druga',
            anchorId: '2',
        },
        {
            label: 'Sekcja trzecia',
            anchorId: '3',
        },
        {
            label: 'Sekcja czwarta ',
            anchorId: '4',
        },
        {
            label: 'Sekcja piąta',
            anchorId: '5',
        },
        {
            label: 'Sekcja szósta',
            anchorId: '6',
        },
        {
            label: 'Sekcja pierwsza',
            anchorId: '7',
        },
        {
            label: 'Sekcja druga',
            anchorId: '8',
        },
        {
            label: 'Sekcja trzecia',
            anchorId: '9',
        },
        {
            label: 'Sekcja czwarta ',
            anchorId: '10',
        },
        {
            label: 'Sekcja piąta',
            anchorId: '11',
        },
        {
            label: 'Sekcja szósta',
            anchorId: '12',
        },
    ];
</script>

<header>
    <Menubar {items} />
</header>
