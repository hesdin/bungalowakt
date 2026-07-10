<script lang="ts">
    import AppHead from '@/components/AppHead.svelte';
    import FAQSection from '@/pages/welcome/components/FAQSection.svelte';
    import FinalCTASection from '@/pages/welcome/components/FinalCTASection.svelte';
    import LandingFooter from '@/pages/welcome/components/LandingFooter.svelte';
    import LandingHero from '@/pages/welcome/components/LandingHero.svelte';
    import LandingNavbar from '@/pages/welcome/components/LandingNavbar.svelte';
    import GallerySection from '@/pages/welcome/components/GallerySection.svelte';
    import HighlightsSection from '@/pages/welcome/components/HighlightsSection.svelte';
    import LocationSection from '@/pages/welcome/components/LocationSection.svelte';
    import OverviewSection from '@/pages/welcome/components/OverviewSection.svelte';
    // import SocialProofSection from '@/pages/welcome/components/SocialProofSection.svelte';
    import StayPackagesSection from '@/pages/welcome/components/StayPackagesSection.svelte';
    import { hotelData } from '@/pages/welcome/hotel-data';
</script>

<AppHead title="Bungalow AKT - Liburan Tenang di Wakatobi" description="Bungalow AKT adalah penginapan privat di Wakatobi, Sulawesi Tenggara. Nikmati liburan tenang di tepi laut dengan akses langsung ke terumbu karang, snorkeling, dan diving kelas dunia.">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
    />
</AppHead>

<div
    class="font-body relative min-h-screen overflow-x-clip bg-[#f2f3ef] text-[#123d34]"
>
    <LandingNavbar hotel={hotelData} />

    <main class="relative z-10 space-y-6 pb-24 sm:space-y-8 sm:pb-28">
        <LandingHero hotel={hotelData} />
        <OverviewSection hotel={hotelData} />
        <GallerySection hotel={hotelData} />
        <HighlightsSection hotel={hotelData} />
        <StayPackagesSection hotel={hotelData} />
        <!-- <SocialProofSection hotel={hotelData} /> -->
        <LocationSection hotel={hotelData} />
        <FAQSection hotel={hotelData} />
        <FinalCTASection hotel={hotelData} />
    </main>

    <LandingFooter hotel={hotelData} />
</div>

<style>
    :global(.font-display) {
        font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
    }

    :global(.font-body) {
        font-family: 'Plus Jakarta Sans', 'Noto Sans', sans-serif;
    }

    :global(.glass-card) {
        backdrop-filter: blur(10px);
    }
</style>
