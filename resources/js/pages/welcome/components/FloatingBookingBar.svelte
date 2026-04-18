<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();

    const formattedRange = $derived(
        new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).formatRange(new Date(hotel.booking.checkIn), new Date(hotel.booking.checkOut)),
    );
</script>

<div class="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-5">
    <div
        class="pointer-events-auto mx-auto max-w-6xl rounded-2xl border border-[#d5e1db] bg-white/95 shadow-[0_12px_36px_rgba(15,78,64,0.16)] backdrop-blur"
    >
        <div class="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
            <div class="min-w-0">
                <p class="text-[11px] font-semibold tracking-[0.2em] text-[#0f8a62] uppercase">
                    Private Resort Slots
                </p>
                <p class="mt-1 truncate text-sm font-bold text-[#103b33] sm:text-base">
                    {hotel.name} • {formattedRange}
                </p>
                <p class="text-xs text-[#4b6b61]">
                    {hotel.booking.guests} tamu • {hotel.booking.nights} malam • {hotel.booking.rooms} kamar
                </p>
            </div>

            <div class="flex shrink-0 items-center gap-2 sm:gap-3">
                <a
                    href="#paket"
                    class="inline-flex items-center justify-center rounded-full border border-[#0f4e40]/30 px-4 py-2 text-xs font-bold text-[#0f4e40] transition hover:bg-[#ecf5f2]"
                >
                    Lihat Paket
                </a>
                <a
                    href={hotel.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center rounded-full bg-[#0f4e40] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#0b3a30] sm:px-5"
                >
                    Booking Sekarang
                </a>
            </div>
        </div>
    </div>
</div>
