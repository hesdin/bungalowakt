<?php

use Inertia\Testing\AssertableInertia as Assert;

test('returns a successful response', function () {
    $response = $this->get(route('home'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('Welcome')
        ->has('canRegister'),
    );
});

test('welcome page does not reference the floating booking bar component', function () {
    expect(file_exists(resource_path('js/pages/welcome/components/FloatingBookingBar.svelte')))->toBeFalse();
    expect(file_get_contents(resource_path('js/pages/Welcome.svelte')))->not->toContain('FloatingBookingBar');
});

test('welcome page uses local Agoda image assets for the gallery', function () {
    $hotelData = file_get_contents(resource_path('js/pages/welcome/hotel-data.ts'));

    expect($hotelData)->toContain("import propertyViewImage from '@/pages/welcome/assets/bungalow-akt-property-view.jpg';");
    expect($hotelData)->toContain("import bedroomImage from '@/pages/welcome/assets/bungalow-akt-bedroom.jpg';");
    expect($hotelData)->toContain("import balconyImage from '@/pages/welcome/assets/bungalow-akt-balcony.jpg';");
    expect($hotelData)->toContain("import roomImage from '@/pages/welcome/assets/bungalow-akt-room.jpg';");
});

test('welcome page uses the requested hero image and placeholder testimonial avatars', function () {
    $hotelData = file_get_contents(resource_path('js/pages/welcome/hotel-data.ts'));

    expect($hotelData)->toContain('heroImageUrl:');
    expect($hotelData)->toContain('908ec666d032a5f996db19283745b6f8.jpg?ce=3&s=1024x768');
    expect($hotelData)->toContain("import avatarPlaceholderOne from '@/pages/welcome/assets/avatar-placeholder-1.svg';");
    expect($hotelData)->toContain("import avatarPlaceholderTwo from '@/pages/welcome/assets/avatar-placeholder-2.svg';");
    expect($hotelData)->toContain("import avatarPlaceholderThree from '@/pages/welcome/assets/avatar-placeholder-3.svg';");
});

test('welcome page uses indonesian copy for key sections', function () {
    $gallerySection = file_get_contents(resource_path('js/pages/welcome/components/GallerySection.svelte'));
    $overviewSection = file_get_contents(resource_path('js/pages/welcome/components/OverviewSection.svelte'));
    $highlightsSection = file_get_contents(resource_path('js/pages/welcome/components/HighlightsSection.svelte'));
    $socialProofSection = file_get_contents(resource_path('js/pages/welcome/components/SocialProofSection.svelte'));

    expect($gallerySection)->toContain('Kabin Pilihan')->not->toContain('Our cabins');
    expect($overviewSection)->toContain('Tentang Kami')->not->toContain('About Us');
    expect($highlightsSection)->toContain('Kenapa memilih kami?')->not->toContain('Why us?');
    expect($socialProofSection)->toContain('Testimoni')->not->toContain('Take their word, not ours');
});

test('welcome page applies the latest sticky navigation and flatter section styling', function () {
    $heroSection = file_get_contents(resource_path('js/pages/welcome/components/LandingHero.svelte'));
    $navbarSection = file_get_contents(resource_path('js/pages/welcome/components/LandingNavbar.svelte'));
    $socialProofSection = file_get_contents(resource_path('js/pages/welcome/components/SocialProofSection.svelte'));
    $hotelData = file_get_contents(resource_path('js/pages/welcome/hotel-data.ts'));

    expect($heroSection)->toContain('object-cover object-center');
    expect($heroSection)->not->toContain('hotel.brand.heroEyebrow');
    expect($heroSection)->not->toContain('shadow-[0_35px_100px_rgba');
    expect($navbarSection)->toContain('fixed inset-x-0 top-0 z-50');
    expect($hotelData)->not->toContain("label: 'Sarapan Termasuk'");
    expect($socialProofSection)->not->toContain('shadow-[0_20px_48px_rgba');
});

test('welcome page uses updated activity and island-living content while keeping host section commented', function () {
    $welcomePage = file_get_contents(resource_path('js/pages/Welcome.svelte'));
    $experienceSection = file_get_contents(resource_path('js/pages/welcome/components/ExperienceSection.svelte'));
    $hotelData = file_get_contents(resource_path('js/pages/welcome/hotel-data.ts'));
    $islandLifeSection = file_get_contents(resource_path('js/pages/welcome/components/IslandLifeSection.svelte'));

    expect($welcomePage)->toContain("// import HostSection from '@/pages/welcome/components/HostSection.svelte';");
    expect($welcomePage)->toContain('<!-- Host Lokal disiapkan kembali nanti. -->');
    expect($experienceSection)->toContain('Aktivitas Sekitar')->not->toContain('Aktivitas Kami');
    expect($hotelData)->toContain("label: 'Trip snorkeling dan diving'");
    expect($hotelData)->toContain("label: 'Budaya lokal & ketenangan tropis'");
    expect($islandLifeSection)->toContain('Dirancang untuk Kehidupan Pulau');
    expect($hotelData)->not->toContain('intim');
    expect($islandLifeSection)->toContain('hotel.islandLifeFeatures');
});

test('welcome page uses the latest hero copy and trimmed overview text', function () {
    $heroSection = file_get_contents(resource_path('js/pages/welcome/components/LandingHero.svelte'));
    $hotelData = file_get_contents(resource_path('js/pages/welcome/hotel-data.ts'));

    expect($heroSection)->toContain('{hotel.brand.heroTitle}');
    expect($hotelData)->toContain("heroTitle: 'Stay Dekat Laut di Tomia, Wakatobi'");
    expect($hotelData)->toContain("heroSubtitle:\n            'Bungalow tropis minimalis untuk wisatawan yang mencari ketenangan, pemandangan laut, dan island escape yang tak terlupakan.'");
    expect($hotelData)->not->toContain('Berdasarkan data Agoda, properti ini menyediakan nilai esensial yang dicari pelancong');
});
