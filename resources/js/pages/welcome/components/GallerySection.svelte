<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();

    const featuredGallery = $derived(hotel.gallery.slice(0, 2));
</script>

<section id="galeri" class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl rounded-[2rem] bg-[#084133] px-6 py-8 text-white sm:px-8 sm:py-10">
        <div class="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
                <p class="text-xs font-semibold tracking-[0.2em] text-[#66d8a9] uppercase">
                    Our cabins
                </p>
                <h2 class="font-display mt-2 text-4xl font-extrabold sm:text-5xl">
                    Carefully designed luxury cabins
                </h2>
            </div>
            <a
                href={hotel.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex rounded-full border border-white/35 px-5 py-2 text-sm font-bold text-white transition hover:bg-white/15"
            >
                Browse all cabins
            </a>
        </div>

        <div class="grid gap-5 lg:grid-cols-2">
            {#each featuredGallery as image, index (image.id)}
                <article>
                    <figure class="group relative overflow-hidden rounded-3xl">
                        <img
                            src={image.url}
                            alt={image.title || `${hotel.name} photo ${index + 1}`}
                            class="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
                            loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        <div class="absolute right-3 bottom-3 left-3 flex flex-wrap gap-2">
                            <span class="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0f4e40]">
                                {hotel.quickFacts[2].value}
                            </span>
                            <span class="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0f4e40]">
                                {hotel.quickFacts[1].value}
                            </span>
                        </div>
                        <figcaption
                            class="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0f4e40]"
                        >
                            + View
                        </figcaption>
                    </figure>
                    <h3 class="mt-3 text-3xl font-bold text-white">
                        {index === 0 ? 'Pine Ridge Glampsite' : 'Lakeside Luxury Escape'}
                    </h3>
                    <p class="mt-2 text-sm text-white/80">
                        {index === 0
                            ? 'Cocok untuk pasangan yang mengincar suasana tenang dengan fasilitas inti yang nyaman.'
                            : 'Pilihan tepat untuk keluarga kecil yang ingin pengalaman stay lebih privat.'}
                    </p>
                </article>
            {/each}
        </div>
    </div>
</section>
