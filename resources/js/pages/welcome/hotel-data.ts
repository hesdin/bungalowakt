import avatarPlaceholderOne from '@/pages/welcome/assets/avatar-placeholder-1.svg';
import avatarPlaceholderTwo from '@/pages/welcome/assets/avatar-placeholder-2.svg';
import avatarPlaceholderThree from '@/pages/welcome/assets/avatar-placeholder-3.svg';
import balconyImage from '@/pages/welcome/assets/bungalow-akt-balcony.jpg';
import bathroomImage from '@/pages/welcome/assets/bungalow-akt-bathroom.jpg';
import bedroomImage from '@/pages/welcome/assets/bungalow-akt-bedroom.jpg';
import guestRoomImage from '@/pages/welcome/assets/bungalow-akt-guest-room.jpg';
import propertyViewImage from '@/pages/welcome/assets/bungalow-akt-property-view.jpg';
import roomImage from '@/pages/welcome/assets/bungalow-akt-room.jpg';

export interface HotelGalleryItem {
    id: string;
    title: string;
    url: string;
    group: string;
}

export interface HotelFeature {
    label: string;
    description: string;
}

export interface StayPackage {
    name: string;
    duration: string;
    audience: string;
    points: string[];
    note: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface TestimonialItem {
    quote: string;
    body: string;
    name: string;
    location: string;
    avatarUrl: string;
    featured?: boolean;
}

export interface HotelLandingData {
    name: string;
    accommodationType: string;
    rating: number;
    sourceUrl: string;
    heroImageUrl: string;
    brand: {
        shortName: string;
        heroEyebrow: string;
        heroTitle: string;
        heroSubtitle: string;
        primaryCtaLabel: string;
        secondaryCtaLabel: string;
    };
    address: {
        street: string;
        area: string;
        city: string;
        country: string;
        postalCode: string;
        full: string;
    };
    coordinates: {
        latitude: number;
        longitude: number;
    };
    booking: {
        checkIn: string;
        checkOut: string;
        nights: number;
        guests: number;
        rooms: number;
    };
    quickFacts: Array<{ label: string; value: string }>;
    scarcityNote: string;
    trustSignals: string[];
    bookingSteps: string[];
    overview: {
        title: string;
        paragraphs: string[];
    };
    highlights: HotelFeature[];
    experiences: HotelFeature[];
    experiencesSummary: string;
    islandLifeFeatures: HotelFeature[];
    stayPackages: StayPackage[];
    faq: FAQItem[];
    testimonials: TestimonialItem[];
    policies: {
        minimumAgeNotice: string;
        infant: string;
        child: string;
        adult: string;
        groupBooking: string;
    };
    host: {
        name: string;
        location: string;
        joinedDate: string;
        propertiesCount: string;
        reviewsCount: number;
    };
    gallery: HotelGalleryItem[];
}

export const hotelData: HotelLandingData = {
    name: 'Bungalow AKT',
    accommodationType: 'Seluruh bungalow',
    rating: 3.0,
    sourceUrl:
        'https://www.agoda.com/id-id/id-id/bungalow-akt/hotel/tongano-barat-id.html?adults=2&rooms=1&checkIn=2026-05-18&los=2&ds=NMFFl0qMNenEvLib',
    heroImageUrl:
        'https://pix8.agoda.net/hotelImages/85763879/0/908ec666d032a5f996db19283745b6f8.jpg?ce=3&s=1024x768',
    brand: {
        shortName: 'AKT',
        heroEyebrow: 'Bungalow Privat di Wakatobi',
        heroTitle: 'Stay Dekat Laut di Tomia, Wakatobi',
        heroSubtitle:
            'Bungalow tropis minimalis untuk wisatawan yang mencari ketenangan, pemandangan laut, dan island escape yang tak terlupakan.',
        primaryCtaLabel: 'Cek Ketersediaan',
        secondaryCtaLabel: 'Lihat Lokasi',
    },
    address: {
        street: 'Tadu Sangia Tourism Road, Dete Village, Tomia.',
        area: 'Tongano Barat',
        city: 'Tongano Barat',
        country: 'Indonesia',
        postalCode: '93797',
        full: 'Tongano Barat, Tongano Barat, Indonesia',
    },
    coordinates: {
        latitude: -5.774621549793177,
        longitude: 123.9753139617464,
    },
    booking: {
        checkIn: '2026-05-18',
        checkOut: '2026-05-20',
        nights: 2,
        guests: 2,
        rooms: 1,
    },
    quickFacts: [
        { label: 'Rating Properti', value: '3.0 / 5' },
        { label: 'Tipe Properti', value: 'Seluruh bungalow' },
        { label: 'Durasi Ideal', value: '2-3 malam' },
        { label: 'Lokasi', value: 'Tomia, Wakatobi' },
    ],
    scarcityNote:
        'Ketersediaan terbatas: area Tongano Barat memiliki opsi properti sejenis yang relatif sedikit.',
    trustSignals: [
        'Booking melalui platform partner terpercaya (Agoda)',
        'Parkir gratis untuk tamu',
        'Sarapan sudah termasuk pada properti ini',
        'Kebijakan anak yang ramah keluarga',
    ],
    bookingSteps: [
        'Klik tombol cek ketersediaan',
        'Pilih tanggal dan tipe kamar yang sesuai',
        'Konfirmasi pemesanan di platform partner',
    ],
    overview: {
        title: 'Pelarian Privat dengan Nuansa Tropis yang Tenang',
        paragraphs: [
            'Bungalow AKT memberi pengalaman menginap yang tenang untuk tamu yang ingin menekan tempo perjalanan dan menikmati waktu lebih berkualitas. Suasananya cocok untuk rehat, kembali terhubung dengan diri sendiri, dan menikmati ritme lokal Tomia.',
        ],
    },
    highlights: [
        {
            label: 'Penginapan Privat',
            description:
                'Seluruh bungalow memberi privasi lebih untuk pasangan atau pelancong yang mencari ritme menginap yang tenang.',
        },
        {
            label: 'Lokasi Strategis',
            description:
                'Posisinya pas untuk tamu yang ingin tetap dekat dengan area eksplor Tomia tanpa kehilangan suasana tenang saat kembali beristirahat.',
        },
        {
            label: 'Parkir Gratis',
            description:
                'Lebih praktis saat datang dengan kendaraan sendiri atau dijemput untuk eksplor area Tomia.',
        },
        {
            label: 'Perlengkapan Kamar',
            description:
                'Toiletries, handuk, serta kopi/teh instan tersedia di kamar tertentu.',
        },
        {
            label: 'Ramah Keluarga',
            description:
                'Anak-anak diterima dan ada kebijakan menginap gratis untuk rentang usia tertentu sesuai ketentuan properti.',
        },
        {
            label: 'Basis Eksplor Tomia',
            description:
                'Lokasinya cocok sebagai titik singgah untuk menginap santai sambil menjelajah kawasan Tongano Barat.',
        },
    ],
    experiences: [
        {
            label: 'Trip snorkeling dan diving',
            description:
                'Nikmati perairan jernih dan kehidupan laut yang menjadikan pengalaman Wakatobi begitu berkesan.',
        },
        {
            label: 'Jalan santai pantai & momen sunset',
            description:
                'Sore yang pelan dengan cahaya hangat, angin laut, dan suasana pantai yang damai.',
        },
        {
            label: 'Pengalaman island hopping',
            description:
                'Jelajahi pulau-pulau kecil sekitar Tomia untuk island escape yang lebih lengkap.',
        },
        {
            label: 'Budaya lokal & ketenangan tropis',
            description:
                'Rasakan ritme hidup lokal yang hangat dalam destinasi yang tenang dan autentik.',
        },
    ],
    experiencesSummary:
        'Bungalow AKT cocok untuk wisatawan yang ingin menikmati petualangan laut sekaligus istirahat pulau yang damai dalam satu perjalanan Wakatobi.',
    islandLifeFeatures: [
        {
            label: 'Beberapa langkah dari pantai',
            description:
                'Bangun pagi dengan udara laut dan pemandangan garis pantai yang menenangkan.',
        },
        {
            label: 'Suasana tenang untuk istirahat dan healing',
            description:
                'Nuansa alami yang lembut dan ruang yang hening untuk pengalaman Wakatobi yang lebih membumi.',
        },
        {
            label: 'Dekat dengan snorkeling dan diving',
            description:
                'Akses mudah ke petualangan bawah laut, terumbu karang, dan perairan jernih Tomia.',
        },
        {
            label: 'Kamar bersih, estetik, dan nyaman',
            description:
                'Ruang yang terawat dengan baik dan nyaman untuk pasangan, solo traveler, maupun keluarga.',
        },
    ],
    stayPackages: [
        {
            name: 'Liburan Singkat',
            duration: '2 Hari 1 Malam',
            audience: 'Pasangan / Tamu sendiri',
            points: [
                'Tiba sore, istirahat penuh',
                'Pagi santai dengan sarapan',
                'Keluar siang untuk lanjut menjelajah',
            ],
            note: 'Pilihan cepat untuk memulihkan energi.',
        },
        {
            name: 'Akhir Pekan Santai',
            duration: '3 Hari 2 Malam',
            audience: 'Pasangan',
            points: [
                'Hari pertama: tiba dan beradaptasi',
                'Hari kedua: eksplor area sekitar',
                'Hari ketiga: relaks sebelum pulang',
            ],
            note: 'Paling cocok untuk menikmati ritme Tomia.',
        },
        {
            name: 'Kerja + Rehat',
            duration: '4 Hari 3 Malam',
            audience: 'Pekerja remote',
            points: [
                'Pagi fokus kerja, sore rehat',
                'Akomodasi sederhana untuk menginap lebih lama',
                'Akses fleksibel untuk rutinitas harian',
            ],
            note: 'Kombinasi produktif dan pemulihan.',
        },
    ],
    faq: [
        {
            question: 'Apakah properti ini cocok untuk keluarga dengan anak?',
            answer: 'Ya. Semua anak diterima. Anak usia 2-7 tahun bisa menginap gratis jika menggunakan tempat tidur yang tersedia.',
        },
        {
            question:
                'Apakah tersedia tempat tidur bayi atau tempat tidur tambahan?',
            answer: 'Tempat tidur bayi dan tempat tidur tambahan dapat diminta langsung ke properti, tergantung ketersediaan dan kemungkinan biaya tambahan.',
        },
        {
            question: 'Berapa usia tamu yang dianggap dewasa?',
            answer: 'Di properti ini, tamu usia 8 tahun ke atas dianggap dewasa.',
        },
        {
            question: 'Apakah harga dan ketersediaan selalu sama?',
            answer: 'Harga, ketersediaan, dan kebijakan final mengikuti data booking partner (Agoda) saat Anda melakukan pemesanan.',
        },
    ],
    testimonials: [
        {
            quote: '“Suasananya tenang dan pas untuk jeda dari rutinitas.”',
            body: 'Saya suka karena bangun pagi terasa santai, kamarnya hangat, dan ritme menginapnya memang cocok untuk perjalanan pelan di Tomia.',
            name: 'Alya Putri',
            location: 'Makassar, Indonesia',
            avatarUrl: avatarPlaceholderOne,
            featured: true,
        },
        {
            quote: '“Pilihan menginap yang simpel tapi tetap terasa privat.”',
            body: 'Area bungalow dan terasnya enak dipakai duduk sore. Cocok buat pasangan yang ingin suasana lebih tenang dan tidak ramai.',
            name: 'Rian Setiawan',
            location: 'Kendari, Indonesia',
            avatarUrl: avatarPlaceholderTwo,
        },
        {
            quote: '“Lokasinya enak dijadikan titik singgah untuk eksplor.”',
            body: 'Setelah jalan-jalan seharian, kembali ke bungalow ini tetap terasa nyaman. Fasilitas dasarnya cukup dan proses booking jelas.',
            name: 'Nadia Rahma',
            location: 'Jakarta, Indonesia',
            avatarUrl: avatarPlaceholderThree,
        },
    ],
    policies: {
        minimumAgeNotice: 'Semua anak diterima di properti ini.',
        infant: 'Bayi 0-1 tahun: gratis jika menggunakan tempat tidur yang tersedia. Tempat tidur bayi bisa diminta sesuai ketersediaan.',
        child: 'Anak 2-7 tahun: gratis jika menggunakan tempat tidur yang tersedia.',
        adult: 'Tamu usia 8 tahun ke atas dianggap dewasa.',
        groupBooking:
            'Untuk pemesanan lebih dari 5 kamar, dapat berlaku kebijakan dan biaya tambahan berbeda.',
    },
    host: {
        name: 'Bambang Tomia',
        location: 'Wakatobi, Indonesia',
        joinedDate: 'Maret 2026',
        propertiesCount: '1',
        reviewsCount: 0,
    },
    gallery: [
        {
            id: '191753598',
            title: 'Tampilan eksterior bungalow',
            url: propertyViewImage,
            group: 'Eksterior',
        },
        {
            id: '191753594',
            title: 'Kamar tidur utama',
            url: bedroomImage,
            group: 'Kamar',
        },
        {
            id: '191753595',
            title: 'Balkon dan teras bungalow',
            url: balconyImage,
            group: 'Area luar',
        },
        {
            id: '191753583',
            title: 'Area kamar',
            url: roomImage,
            group: 'Kamar',
        },
        {
            id: '191753609',
            title: 'Detail amenitas kamar',
            url: guestRoomImage,
            group: 'Amenitas',
        },
        {
            id: '191753604',
            title: 'Kamar mandi',
            url: bathroomImage,
            group: 'Kamar mandi',
        },
    ],
};
