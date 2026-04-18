<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<section id="paket" class="px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl rounded-[2rem] bg-[#0a3b31] px-6 py-8 text-white sm:px-8 sm:py-10">
        <p class="text-xs font-semibold tracking-[0.2em] text-[#66d8a9] uppercase">
            Paket Rekomendasi
        </p>
        <h2 class="font-display mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Pilih gaya liburan premium Anda
        </h2>

        <div class="mt-6 grid gap-4 lg:grid-cols-3">
            {#each hotel.stayPackages as pkg, index (pkg.name)}
                <article
                    class="glass-card rounded-3xl border p-5 {index === 1 ? 'border-[#ffcf5a] bg-white text-[#103b33]' : 'border-white/20 bg-white/10 text-white'}"
                >
                    <p class="font-display text-2xl font-extrabold">
                        {pkg.name}
                    </p>
                    <p class="mt-1 text-xs font-semibold uppercase {index === 1 ? 'text-[#0f8a62]' : 'text-[#8fe7bf]'}">
                        {pkg.duration} · {pkg.audience}
                    </p>
                    <ul class="mt-4 space-y-2 text-sm {index === 1 ? 'text-[#45655b]' : 'text-white/85'}">
                        {#each pkg.points as point (point)}
                            <li class="rounded-xl px-3 py-2 {index === 1 ? 'bg-[#f3f7f5]' : 'bg-white/12'}">
                                {point}
                            </li>
                        {/each}
                    </ul>
                    <p class="mt-4 text-sm font-semibold {index === 1 ? 'text-[#20493f]' : 'text-white'}">
                        {pkg.note}
                    </p>
                    <a
                        href={hotel.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-4 inline-flex rounded-full px-4 py-2 text-xs font-bold transition {index === 1 ? 'bg-[#0f4e40] text-white hover:bg-[#0b3a30]' : 'bg-white text-[#0f4e40] hover:bg-[#ffcf5a]'}"
                    >
                        Pilih Paket Ini
                    </a>
                </article>
            {/each}
        </div>
    </div>
</section>
