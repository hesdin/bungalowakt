<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';
    import {
        ArrowLeft,
        ArrowRight,
        BedDouble,
        MapPin,
        Plus,
        Sparkles,
        Users,
    } from 'lucide-svelte';

    let { hotel }: { hotel: HotelLandingData } = $props();

    const featuredGallery = $derived([
        {
            ...hotel.gallery[1],
            description:
                'Ruang tidur yang hangat dengan pencahayaan lembut dan nuansa lebih privat untuk pasangan atau tamu yang datang sendiri.',
            meta: [
                'Seluruh bungalow',
                `${hotel.booking.guests} tamu`,
                'Liburan santai',
            ],
            location: 'Tongano Barat, Tomia',
        },
        {
            ...hotel.gallery[2],
            description:
                'Sudut balkon dan teras yang enak dipakai duduk santai sambil menikmati ritme tropis sekitar bungalow.',
            meta: ['Area teras', hotel.quickFacts[2].value, 'Nuansa tropis'],
            location: 'Tadu Sangia Tourism Road',
        },
    ]);

    const metaIcons = [BedDouble, Users, Sparkles];
</script>

<section id="galeri" class="scroll-mt-28 py-10 sm:py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
            class="rounded-xl bg-[#084133] px-4 py-10 text-white shadow-[0_24px_64px_rgba(8,47,41,0.18)] sm:px-6 sm:py-12 lg:px-8 lg:py-14"
        >
            <div class="mb-10 flex flex-wrap items-end justify-between gap-6">
                <div>
                    <p
                        class="text-xs font-semibold tracking-[0.2em] text-[#66d8a9] uppercase"
                    >
                        Kabin Pilihan
                    </p>
                    <h2
                        class="font-display mt-2 max-w-2xl text-4xl leading-tight font-extrabold sm:text-5xl"
                    >
                        Kabin pilihan dengan suasana hangat
                    </h2>
                </div>
                <div class="flex items-center gap-3">
                    <span
                        class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/85"
                    >
                        <ArrowLeft class="size-4" />
                    </span>
                    <span
                        class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/85"
                    >
                        <ArrowRight class="size-4" />
                    </span>
                </div>
            </div>

            <div class="grid gap-6 lg:grid-cols-2">
                {#each featuredGallery as image, index (image.id)}
                    <article>
                        <figure
                            class="group relative overflow-hidden rounded-xl"
                        >
                            <img
                                src={image.url}
                                alt={image.title ||
                                    `${hotel.name} photo ${index + 1}`}
                                class="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[360px]"
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />
                            <span
                                class="absolute right-4 top-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#eefaf4] text-[#0f4e40]"
                            >
                                <Plus class="size-7" />
                            </span>
                            <div
                                class="absolute inset-x-4 bottom-4 flex flex-wrap gap-2"
                            >
                                {#each image.meta as metaLabel, metaIndex (metaLabel)}
                                    {@const MetaIcon =
                                        metaIcons[metaIndex] ?? Sparkles}
                                    <span
                                        class="inline-flex items-center gap-1.5 rounded-full bg-[#eefaf4] px-3 py-1.5 text-xs font-bold text-[#0f4e40]"
                                    >
                                        <MetaIcon class="size-3.5" />
                                        {metaLabel}
                                    </span>
                                {/each}
                            </div>
                        </figure>
                        <h3 class="mt-5 text-3xl font-bold text-white">
                            {image.title}
                        </h3>
                        <p
                            class="mt-2 max-w-xl text-sm leading-relaxed text-white/78"
                        >
                            {image.description}
                        </p>
                        <p
                            class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
                        >
                            <MapPin class="size-4 text-[#8fe7bf]" />
                            {image.location}
                        </p>
                    </article>
                {/each}
            </div>

            <div class="mt-10 flex flex-wrap justify-center gap-3">
                <a
                    href={hotel.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0f4e40] transition hover:bg-[#ffcf5a]"
                >
                    {hotel.brand.primaryCtaLabel}
                </a>
                <a
                    href="#overview"
                    class="inline-flex rounded-full border border-white/35 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/12"
                >
                    Lihat Semua Kabin
                </a>
            </div>
        </div>
    </div>
</section>
