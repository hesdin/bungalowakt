<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<section class="px-4 py-10 sm:px-6 lg:px-8">
    <div
        class="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#d5e1db] p-6 text-white lg:p-8"
    >
        <img
            src={hotel.gallery[1].url}
            alt={`Final CTA ${hotel.name}`}
            class="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/45"></div>

        <div class="relative">
            <p class="text-xs font-semibold tracking-[0.2em] text-[#66d8a9] uppercase">
            Final Call
            </p>
            <h2 class="font-display mt-2 max-w-3xl text-4xl leading-tight font-extrabold lg:text-5xl">
                Experience nature in a new way.
                <span class="text-[#ffcf5a]">Visit us.</span>
            </h2>
            <p class="mt-4 max-w-2xl text-sm text-white/90 lg:text-base">
                Klik tombol di bawah untuk melihat harga terbaru, ketersediaan kamar,
                dan lanjutkan proses booking secara aman melalui platform partner.
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
                <a
                    href={hotel.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0f4e40] transition hover:bg-[#ffcf5a]"
                >
                    {hotel.brand.primaryCtaLabel}
                </a>
                <a
                    href="#beranda"
                    class="rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                    Kembali ke Atas
                </a>
            </div>
        </div>
    </div>
</section>
