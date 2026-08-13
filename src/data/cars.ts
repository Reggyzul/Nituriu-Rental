import { Car } from '../types';

export interface TestimonialItem {
  id: string;
  name: string;
  roleEN: string;
  roleID: string;
  textEN: string;
  textID: string;
  rating: number;
  image: string;
  carModelEN: string;
  carModelID: string;
  dateEN: string;
  dateID: string;
}

export const CARS: Car[] = [
  // 1. TOYOTA AVANZA
  {
    id: 'avanza',
    name: 'Toyota Avanza',
    category: 'Pilihan Praktis',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/baru/avanza.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin',
    includeList: [
      'Pilihan praktis keluarga & rombongan kecil',
      'Kapasitas ±6–7 penumpang',
      'AC Dingin & Interior Bersih',
      'Sopir Ramah Menguasai Rute Flores',
      'Kondisi Armada Terawat Prima'
    ],
    description: 'Pilihan praktis untuk perjalanan keluarga dan wisatawan dengan rombongan kecil menjelajahi Bajawa dan destinasi sekitarnya.',
    rating: 5.0,
    reviewsCount: 142,
    specifications: [
      { label: 'Kapasitas', value: '±6–7 Penumpang' },
      { label: 'Layanan', value: 'Rental Mobil / Dengan Driver' },
      { label: 'Penggunaan', value: 'Perjalanan Keluarga & Wisata Bajawa' }
    ]
  },

  // 2. TOYOTA INNOVA
  {
    id: 'innova',
    name: 'Toyota Innova',
    category: 'Pilihan Nyaman',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/baru/innova.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin / Diesel',
    includeList: [
      'Pilihan nyaman perjalanan jarak jauh & private trip',
      'Kapasitas ±6–7 penumpang',
      'Suspensi Empuk & Legroom Ekstra Lega',
      'Cocok Rute Overland Bajawa – Labuan Bajo',
      'Sopir Berpengalaman & Tepat Waktu'
    ],
    description: 'Pilihan nyaman untuk perjalanan jarak jauh, keluarga, maupun private trip menjelajahi seluruh wilayah Flores.',
    rating: 5.0,
    reviewsCount: 168,
    specifications: [
      { label: 'Kapasitas', value: '±6–7 Penumpang' },
      { label: 'Layanan', value: 'Private Trip & Rental dengan Driver' },
      { label: 'Penggunaan', value: 'Perjalanan Jarak Jauh & Rute Flores' }
    ]
  },

  // 3. TOYOTA HIACE
  {
    id: 'hiace',
    name: 'Toyota Hiace',
    category: 'Transportasi Rombongan',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/baru/hiace.avif',
    seats: 15,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: [
      'Cocok untuk rombongan & keluarga besar',
      'Kapasitas menyesuaikan tipe kendaraan (up to 15 seat)',
      'AC Ducting Dingin Setiap Baris',
      'Reclining Seats Ergonomis',
      'Sopir Spesialis Tour Rombongan Flores'
    ],
    description: 'Cocok untuk rombongan, keluarga besar, komunitas, maupun perjalanan wisata bersama menjelajahi Bajawa dan NTT.',
    rating: 5.0,
    reviewsCount: 195,
    specifications: [
      { label: 'Kapasitas', value: 'Menyesuaikan Tipe Kendaraan' },
      { label: 'Perjalanan', value: 'Rombongan, Komunitas, Wisata Bersama' },
      { label: 'Fasilitas', value: 'Full AC Ducting & Reclining Seat' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Bpk. Hendra Wijaya',
    roleEN: 'Family Trip Client - Jakarta',
    roleID: 'Wisata Keluarga - Jakarta',
    textEN: 'Excellent service from Nituriu Transport Bajawa! The Innova unit was spotless and pickup at Soa Airport was right on time. Our driver was extremely knowledgeable about Kampung Bena and Riung 17 Islands.',
    textID: 'Pelayanan luar biasa dari Nituriu Transport Bajawa! Unit Innova sangat bersih dan penjemputan di Bandara Soa tepat waktu. Driver kami sangat paham rute Kampung Adat Bena dan Riung 17 Pulau.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Innova Reborn',
    carModelID: 'Toyota Innova Reborn',
    dateEN: 'August 2026',
    dateID: 'Agustus 2026'
  },
  {
    id: 'testi-2',
    name: 'Ibu Ratna & Rombongan',
    roleEN: 'Group Tour Client - Surabaya',
    roleID: 'Rombongan Komunitas - Surabaya',
    textEN: 'Renting a Hiace with Nituriu Transport was the best decision for our Flores trip. Very comfortable on mountain roads from Bajawa to Ende and Labuan Bajo!',
    textID: 'Sewa Hiace bersama Nituriu Transport adalah keputusan terbaik untuk tour Flores kami. Sangat nyaman melintasi rute perbukitan dari Bajawa menuju Ende dan Labuan Bajo!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Hiace Commuter',
    carModelID: 'Toyota Hiace Commuter',
    dateEN: 'July 2026',
    dateID: 'Juli 2026'
  },
  {
    id: 'testi-3',
    name: 'dr. Antonius',
    roleEN: 'Private Trip - Bali',
    roleID: 'Perjalanan Pribadi - Bali',
    textEN: 'Very responsive service on WhatsApp. Car condition was top notch for visiting Mengeruda Hot Spring and Mount Inerie. Recommended transport in Ngada Regency!',
    textID: 'Respon via WhatsApp sangat cepat dan ramah. Kondisi mobil Avanza sangat prima untuk wisata Air Panas Mengeruda dan Gunung Inerie. Rekomendasi utama di Kab. Ngada!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Avanza',
    carModelID: 'Toyota Avanza',
    dateEN: 'August 2026',
    dateID: 'Agustus 2026'
  }
];
