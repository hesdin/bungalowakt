<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<section id="kebijakan" class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12">
        <div
            class="rounded-3xl border border-[#d5e1db] bg-white p-6 lg:col-span-7"
        >
            <p class="text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase">
                Kebijakan Penting
            </p>
            <h2 class="font-display mt-2 text-4xl font-extrabold text-[#103b33]">
                Sebelum Booking, Cek Ini Dulu
            </h2>
            <ul class="mt-5 space-y-3 text-sm leading-relaxed text-[#4b6b61]">
                <li class="rounded-2xl border border-[#dbe6e0] bg-[#f6f9f7] p-3">
                    {hotel.policies.minimumAgeNotice}
                </li>
                <li class="rounded-2xl border border-[#dbe6e0] bg-[#f6f9f7] p-3">
                    {hotel.policies.infant}
                </li>
                <li class="rounded-2xl border border-[#dbe6e0] bg-[#f6f9f7] p-3">
                    {hotel.policies.child}
                </li>
                <li class="rounded-2xl border border-[#dbe6e0] bg-[#f6f9f7] p-3">
                    {hotel.policies.adult}
                </li>
            </ul>
        </div>

        <div
            class="glass-card rounded-3xl border border-[#d5e1db] bg-white p-6 lg:col-span-5"
        >
            <p class="text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase">
                Group Booking
            </p>
            <h3 class="font-display mt-2 text-2xl font-extrabold text-[#103b33]">
                Catatan Tambahan
            </h3>
            <p class="mt-4 rounded-2xl border border-[#dbe6e0] bg-[#f6f9f7] p-3 text-sm text-[#4b6b61]">
                {hotel.policies.groupBooking}
            </p>
            <p class="mt-4 text-xs text-[#5a7a70]">
                Untuk kebijakan paling update, selalu verifikasi kembali pada
                halaman booking saat checkout.
            </p>
        </div>
    </div>
</section>
