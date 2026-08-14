export interface TourTier {
  busType: string;
  capacity: string;
  pricePerPerson: string;
  hotelDetails: string;
  notes: string;
}

export interface TourPackage {
  id: string;
  title: string;
  categoryKey: 'domestik' | 'internasional';
  duration: string;
  route: string[];
  routeDisplay: string;
  image: string;
  badge: string;
  minPrice: string;
  tiers: TourTier[];
  highlights: string[];
  includes: string[];
  excludes: string[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  // 1. KAMPUNG ADAT BENA & GUNUNG INERIE
  {
    id: 'tour-bena-inerie',
    title: 'WISATA KAMPUNG ADAT BENA & GUNUNG INERIE',
    categoryKey: 'domestik',
    duration: 'Full Day / 2D1N',
    route: ['Kota Bajawa', 'Kampung Adat Bena', 'Spot Foto Gunung Inerie', 'Pengrajin Tenun Ikat Ngada'],
    routeDisplay: 'Bajawa - Bena - Gunung Inerie',
    image: '/dest_bena.jpg',
    badge: 'Wisata Budaya & Alam',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Avanza / Innova / Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Hotel / Homestay di Bajawa',
        notes: 'Arsitektur Megalitikum & Tenun Ikat Asli Ngada'
      }
    ],
    highlights: [
      'Menikmati keunikan rumah adat dan kehidupan masyarakat tradisional Ngada',
      'Latar belakang pemandangan megah Gunung Inerie',
      'Melihat langsung proses pembuatan kain tenun ikat tradisional',
      'Mengenal sejarah dan susunan batu megalitikum warisan nenek moyang'
    ],
    includes: [
      'Transportasi Mobil AC + Driver & BBM',
      'Tiket Masuk Kampung Adat Bena',
      'Guide Lokal Kebudayaan'
    ],
    excludes: [
      'Pengeluaran Pribadi & Belanja Souvenir'
    ]
  },

  // 2. AIR PANAS MENGERUDA SOA
  {
    id: 'tour-mengeruda',
    title: 'WISATA AIR PANAS MENGERUDA SOA',
    categoryKey: 'domestik',
    duration: 'Half Day / Full Day',
    route: ['Kota Bajawa', 'Bandara Soa', 'Pemandian Air Panas Mengeruda', 'Resto Alami'],
    routeDisplay: 'Bajawa - Bandara Soa - Air Panas Mengeruda',
    image: '/dest_mengeruda.jpg',
    badge: 'Air Panas Alami',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Avanza / Innova / Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Tanpa Menginap / Hotel Bajawa',
        notes: 'Relaksasi Air Panas Alami Geothermal'
      }
    ],
    highlights: [
      'Bersantai dan berendam di aliran sungai air panas alami Geothermal Soa',
      'Suasana alam yang hijau, sejuk, dan merelaksasi tubuh',
      'Berlokasi dekat dengan Bandara Soa (Bajawa)',
      'Sangat cocok untuk pemulihan stamina setelah perjalanan jauh'
    ],
    includes: [
      'Mobil AC + Driver & BBM',
      'Tiket Masuk Pemandian Mengeruda'
    ],
    excludes: [
      'Pengeluaran Pribadi & Sewa Handuk'
    ]
  },

  // 3. EXOTIC RIUNG 17 PULAU
  {
    id: 'tour-riung',
    title: 'PAKET WISATA EXOTIC RIUNG 17 PULAU',
    categoryKey: 'domestik',
    duration: 'Full Day / 2D1N',
    route: ['Bajawa', 'Dermaga Riung', 'Pulau Rutong', 'Pulau Ontoloe (Kelewar)', 'Spot Snorkeling'],
    routeDisplay: 'Bajawa - Riung - Island Hopping 17 Pulau',
    image: '/dest_riung.jpg',
    badge: 'Wisata Bahari',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Innova / Hiace + Perahu Motor',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Penginapan Riung / Hotel Bajawa',
        notes: 'Island Hopping & Snorkeling Air Jernih'
      }
    ],
    highlights: [
      'Menikmati keindahan pantai pasir putih bersih dan pulau-pulau kecil di Riung',
      'Snorkeling mengamati keanekaragaman terumbu karang bawah laut',
      'Melihat koloni ribuan kelelawar gantung di Pulau Ontoloe',
      'Santap siang ikan bakar khas pesisir pantai Riung'
    ],
    includes: [
      'Mobil AC Bajawa - Riung PP + Driver & BBM',
      'Sewa Perahu Motor Island Hopping',
      'Alat Snorkeling & Pelampung',
      'Makan Siang Ikan Bakar'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 4. DANAU WAWOMUDHA & KAMPUNG WOGO
  {
    id: 'tour-wawomudha-wogo',
    title: 'DANAU WAWOMUDHA & KAMPUNG ADAT WOGO',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Kota Bajawa', 'Trekking Danau Wawomudha', 'Kampung Adat Wogo', 'Kuliner Bajawa'],
    routeDisplay: 'Bajawa - Danau Wawomudha - Kampung Wogo',
    image: '/dest_wawomudha.jpg',
    badge: 'Danau Kawah & Budaya',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Avanza / Innova',
        capacity: '2 - 7 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Hotel Bajawa',
        notes: 'Panorama Perbukitan Tenang & Budaya Ngada'
      }
    ],
    highlights: [
      'Danau kawah eksotis Wawomudha dengan panorama perbukitan tenang',
      'Trekking ringan menikmati udara segar pegunungan Bajawa',
      'Mengenal lebih dekat kebudayaan dan rumah adat Kampung Wogo'
    ],
    includes: [
      'Mobil AC + Driver & BBM',
      'Tiket Masuk & Guide Tracking'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 5. OVERLAND FLORES
  {
    id: 'tour-overland-flores',
    title: 'RUTE OVERLAND FLORES (CUSTOM TRIP)',
    categoryKey: 'internasional',
    duration: '3D2N / 4D3N / Custom',
    route: ['Bajawa', 'Aimere', 'Riung', 'Mbay', 'Ende (Kelimutu)', 'Ruteng', 'Labuan Bajo'],
    routeDisplay: 'Bajawa - Ende - Ruteng - Labuan Bajo',
    image: '/dest_overland_flores.jpg',
    badge: 'Custom Overland Trip',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Innova Reborn / Toyota Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Hotel / Resort Sesuai Rute Perjalanan',
        notes: 'Perjalanan Nyaman Melintasi Kabupaten di Flores'
      }
    ],
    highlights: [
      'Melintasi pemandangan spektakuler perbukitan dan pesisir Pulau Flores',
      'Layanan fleksibel antar-kabupaten dari Bajawa hingga Labuan Bajo',
      'Driver menguasai medan perbukitan dan titik istirahat terbaik'
    ],
    includes: [
      'Mobil AC Prima (Innova / Hiace)',
      'Sopir Berpengalaman Rute Flores + BBM',
      'Konsultasi Itinerary & Rute Flexible'
    ],
    excludes: [
      'Hotel & Pengeluaran Pribadi'
    ]
  }
];
