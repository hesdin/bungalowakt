<script lang="ts">
    import type { HotelLandingData } from '@/pages/welcome/hotel-data';
    import { ChevronDown } from 'lucide-svelte';

    let { hotel }: { hotel: HotelLandingData } = $props();
</script>

<section id="faq" class="scroll-mt-28 py-8 sm:py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
            class="text-xs font-semibold tracking-[0.2em] text-[#0f8a62] uppercase"
        >
            FAQ
        </p>
        <h2 class="font-display mt-2 text-4xl font-extrabold text-[#103b33]">
            Pertanyaan yang Sering Ditanyakan
        </h2>

        <div class="mt-6 space-y-3">
            {#each hotel.faq as item (item.question)}
                <details
                    class="group rounded-xl border border-[#d5e1db] bg-white p-4 transition hover:border-[#8ecdb4]"
                >
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#103b33]"
                    >
                        {item.question}
                        <ChevronDown
                            class="size-5 shrink-0 text-[#0f8a62] transition duration-200 group-open:rotate-180"
                        />
                    </summary>
                    <p class="mt-3 text-sm leading-relaxed text-[#4b6b61]">
                        {item.answer}
                    </p>
                </details>
            {/each}
        </div>
    </div>
</section>
