<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();

    let isMobileMenuOpen = $state(false);

    const navigationItems = [
        { label: 'Tentang', href: '#overview' },
        { label: 'Galeri', href: '#galeri' },
        { label: 'Keunggulan', href: '#fasilitas' },
        { label: 'Paket Menginap', href: '#paket' },
    ];
</script>

<header class="pointer-events-none fixed inset-x-0 top-0 z-50">
    <div
        class="pointer-events-auto mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8"
    >
        <div
            class="flex items-center rounded-xl border border-white/12 bg-[#082f29]/78 px-5 py-3 backdrop-blur-md"
        >
            <a href="#beranda" class="group flex shrink-0 items-center gap-2.5">
                <img
                    src="/assets/logo-akt.png"
                    alt={hotel.brand.shortName}
                    class="h-9 w-9 rounded-xl object-cover"
                />
                <div class="leading-tight">
                    <p
                        class="font-display text-xl leading-none font-extrabold text-white sm:text-2xl"
                    >
                        {hotel.brand.shortName}
                    </p>
                </div>
            </a>

            <div class="hidden flex-1 items-center justify-center lg:flex">
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
            </div>

            <a
                href={hotel.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="hidden rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-[#0f4e40] transition hover:bg-[#ffcf5a] lg:inline-flex"
            >
                {hotel.brand.primaryCtaLabel}
            </a>

            <button
                type="button"
                class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/35 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
                aria-label="Toggle menu"
                onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
            >
                <span class="text-lg leading-none"
                    >{isMobileMenuOpen ? '✕' : '☰'}</span
                >
            </button>
        </div>
    </div>

    {#if isMobileMenuOpen}
        <div
            class="pointer-events-auto mx-auto mt-2 max-w-7xl px-4 sm:px-6 lg:hidden lg:px-8"
        >
            <div
                class="rounded-xl border border-white/16 bg-[#082f29]/88 px-4 py-4 text-white backdrop-blur-xl"
            >
                <nav class="flex flex-col gap-3">
                    {#each navigationItems as item (item.href)}
                        <a
                            href={item.href}
                            class="rounded-md px-2 py-1.5 text-sm font-semibold text-white/90 hover:bg-white/10"
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
                    class="mt-4 block rounded-2xl bg-white px-3 py-2 text-center text-sm font-bold text-[#0f4e40]"
                >
                    {hotel.brand.primaryCtaLabel}
                </a>
            </div>
        </div>
    {/if}
</header>
