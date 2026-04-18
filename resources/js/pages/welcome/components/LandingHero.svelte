<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<section id="beranda" class="px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
    <div
        class="relative mx-auto min-h-[560px] max-w-7xl overflow-hidden rounded-[2rem] border border-[#d2ddd7] bg-[#082f29] shadow-[0_35px_100px_rgba(8,47,41,0.28)] sm:min-h-[620px] lg:min-h-[700px]"
    >
        <img
            src={hotel.gallery[0].url}
            alt={hotel.name}
            class="absolute inset-0 h-full w-full object-cover"
            loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black from-[6%] via-black/40 via-[45%] to-black/15"></div>

        <div class="relative flex min-h-[560px] items-end p-6 pb-12 sm:min-h-[620px] sm:p-9 sm:pb-14 lg:min-h-[700px] lg:p-12 lg:pb-16">
            <div class="grid w-full gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
                <div class="lg:col-span-8">
                    <p
                        class="inline-flex rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white/95 uppercase"
                    >
                        {hotel.brand.heroEyebrow}
                    </p>
                    <h1 class="font-display mt-4 max-w-4xl text-3xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Rasakan Liburan Tenang di
                        <span class="text-[#ffcf5a]">{hotel.name}</span>
                    </h1>

                    <div class="mt-5 flex flex-wrap gap-2.5">
                        {#each hotel.quickFacts as fact (fact.label)}
                            <span
                                class="rounded-full border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white"
                            >
                                {fact.label}: {fact.value}
                            </span>
                        {/each}
                    </div>
                </div>

                <div class="max-w-md lg:col-span-4 lg:justify-self-end">
                    <p class="text-base leading-relaxed text-white/90 sm:text-lg">
                        {hotel.brand.heroSubtitle}
                    </p>
                    <a
                        href={hotel.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-base leading-none font-bold text-[#0f4e40] transition hover:bg-[#ffcf42]"
                    >
                        {hotel.brand.primaryCtaLabel}
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
