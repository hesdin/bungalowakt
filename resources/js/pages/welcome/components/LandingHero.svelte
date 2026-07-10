<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<section id="beranda" class="relative scroll-mt-28 overflow-hidden bg-[#082f29]">
    <div class="relative min-h-[620px] w-full sm:min-h-[700px] lg:min-h-[820px]">
        <img
            src={hotel.heroImageUrl}
            alt={hotel.name}
            class="absolute inset-0 h-full w-full scale-[1.03] object-cover object-center"
            loading="eager"
        />
        <div
            class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/60"
        ></div>
        <div
            class="absolute inset-0 bg-gradient-to-t from-[#061f1a] via-black/10 to-transparent"
        ></div>
        <div
            class="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent"
        ></div>

        <div
            class="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pt-28 pb-14 sm:min-h-[700px] sm:px-6 sm:pb-16 lg:min-h-[820px] lg:px-8 lg:pb-20"
        >
            <div class="grid w-full gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
                <div class="lg:col-span-8">
                    <span
                        class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/90 uppercase backdrop-blur-sm"
                    >
                        {hotel.name}
                    </span>

                    <h1
                        class="font-display mt-5 max-w-4xl text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        {hotel.brand.heroTitle}
                    </h1>

                    <div class="mt-6 flex flex-wrap gap-2.5">
                        {#each hotel.quickFacts as fact (fact.label)}
                            <span
                                class="rounded-xl border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/95 backdrop-blur-sm sm:text-sm"
                            >
                                {fact.label}: {fact.value}
                            </span>
                        {/each}
                    </div>
                </div>

                <div class="max-w-md lg:col-span-4 lg:justify-self-end">
                    <p
                        class="text-base leading-relaxed text-white/90 sm:text-lg"
                    >
                        {hotel.brand.heroSubtitle}
                    </p>
                    <a
                        href={hotel.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base leading-none font-bold text-[#0f4e40] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ffcf42] hover:shadow-xl hover:shadow-black/25"
                    >
                        {hotel.brand.primaryCtaLabel}
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
