<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();

    const icons = ['⛺', '🛏', '🌿', '🐾'];
</script>

<section id="fasilitas" class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
        <div class="flex flex-wrap items-end justify-between gap-4">
            <div>
                <p class="text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase">
                    Why us?
                </p>
                <h2 class="font-display mt-2 text-4xl font-extrabold text-[#103b33] sm:text-5xl">
                    Why staying in our cabins?
                </h2>
            </div>
            <div class="flex gap-2">
                <a
                    href={hotel.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex rounded-full bg-[#0f4e40] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#0b3a30]"
                >
                    Reserve now
                </a>
                <a
                    href="#galeri"
                    class="inline-flex rounded-full border border-[#0f4e40]/30 px-5 py-2 text-sm font-bold text-[#0f4e40] transition hover:bg-[#eaf4f1]"
                >
                    Browse all cabins
                </a>
            </div>
        </div>

        <div class="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {#each hotel.highlights as highlight, index (highlight.label)}
                <article
                    class="rounded-3xl border border-[#d5e1db] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,78,64,0.12)]"
                >
                    <p class="text-3xl">{icons[index] ?? '🌟'}</p>
                    <p class="font-display mt-2 text-2xl font-extrabold text-[#103b33]">
                        {highlight.label}
                    </p>
                    <p class="mt-2 text-sm leading-relaxed text-[#4b6b61]">
                        {highlight.description}
                    </p>
                </article>
            {/each}
        </div>
    </div>
</section>
