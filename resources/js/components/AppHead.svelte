<script lang="ts">
    import type { Snippet } from 'svelte';

    let {
        title = '',
        description = '',
        image = '',
        url = '',
        children,
    }: {
        title?: string;
        description?: string;
        image?: string;
        url?: string;
        children?: Snippet;
    } = $props();

    const appName = import.meta.env.VITE_APP_NAME || 'Bungalow AKT';
    const fullTitle = $derived(title ? `${title} - ${appName}` : appName);
    const metaDescription = $derived(description || 'Bungalow AKT - Penginapan privat di Wakatobi, Sulawesi Tenggara. Nikmati liburan tenang di tepi laut dengan akses langsung ke terumbu karang.');
    const metaUrl = $derived(url || (typeof window !== 'undefined' ? window.location.href : ''));
</script>

<svelte:head>
    <title>{fullTitle}</title>
    <meta name="description" content={metaDescription}>

    <meta property="og:title" content={fullTitle}>
    <meta property="og:description" content={metaDescription}>
    <meta property="og:type" content="website">
    {#if metaUrl}
        <meta property="og:url" content={metaUrl}>
    {/if}
    {#if image}
        <meta property="og:image" content={image}>
    {/if}

    <meta name="twitter:title" content={fullTitle}>
    <meta name="twitter:description" content={metaDescription}>
    <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'}>
    {#if image}
        <meta name="twitter:image" content={image}>
    {/if}

    {@render children?.()}
</svelte:head>
