<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<footer class="px-4 pt-8 pb-12 sm:px-6 lg:px-8">
    <div
        class="mx-auto max-w-7xl rounded-[2rem] bg-[#084133] px-6 py-8 text-white sm:px-8 sm:py-10"
    >
        <div class="grid gap-8 lg:grid-cols-12">
            <div class="lg:col-span-5">
                <p class="font-display max-w-md text-4xl leading-tight font-extrabold">
                    Experience nature in a new way.
                    <span class="text-[#ffcf5a]">Visit us.</span>
                </p>
                <a
                    href={hotel.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-[#0f4e40] transition hover:bg-[#ffcf5a]"
                >
                    Reserve now
                </a>
            </div>

            <div class="grid gap-6 sm:grid-cols-3 lg:col-span-7">
                <div>
                    <p class="text-xs font-semibold tracking-[0.2em] text-[#8fe7bf] uppercase">
                        Brand
                    </p>
                    <p class="mt-2 text-lg font-bold">Book-{hotel.brand.shortName}</p>
                    <p class="mt-2 text-sm text-white/80">
                        © {new Date().getFullYear()} {hotel.name}
                    </p>
                </div>
                <div>
                    <p class="text-xs font-semibold tracking-[0.2em] text-[#8fe7bf] uppercase">
                        Main Pages
                    </p>
                    <ul class="mt-2 space-y-1 text-sm text-white/85">
                        <li><a href="#beranda" class="hover:text-[#ffcf5a]">Home</a></li>
                        <li><a href="#overview" class="hover:text-[#ffcf5a]">About</a></li>
                        <li><a href="#paket" class="hover:text-[#ffcf5a]">Packages</a></li>
                        <li><a href="#lokasi" class="hover:text-[#ffcf5a]">Location</a></li>
                    </ul>
                </div>
                <div>
                    <p class="text-xs font-semibold tracking-[0.2em] text-[#8fe7bf] uppercase">
                        Utility
                    </p>
                    <ul class="mt-2 space-y-1 text-sm text-white/85">
                        <li><a href="#faq" class="hover:text-[#ffcf5a]">FAQ</a></li>
                        <li><a href="#kebijakan" class="hover:text-[#ffcf5a]">Policies</a></li>
                        <li>
                            <a
                                href={hotel.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="hover:text-[#ffcf5a]"
                            >
                                Agoda listing
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
