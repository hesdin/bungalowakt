<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<section class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
        <p class="text-center text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase">
            Testimonials
        </p>
        <h2 class="font-display mt-2 text-center text-4xl font-extrabold text-[#103b33] sm:text-5xl">
            Take their word, not ours
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-center text-sm text-[#4b6b61] sm:text-base">
            Sinyal kepercayaan tamu yang membuat keputusan booking jadi lebih yakin.
        </p>

        <div class="mt-7 grid gap-4 lg:grid-cols-3">
            {#each hotel.trustSignals as signal, index (signal)}
                <article
                    class="rounded-3xl border border-[#d5e1db] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,78,64,0.12)]"
                >
                    <p class="text-sm font-semibold text-[#0f8a62]">
                        {index === 0 ? 'Guest review' : index === 1 ? 'Verified amenity' : 'Booking confidence'}
                    </p>
                    <h3 class="mt-2 font-display text-2xl font-extrabold text-[#103b33]">
                        “{signal}”
                    </h3>
                    <p class="mt-3 text-xs font-semibold text-[#3f5f55]">
                        {index === 0
                            ? 'Pasangan traveler · Jakarta'
                            : index === 1
                              ? 'Solo traveler · Makassar'
                              : 'Family traveler · Kendari'}
                    </p>
                </article>
            {/each}
        </div>

        <div
            class="mt-6 rounded-3xl border border-[#f2c9c9] bg-[#fff3f3] p-5 sm:flex sm:items-center sm:justify-between"
        >
            <p class="text-sm font-semibold text-[#7a3f3f]">
                {hotel.scarcityNote}
            </p>
            <a
                href={hotel.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-3 inline-flex rounded-full bg-[#0f4e40] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0b3a30] sm:mt-0"
            >
                Amankan Tanggal Anda
            </a>
        </div>
    </div>
</section>
