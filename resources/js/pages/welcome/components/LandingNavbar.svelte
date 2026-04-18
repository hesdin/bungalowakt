<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();

    let isMobileMenuOpen = $state(false);

    const navigationItems = [
        { label: 'Tentang', href: '#overview' },
        { label: 'Galeri', href: '#galeri' },
        { label: 'Keunggulan', href: '#fasilitas' },
        { label: 'Paket Stay', href: '#paket' },
        { label: 'FAQ', href: '#faq' },
    ];
</script>

<header class="pointer-events-none absolute inset-x-0 top-0 z-50">
    <div class="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-6 pt-7">
        <a href="#beranda" class="group flex items-center gap-2.5">
            <span
                class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm font-extrabold text-white"
            >
                {hotel.brand.shortName}
            </span>
            <div class="leading-tight">
                <p class="font-display text-xl leading-none font-extrabold text-white sm:text-2xl">
                    {hotel.brand.shortName}
                </p>
                <p class="text-[11px] text-white/80">
                    Resort Landing
                </p>
            </div>
        </a>

        <div class="hidden items-center gap-3 lg:flex">
            <nav class="flex items-center gap-5">
                {#each navigationItems as item (item.href)}
                    <a
                        href={item.href}
                        class="text-[0.95rem] font-semibold text-white/95 transition hover:text-[#ffcf5a]"
                    >
                        {item.label}
                    </a>
                {/each}
            </nav>

            <a
                href={hotel.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0f4e40] transition hover:bg-[#ffcf5a]"
            >
                {hotel.brand.primaryCtaLabel}
            </a>
        </div>

        <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            aria-label="Toggle menu"
            onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
        >
            <span class="text-lg leading-none">{isMobileMenuOpen ? '✕' : '☰'}</span>
        </button>
    </div>

    {#if isMobileMenuOpen}
        <div
            class="pointer-events-auto mx-4 mt-2 rounded-2xl border border-white/25 bg-black/65 px-4 py-4 text-white shadow-2xl backdrop-blur-xl lg:hidden"
        >
            <nav class="flex flex-col gap-3">
                {#each navigationItems as item (item.href)}
                    <a
                        href={item.href}
                        class="rounded-lg px-2 py-1.5 text-sm font-semibold text-white/90 hover:bg-white/10"
                        onclick={() => (isMobileMenuOpen = false)}
                    >
                        {item.label}
                    </a>
                {/each}
            </nav>
            <a
                href={hotel.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 block rounded-full bg-white px-3 py-2 text-center text-sm font-bold text-[#0f4e40]"
            >
                {hotel.brand.primaryCtaLabel}
            </a>
        </div>
    {/if}
</header>
