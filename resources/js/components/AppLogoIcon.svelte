<script lang="ts">
    let {
        class: className = '',
        alt = 'Bungalow AKT',
    }: {
        class?: string;
        alt?: string;
    } = $props();
</script>

<img src="/assets/logo-akt.png" {alt} class={className} draggable="false" />
