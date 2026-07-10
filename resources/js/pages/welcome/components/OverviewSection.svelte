<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';
    import { BedDouble, Coffee, MapPin, Users } from 'lucide-svelte';

    let { hotel }: { hotel: HotelLandingData } = $props();

    const overviewChips = $derived([
        { label: 'Seluruh bungalow', icon: BedDouble },
        { label: 'Sarapan termasuk', icon: Coffee },
        { label: `${hotel.booking.guests} tamu`, icon: Users },
        { label: 'Tomia, Wakatobi', icon: MapPin },
    ]);
</script>

<section id="overview" class="scroll-mt-28 py-8 sm:py-12">
    <div
        class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8"
    >
        <div class="relative overflow-hidden rounded-xl lg:col-span-6">
            <img
                src={hotel.gallery[3].url}
                alt={`Suasana ${hotel.name}`}
                class="h-[360px] w-full rounded-xl object-cover sm:h-[420px] lg:h-[440px]"
                loading="lazy"
            />
            <div class="absolute inset-x-5 bottom-5 grid gap-3 sm:grid-cols-2">
                {#each overviewChips as chip (chip.label)}
                    {@const ChipIcon = chip.icon}
                    <div
                        class="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#0f4e40] shadow-[0_14px_30px_rgba(8,47,41,0.18)]"
                    >
                        <ChipIcon class="size-4 text-[#0f8a62]" />
                        <span>{chip.label}</span>
                    </div>
                {/each}
            </div>
        </div>

        <div class="px-1 lg:col-span-6 lg:px-4">
            <p
                class="text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase"
            >
                Tentang Kami
            </p>
            <h2
                class="font-display mt-2 text-4xl leading-tight font-extrabold text-[#103b33] sm:text-5xl"
            >
                Datang ke tempat tenang kami dan nikmati ritme liburan yang
                lebih pelan
            </h2>
            <div
                class="mt-5 space-y-4 text-sm leading-relaxed text-[#3b5d53] sm:text-base"
            >
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
                    {hotel.brand.primaryCtaLabel}
                </a>
                <a
                    href="#paket"
                    class="inline-flex rounded-full border border-[#0f4e40]/20 bg-white px-5 py-2.5 text-sm font-bold text-[#0f4e40] transition hover:bg-[#eaf4f1]"
                >
                    Lihat Semua Kabin
                </a>
            </div>
        </div>
    </div>
</section>
