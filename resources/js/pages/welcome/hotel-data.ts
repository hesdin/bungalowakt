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

export interface HotelLandingData {
    name: string;
    accommodationType: string;
    rating: number;
    sourceUrl: string;
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
    stayPackages: StayPackage[];
    faq: FAQItem[];
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
    accommodationType: 'Entire bungalow',
    rating: 3.0,
    sourceUrl:
        'https://www.agoda.com/id-id/id-id/bungalow-akt/hotel/tongano-barat-id.html?adults=2&rooms=1&checkIn=2026-05-18&los=2&ds=NMFFl0qMNenEvLib',
    brand: {
        shortName: 'AKT',
        heroEyebrow: 'Private Bungalow in Wakatobi',
        heroTitle: 'Rasakan Liburan Tenang di Bungalow AKT',
        heroSubtitle:
            'Tempat ideal untuk pasangan dan traveler yang ingin jeda dari hiruk-pikuk kota: suasana tropis, ritme santai, dan akses mudah untuk eksplor Tomia.',
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
        { label: 'Rating Listing', value: '3.0 / 5' },
        { label: 'Tipe Properti', value: 'Entire bungalow' },
        { label: 'Durasi Ideal', value: '2-3 malam' },
        { label: 'Lokasi', value: 'Tomia, Wakatobi' },
    ],
    scarcityNote:
        'Ketersediaan terbatas: area Tongano Barat memiliki opsi properti sejenis yang relatif sedikit.',
    trustSignals: [
        'Booking melalui platform partner terpercaya (Agoda)',
        'Parkir gratis untuk tamu',
        'Sarapan sudah termasuk pada listing ini',
        'Kebijakan anak yang ramah keluarga',
    ],
    bookingSteps: [
        'Klik tombol cek ketersediaan',
        'Pilih tanggal dan tipe kamar yang sesuai',
        'Konfirmasi pemesanan di platform partner',
    ],
    overview: {
        title: 'Private Escape dengan Nuansa Tropis yang Tenang',
        paragraphs: [
            'Bungalow AKT memberi pengalaman menginap yang intim untuk tamu yang ingin menekan tempo perjalanan dan menikmati waktu lebih berkualitas. Suasananya cocok untuk rehat, reconnect, dan menikmati ritme lokal Tomia.',
            'Berdasarkan data listing Agoda, properti ini menyediakan value esensial yang dicari traveler: parkir gratis, sarapan termasuk, serta fasilitas dasar kamar yang membuat stay tetap nyaman tanpa ribet.',
        ],
    },
    highlights: [
        {
            label: 'Parkir Gratis',
            description: 'Lebih praktis untuk tamu yang membawa kendaraan sendiri.',
        },
        {
            label: 'Sarapan Gratis',
            description: 'Mulai hari lebih ringan dengan sarapan yang sudah termasuk.',
        },
        {
            label: 'Area Merokok Terpisah',
            description: 'Kenyamanan tamu tetap terjaga dengan area merokok khusus.',
        },
        {
            label: 'Perlengkapan Dasar Kamar',
            description:
                'Toiletries, handuk, serta kopi/teh instan tersedia di kamar tertentu.',
        },
    ],
    experiences: [
        {
            label: 'Bangun dengan Suasana Tropis',
            description:
                'Udara pagi yang tenang memberi ritme liburan yang lebih santai dan personal.',
        },
        {
            label: 'Ruang Istirahat yang Intim',
            description:
                'Cocok untuk pasangan atau solo traveler yang butuh ruang rehat berkualitas.',
        },
        {
            label: 'Akses Mudah Eksplor Tomia',
            description:
                'Lokasi ideal sebagai basecamp untuk jelajah sekitar Tongano Barat.',
        },
    ],
    stayPackages: [
        {
            name: 'Quick Escape',
            duration: '2 Hari 1 Malam',
            audience: 'Pasangan / Solo Traveler',
            points: [
                'Check-in sore, istirahat penuh',
                'Pagi santai dengan sarapan',
                'Checkout siang untuk lanjut eksplor',
            ],
            note: 'Pilihan cepat untuk reset energi.',
        },
        {
            name: 'Slow Living Weekend',
            duration: '3 Hari 2 Malam',
            audience: 'Pasangan',
            points: [
                'Hari pertama: arrival dan adaptasi',
                'Hari kedua: eksplor area sekitar',
                'Hari ketiga: relaks sebelum pulang',
            ],
            note: 'Paling cocok untuk menikmati ritme Tomia.',
        },
        {
            name: 'Work + Recharge',
            duration: '4 Hari 3 Malam',
            audience: 'Remote Worker',
            points: [
                'Pagi fokus kerja, sore rehat',
                'Akomodasi sederhana untuk stay lebih lama',
                'Akses fleksibel untuk daily routine',
            ],
            note: 'Kombinasi produktif dan recovery.',
        },
    ],
    faq: [
        {
            question: 'Apakah properti ini cocok untuk keluarga dengan anak?',
            answer:
                'Ya. Semua anak diterima. Anak usia 2-7 tahun bisa menginap gratis jika menggunakan tempat tidur yang tersedia.',
        },
        {
            question: 'Apakah tersedia baby cot atau extra bed?',
            answer:
                'Baby cot/crib dan extra bed dapat diminta langsung ke properti, tergantung ketersediaan dan kemungkinan biaya tambahan.',
        },
        {
            question: 'Berapa usia tamu yang dianggap dewasa?',
            answer: 'Di listing ini, tamu usia 8 tahun ke atas dianggap dewasa.',
        },
        {
            question: 'Apakah harga dan ketersediaan selalu sama?',
            answer:
                'Harga, ketersediaan, dan kebijakan final mengikuti data booking partner (Agoda) saat Anda melakukan pemesanan.',
        },
    ],
    policies: {
        minimumAgeNotice: 'Semua anak diterima di properti ini.',
        infant:
            'Bayi 0-1 tahun: gratis jika menggunakan tempat tidur yang tersedia. Baby cot/crib bisa diminta sesuai ketersediaan.',
        child: 'Anak 2-7 tahun: gratis jika menggunakan tempat tidur yang tersedia.',
        adult: 'Tamu usia 8 tahun ke atas dianggap dewasa.',
        groupBooking:
            'Untuk pemesanan lebih dari 5 kamar, dapat berlaku kebijakan dan biaya tambahan berbeda.',
    },
    host: {
        name: 'Bambang Tomia',
        location: 'Wakatobi, Indonesia',
        joinedDate: 'March 2026',
        propertiesCount: '1',
        reviewsCount: 0,
    },
    gallery: [
        {
            id: '191753609',
            title: 'Amenity (Guest room)',
            url: 'https://pix8.agoda.net/hotelImages/85763879/0/908ec666d032a5f996db19283745b6f8.jpg?ce=3&s=1024x768',
            group: 'Facilities',
        },
        {
            id: '191753594',
            title: 'Bedroom',
            url: 'https://pix8.agoda.net/hotelImages/85763879/0/b1c34a9740221213391e27e5323d1b2f.jpg?ce=3&s=1024x768',
            group: 'Facilities',
        },
        {
            id: '191753595',
            title: 'Balcony/terrace',
            url: 'https://pix8.agoda.net/hotelImages/85763879/0/75b8b43e2d291f1638d76ab3921e0269.jpg?ce=3&s=1024x768',
            group: 'Facilities',
        },
        {
            id: '191753598',
            title: 'Property view',
            url: 'https://pix8.agoda.net/hotelImages/85763879/0/18335848b1981a1e521a3917c10bfa20.jpg?ce=3&s=1024x768',
            group: 'Facilities',
        },
        {
            id: '191753583',
            title: 'Room',
            url: 'https://pix8.agoda.net/hotelImages/85763879/0/c27af53070fe7f546c2b6dff2def89a7.jpg?ce=3&s=1024x768',
            group: 'Rooms',
        },
        {
            id: '191753604',
            title: 'Bathroom',
            url: 'https://pix8.agoda.net/hotelImages/85763879/0/d531120de60617bebf306838171277e2.jpg?ce=3&s=1024x768',
            group: 'Facilities',
        },
    ],
};
