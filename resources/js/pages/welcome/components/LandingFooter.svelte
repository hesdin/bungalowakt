<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<footer class="py-8 pb-12 sm:py-11 sm:pb-14 lg:py-12 lg:pb-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
            class="rounded-xl bg-[#084133] px-4 py-9 text-white sm:px-6 sm:py-11 lg:px-8 lg:py-12"
        >
            <div class="grid gap-10 lg:grid-cols-12">
                <div class="lg:col-span-5">
                    <div class="flex items-center gap-3">
                        <img
                            src="/assets/logo-akt.png"
                            alt={hotel.brand.shortName}
                            class="h-10 w-10 rounded-xl object-cover"
                        />
                        <div class="leading-tight">
                            <p
                                class="font-display text-2xl leading-none font-extrabold"
                            >
                                {hotel.brand.shortName}
                            </p>
                        </div>
                    </div>
                    <p
                        class="font-display mt-5 max-w-md text-4xl leading-tight font-extrabold"
                    >
                        Rasakan alam dengan cara baru.
                        <span class="text-[#ffcf5a]">Kunjungi kami.</span>
                    </p>
                    <a
                        href={hotel.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-6 inline-flex rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-[#0f4e40] transition hover:-translate-y-0.5 hover:bg-[#ffcf5a]"
                    >
                        {hotel.brand.primaryCtaLabel}
                    </a>
                </div>

                <div class="grid gap-6 sm:grid-cols-3 lg:col-span-7">
                    <div>
                        <p
                            class="text-xs font-semibold tracking-[0.2em] text-[#8fe7bf] uppercase"
                        >
                            Identitas
                        </p>
                        <p class="mt-2 text-lg font-bold">{hotel.name}</p>
                        <p class="mt-2 text-sm text-white/70">
                            {hotel.address.area}, {hotel.address.country}
                        </p>
                    </div>
                    <div>
                        <p
                            class="text-xs font-semibold tracking-[0.2em] text-[#8fe7bf] uppercase"
                        >
                            Halaman Utama
                        </p>
                        <ul class="mt-2 space-y-1 text-sm text-white/85">
                            <li>
                                <a href="#beranda" class="hover:text-[#ffcf5a]"
                                    >Beranda</a
                                >
                            </li>
                            <li>
                                <a href="#overview" class="hover:text-[#ffcf5a]"
                                    >Tentang</a
                                >
                            </li>
                            <li>
                                <a href="#paket" class="hover:text-[#ffcf5a]"
                                    >Paket</a
                                >
                            </li>
                            <li>
                                <a href="#lokasi" class="hover:text-[#ffcf5a]"
                                    >Lokasi</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p
                            class="text-xs font-semibold tracking-[0.2em] text-[#8fe7bf] uppercase"
                        >
                            Lainnya
                        </p>
                        <ul class="mt-2 space-y-1 text-sm text-white/85">
                            <li>
                                <a href="#faq" class="hover:text-[#ffcf5a]"
                                    >FAQ</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#kebijakan"
                                    class="hover:text-[#ffcf5a]">Kebijakan</a
                                >
                            </li>
                            <li>
                                <a
                                    href={hotel.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="hover:text-[#ffcf5a]"
                                >
                                    Halaman Agoda
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                class="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between"
            >
                <p>
                    © {new Date().getFullYear()}
                    {hotel.name}. Seluruh hak cipta dilindungi.
                </p>
                <p>
                    Dibuat dengan cinta untuk pelancong yang mencari ketenangan.
                </p>
            </div>
        </div>
    </div>
</footer>
