<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<section id="overview" class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12 lg:items-center">
        <div
            class="relative overflow-hidden rounded-[2rem] border border-[#d5e1db] bg-white p-3 lg:col-span-6"
        >
            <img
                src={hotel.gallery[3].url}
                alt={`Suasana ${hotel.name}`}
                class="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
                loading="lazy"
            />
            <div class="absolute right-6 bottom-6 left-6 grid gap-2 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/60 bg-white/92 px-4 py-3 text-sm font-semibold text-[#0f4e40]">
                    🌿 Private bungalow
                </div>
                <div class="rounded-2xl border border-white/60 bg-white/92 px-4 py-3 text-sm font-semibold text-[#0f4e40]">
                    🍽 Sarapan termasuk
                </div>
            </div>
        </div>

        <div
            class="rounded-3xl p-2 lg:col-span-6 lg:p-6"
        >
            <p class="text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase">
                About Us
            </p>
            <h2 class="font-display mt-2 text-4xl leading-tight font-extrabold text-[#103b33] sm:text-5xl">
                Come to our peaceful place and reconnect with yourself
            </h2>
            <div class="mt-5 space-y-4 text-sm leading-relaxed text-[#3b5d53] sm:text-base">
                {#each hotel.overview.paragraphs as paragraph (paragraph)}
                    <p>{paragraph}</p>
                {/each}
            </div>
            <div class="mt-6 flex flex-wrap gap-3">
                <a
                    href={hotel.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex rounded-full bg-[#0f4e40] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0b3a30]"
                >
                    Reserve now
                </a>
                <a
                    href="#paket"
                    class="inline-flex rounded-full border border-[#0f4e40]/30 px-5 py-2.5 text-sm font-bold text-[#0f4e40] transition hover:bg-[#eaf4f1]"
                >
                    Browse all cabins
                </a>
            </div>
        </div>
    </div>
</section>
