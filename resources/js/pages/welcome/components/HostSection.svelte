<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<section class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
        <div
            class="relative overflow-hidden rounded-[2rem] border border-[#d5e1db] bg-white p-6 lg:p-8"
        >
            <p class="text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase">
                Local host
            </p>
            <h2 class="font-display mt-2 text-4xl font-extrabold text-[#103b33]">
                Dikelola langsung oleh {hotel.host.name}
            </h2>
            <p class="mt-3 max-w-2xl text-sm text-[#4b6b61]">
                Komunikasi lebih mudah dan pengalaman menginap terasa lebih
                personal karena dikelola host setempat.
            </p>

            <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-2xl border border-[#dbe6e0] bg-[#f6f9f7] p-4">
                    <p class="text-xs text-[#5a7a70]">Lokasi Host</p>
                    <p class="mt-1 text-sm font-semibold text-[#0f4e40]">
                        {hotel.host.location}
                    </p>
                </div>
                <div class="rounded-2xl border border-[#dbe6e0] bg-[#f6f9f7] p-4">
                    <p class="text-xs text-[#5a7a70]">Bergabung</p>
                    <p class="mt-1 text-sm font-semibold text-[#0f4e40]">
                        {hotel.host.joinedDate}
                    </p>
                </div>
                <div class="rounded-2xl border border-[#dbe6e0] bg-[#f6f9f7] p-4">
                    <p class="text-xs text-[#5a7a70]">Properti</p>
                    <p class="mt-1 text-sm font-semibold text-[#0f4e40]">
                        {hotel.host.propertiesCount}
                    </p>
                </div>
                <div class="rounded-2xl border border-[#dbe6e0] bg-[#f6f9f7] p-4">
                    <p class="text-xs text-[#5a7a70]">Ulasan</p>
                    <p class="mt-1 text-sm font-semibold text-[#0f4e40]">
                        {hotel.host.reviewsCount}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
