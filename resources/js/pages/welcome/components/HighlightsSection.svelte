<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';
    import {
        BedDouble,
        CarFront,
        Home,
        MapPin,
        ShieldCheck,
        Trees,
    } from 'lucide-svelte';

    let { hotel }: { hotel: HotelLandingData } = $props();

    const icons = [Home, MapPin, CarFront, BedDouble, ShieldCheck, Trees];
</script>

<section id="fasilitas" class="scroll-mt-28 py-8 sm:py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-end justify-between gap-8">
            <div class="max-w-xl">
                <p
                    class="text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase"
                >
                    Kenapa memilih kami?
                </p>
                <h2
                    class="font-display mt-2 text-4xl leading-tight font-extrabold text-[#103b33] sm:text-5xl"
                >
                    Kenapa menginap di bungalow ini?
                </h2>
            </div>
            <div class="flex gap-2">
                <a
                    href={hotel.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex rounded-full bg-[#0f4e40] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0b3a30]"
                >
                    {hotel.brand.primaryCtaLabel}
                </a>
                <a
                    href="#galeri"
                    class="inline-flex rounded-full border border-[#0f4e40]/15 bg-white px-5 py-2.5 text-sm font-bold text-[#0f4e40] transition hover:bg-[#eaf4f1]"
                >
                    Lihat Semua Kabin
                </a>
            </div>
        </div>

        <div class="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {#each hotel.highlights as highlight, index (highlight.label)}
                {@const Icon = icons[index] ?? Home}
                <article class="max-w-sm">
                    <span
                        class="inline-flex size-14 items-center justify-center rounded-2xl bg-[#eef8f0] text-[#0f4e40]"
                    >
                        <Icon class="size-7" />
                    </span>
                    <p
                        class="font-display mt-5 text-2xl font-extrabold text-[#103b33]"
                    >
                        {highlight.label}
                    </p>
                    <p class="mt-3 text-sm leading-7 text-[#4b6b61]">
                        {highlight.description}
                    </p>
                </article>
            {/each}
        </div>
    </div>
</section>
