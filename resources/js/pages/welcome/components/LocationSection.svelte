<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();

    const googleMapsUrl = $derived(
        `https://www.google.com/maps/search/?api=1&query=${hotel.coordinates.latitude},${hotel.coordinates.longitude}`,
    );
</script>

<section id="lokasi" class="scroll-mt-28 py-8 sm:py-12">
    <div
        class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8"
    >
        <div
            class="glass-card rounded-xl border border-[#d5e1db] bg-white p-6 lg:col-span-5"
        >
            <p
                class="text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase"
            >
                Lokasi
            </p>
            <h2
                class="font-display mt-2 text-4xl font-extrabold text-[#103b33]"
            >
                Strategis untuk Jelajah Tomia
            </h2>
            <p class="mt-4 text-sm leading-relaxed text-[#4b6b61]">
                {hotel.address.full}
            </p>
            <p class="mt-2 text-sm leading-relaxed text-[#4b6b61]">
                {hotel.address.street}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-[#4b6b61]">
                Cocok untuk pengunjung yang ingin eksplor area sekitar lalu
                kembali ke tempat istirahat yang tenang.
            </p>

            <div
                class="mt-5 rounded-xl border border-[#dbe6e0] bg-[#f6f9f7] p-4 text-sm"
            >
                <p class="text-[#5a7a70]">Koordinat</p>
                <p class="mt-1 font-semibold text-[#0f4e40]">
                    {hotel.coordinates.latitude}, {hotel.coordinates.longitude}
                </p>
            </div>

            <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-5 inline-flex rounded-2xl bg-[#0f4e40] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0b3a30]"
            >
                Buka Rute di Google Maps
            </a>
        </div>

        <div class="overflow-hidden rounded-xl lg:col-span-7">
            <img
                src={hotel.gallery[2].url}
                alt={`Area sekitar ${hotel.name}`}
                class="h-[320px] w-full rounded-xl object-cover sm:h-[380px] lg:h-[460px]"
                loading="lazy"
            />
        </div>
    </div>
</section>
