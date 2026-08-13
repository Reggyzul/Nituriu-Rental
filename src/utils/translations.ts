export interface TranslationSchema {
  // SEO & Head Metadata
  seo_title: string;
  seo_description: string;

  // Navigation
  nav_home: string;
  nav_about: string;
  nav_destinations: string;
  nav_rentals: string;
  nav_packages: string;
  nav_gallery: string;
  nav_contact: string;
  nav_book_btn: string;

  // Top Bar
  topbar_address: string;
  topbar_whatsapp: string;
  topbar_service: string;

  // Hero Section
  hero_explore: string;
  hero_title_1: string;
  hero_motto: string;
  hero_subtitle: string;
  hero_cta_wa: string;
  hero_cta_cars: string;
  search_dest_cat: string;
  search_travel_date: string;
  search_date_placeholder: string;
  search_btn: string;

  // Destinations Section & Page
  dest_tag: string;
  dest_title: string;
  dest_desc: string;
  dest_select_cat: string;
  dest_cat_subtitle: string;
  dest_cat_all: string;
  dest_cat_jabar: string;
  dest_cat_jateng: string;
  dest_cat_jatim: string;
  dest_cat_bali: string;
  dest_spots_label: string;
  dest_wa_consult: string;
  dest_view_all: string;
  dest_breadcrumb_home: string;
  dest_breadcrumb_page: string;

  // Package Tour Page
  pkg_tag: string;
  pkg_title: string;
  pkg_subtitle: string;
  pkg_filter_heading: string;
  pkg_filter_all: string;
  pkg_filter_domestik: string;
  pkg_filter_internasional: string;
  pkg_route_label: string;
  pkg_starting_from: string;
  pkg_per_person: string;
  pkg_detail_btn: string;
  pkg_modal_duration: string;
  pkg_modal_tier_title: string;
  pkg_modal_hotel: string;
  pkg_modal_notes: string;
  pkg_modal_highlights: string;
  pkg_modal_includes: string;
  pkg_modal_excludes: string;
  pkg_modal_selected: string;
  pkg_modal_wa_btn: string;

  // About Section & Page
  about_tag: string;
  about_title_1: string;
  about_title_2: string;
  about_desc_1: string;
  about_desc_2: string;
  about_read_more: string;
  about_read_less: string;
  about_badge: string;
  about_card_tag: string;
  about_card_sub: string;
  about_card_rating_label: string;

  // Vision
  vision_title: string;
  vision_1: string;
  vision_2: string;
  vision_3: string;

  // Mission
  mission_title: string;
  mission_1: string;
  mission_2: string;
  mission_3: string;
  mission_4: string;

  // Strengths
  strength_clean_title: string;
  strength_clean_desc: string;
  strength_driver_title: string;
  strength_driver_desc: string;
  strength_price_title: string;
  strength_price_desc: string;
  strength_time_title: string;
  strength_time_desc: string;

  // Cars Section
  cars_tag: string;
  cars_title: string;
  cars_desc: string;
  cars_seats: string;
  cars_transmission_auto: string;
  cars_transmission_manual: string;
  cars_included_label: string;
  cars_driver_friendly: string;
  cars_book_btn: string;

  // Steps
  steps_tag: string;
  steps_title: string;
  steps_desc: string;
  step_1_title: string;
  step_1_desc: string;
  step_2_title: string;
  step_2_desc: string;
  step_3_title: string;
  step_3_desc: string;

  // Testimonials
  testi_tag: string;
  testi_title: string;
  testi_desc: string;
  testi_rating_label: string;
  testi_rented_model: string;
  testi_btn_next: string;
  testi_btn_prev: string;

  // Booking Modal
  modal_title: string;
  modal_desc: string;
  modal_summary_base: string;
  modal_summary_total_days: string;
  modal_field_name: string;
  modal_field_phone: string;
  modal_field_date: string;
  modal_field_time: string;
  modal_field_duration: string;
  modal_field_extra_allin: string;
  modal_field_extra_detail: string;
  modal_field_address: string;
  modal_field_notes: string;
  modal_btn_confirm: string;
  modal_err_name: string;
  modal_err_phone: string;
  modal_err_address: string;

  // Footer Section
  footer_callout_badge: string;
  footer_callout_title: string;
  footer_callout_desc: string;
  footer_callout_wa_btn: string;
  footer_col1_desc: string;
  footer_motto_label: string;
  footer_motto_text: string;
  footer_address_title: string;
  footer_address_text: string;
  footer_wa_title: string;
  footer_quick_nav_title: string;
}

export const TRANSLATIONS: Record<'EN' | 'ID', TranslationSchema> = {
  EN: {
    // SEO & Head Metadata
    seo_title: "NITURIU TRANSPORT BAJAWA | Car Rental & Tour Transport Flores",
    seo_description: "Nituriu Transport Bajawa - Car rental and tour transport services in Bajawa, Ngada Regency, Soa Airport, Bena Traditional Village, Riung 17 Islands, Ende, Ruteng, and Labuan Bajo, Flores, NTT.",

    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_destinations: "Routes & Services",
    nav_rentals: "Car Fleet",
    nav_packages: "Tour Highlights",
    nav_gallery: "Gallery",
    nav_contact: "Contact & Location",
    nav_book_btn: "BOOK NOW",

    // Top Bar
    topbar_address: "📍 Kab. Ngada, Bajawa, Flores, NTT",
    topbar_whatsapp: "WA: 0812-3630-7537",
    topbar_service: "Your Travel Partner Exploring Bajawa & Flores",

    // Hero Section
    hero_explore: "Explore Bajawa & Flores Comfortably & Safely",
    hero_title_1: "NITURIU TRANSPORT BAJAWA",
    hero_motto: "RENTAL MOBIL & TRANSPORTASI WISATA FLORES",
    hero_subtitle: "Nituriu Transport Bajawa provides car rental and tour transport services to accompany your journey in Bajawa, Ngada Regency, and top destinations across Flores, NTT.",
    hero_cta_wa: "Contact via WhatsApp",
    hero_cta_cars: "Explore Car Fleet",
    search_dest_cat: "Select Route / Destination",
    search_travel_date: "Planned Travel Date",
    search_date_placeholder: "When is your trip planned?",
    search_btn: "CONSULT TRIP",

    // Destinations Section & Page
    dest_tag: "AREA & POPULAR ROUTES",
    dest_title: "Explore Bajawa & Flores, NTT",
    dest_desc: "Serving popular routes from Bajawa to Soa, Aimere, Riung, Mbay, Ende, Moni, Ruteng, Labuan Bajo, and custom routes.",
    dest_select_cat: "SELECT TOUR DESTINATION",
    dest_cat_subtitle: "Explore Exotic Culture & Nature in Flores",
    dest_cat_all: "All Destinations",
    dest_cat_jabar: "Bena & Wogo Traditional Villages",
    dest_cat_jateng: "Mount Inerie & Hot Springs",
    dest_cat_jatim: "Riung 17 Islands Marine Park",
    dest_cat_bali: "Lake Wawomudha & Flores Trip",
    dest_spots_label: "Popular Routes:",
    dest_wa_consult: "Consult Route via WA",
    dest_view_all: "View All Routes",
    dest_breadcrumb_home: "HOME",
    dest_breadcrumb_page: "AREA & ROUTES",

    // Package Tour Page
    pkg_tag: "TOP TOUR HIGHLIGHTS",
    pkg_title: "BAJAWA & FLORES DESTINATIONS",
    pkg_subtitle: "Explore Bena Traditional Village, Mount Inerie, Mengeruda Hot Spring, Riung 17 Islands, and Lake Wawomudha.",
    pkg_filter_heading: "SELECT DESTINATION CATEGORY",
    pkg_filter_all: "All Highlights",
    pkg_filter_domestik: "Bajawa Culture & Volcanoes",
    pkg_filter_internasional: "Flores Marine & Overland",
    pkg_route_label: "Tour Route",
    pkg_starting_from: "Starting From",
    pkg_per_person: "/ trip",
    pkg_detail_btn: "View Details",
    pkg_modal_duration: "Duration",
    pkg_modal_tier_title: "VEHICLE & AMENITIES OPTIONS",
    pkg_modal_hotel: "Accommodation",
    pkg_modal_notes: "Notes",
    pkg_modal_highlights: "Highlights & Destinations",
    pkg_modal_includes: "Includes",
    pkg_modal_excludes: "Excludes",
    pkg_modal_selected: "Selected Option",
    pkg_modal_wa_btn: "Book via WhatsApp",

    // About Section
    about_tag: "ABOUT NITURIU TRANSPORT BAJAWA",
    about_title_1: "NITURIU TRANSPORT BAJAWA",
    about_title_2: "Rental Mobil & Transportasi Wisata Flores",
    about_desc_1: "Nituriu Transport Bajawa provides car rental and tour transport services to accompany your trip in Bajawa, Ngada Regency, and exciting destinations across Flores, NTT.",
    about_desc_2: "With choices of Toyota Avanza, Toyota Innova, and Toyota Hiace, we cater to personal, family, corporate, and group trips with professional drivers.",
    about_read_more: "Read More",
    about_read_less: "Close Details",
    about_badge: "BASED IN BAJAWA, NGADA REGENCY, FLORES",
    about_card_tag: "NITURIU TRANSPORT BAJAWA",
    about_card_sub: "CAR RENTAL & FLORES TOUR",
    about_card_rating_label: "CUSTOMER SATISFACTION",

    // Vision
    vision_title: "Why Choose Nituriu Transport?",
    vision_1: "Based in Bajawa, Ngada Regency for convenient pick-ups and exploration in Flores.",
    vision_2: "Pristine fleet of Toyota Avanza, Toyota Innova, and Toyota Hiace.",
    vision_3: "Friendly local drivers experienced with Flores mountain routes.",

    // Mission
    mission_title: "Our Core Services",
    mission_1: "Car Rental & Rental with Driver in Bajawa & surrounding areas.",
    mission_2: "Airport Transfer to & from Soa Airport (Bajawa).",
    mission_3: "Tour Transport for exploring Bajawa and Flores.",
    mission_4: "Private Trip & Group Transport (family, corporate, community).",

    // Strengths
    strength_clean_title: "Fleet Choices",
    strength_clean_desc: "Toyota Avanza, Toyota Innova, and Toyota Hiace for all your travel needs.",
    strength_driver_title: "Driver Provided",
    strength_driver_desc: "Enjoy a comfortable trip with drivers ready to assist your journey.",
    strength_price_title: "Based in Bajawa",
    strength_price_desc: "Located in Kab. Ngada, Bajawa, Flores, NTT. Easy pickup at Soa Airport & hotels.",
    strength_time_title: "Flexible Routes",
    strength_time_desc: "Set your own destinations and custom overland routes across Flores.",

    // Cars Section
    cars_tag: "FLEET CATALOG",
    cars_title: "Nituriu Transport Vehicle Options",
    cars_desc: "Enjoy your journey with comfortable vehicles tailored to your needs: Toyota Avanza, Toyota Innova, and Toyota Hiace.",
    cars_seats: "Seats",
    cars_transmission_auto: "Automatic",
    cars_transmission_manual: "Manual",
    cars_included_label: "Amenities & Features:",
    cars_driver_friendly: "Professional Driver Available",
    cars_book_btn: "Consult & Rent via WA",

    // Steps
    steps_tag: "EASY BOOKING PROCESS",
    steps_title: "3 Easy Booking Steps",
    steps_desc: "Fast, friendly, and flexible booking with Nituriu Transport Bajawa.",
    step_1_title: "Choose Your Vehicle",
    step_1_desc: "Select Toyota Avanza, Toyota Innova, or Toyota Hiace.",
    step_2_title: "Consult Route & Dates",
    step_2_desc: "Contact us via WhatsApp (0812-3630-7537) for Soa Airport pickup or tour routes.",
    step_3_title: "Enjoy Your Trip",
    step_3_desc: "Our friendly driver will pick you up on time at Soa Airport or your hotel.",

    // Testimonials
    testi_tag: "CUSTOMER REVIEWS",
    testi_title: "Experience With Nituriu Transport Bajawa",
    testi_desc: "Your travel comfort across Flores is our top priority.",
    testi_rating_label: "SATISFACTION RATING",
    testi_rented_model: "Vehicle / Service:",
    testi_btn_next: "Next",
    testi_btn_prev: "Previous",

    // Booking Modal
    modal_title: "RESERVATION & CONSULTATION FORM",
    modal_desc: "Fill in your details to connect directly with Nituriu Transport Bajawa WhatsApp.",
    modal_summary_base: "Vehicle / Service",
    modal_summary_total_days: "Rental Duration",
    modal_field_name: "Customer Name",
    modal_field_phone: "WhatsApp Number",
    modal_field_date: "Departure Date",
    modal_field_time: "Pickup Time",
    modal_field_duration: "Duration (Days)",
    modal_field_extra_allin: "Rental with Driver & Fuel",
    modal_field_extra_detail: "Includes driver & estimated fuel for your trip",
    modal_field_address: "Pickup Location (Soa Airport / Hotel in Bajawa)",
    modal_field_notes: "Group Count & Destination Notes",
    modal_btn_confirm: "Send via WhatsApp ➔",
    modal_err_name: "Customer name is required.",
    modal_err_phone: "WhatsApp number is required.",
    modal_err_address: "Pickup location is required.",

    // Footer Section
    footer_callout_badge: "TRIP CONSULTATION 24/7",
    footer_callout_title: "Plan Your Trip to Bajawa & Flores With Us",
    footer_callout_desc: "Car rental, Soa Airport transfer, to Flores tour transport — all with Nituriu Transport Bajawa.",
    footer_callout_wa_btn: "WA: 0812-3630-7537",
    footer_col1_desc: "NITURIU TRANSPORT BAJAWA — Rental Mobil & Transportasi Wisata Flores. Teman Perjalanan Anda Menjelajahi Bajawa & Flores.",
    footer_motto_label: "COMPANY MOTTO",
    footer_motto_text: "\"Teman Perjalanan Anda Menjelajahi Bajawa & Flores\"",
    footer_address_title: "Official Address:",
    footer_address_text: "Kab. Ngada, Bajawa, Flores, NTT",
    footer_wa_title: "WhatsApp Contact:",
    footer_quick_nav_title: "Quick Navigation"
  },
  ID: {
    // SEO & Head Metadata
    seo_title: "NITURIU TRANSPORT BAJAWA | Rental Mobil & Transportasi Wisata Flores",
    seo_description: "Nituriu Transport Bajawa menyediakan layanan rental mobil Avanza, Innova, Hiace, rental dengan driver, airport transfer Bandara Soa, dan transportasi wisata Kampung Bena, Riung 17 Pulau, Ende, Ruteng, hingga Labuan Bajo.",

    // Navigation
    nav_home: "Beranda",
    nav_about: "Tentang Kami",
    nav_destinations: "Area & Rute",
    nav_rentals: "Pilihan Armada",
    nav_packages: "Wisata Bajawa",
    nav_gallery: "Galeri",
    nav_contact: "Kontak & Alamat",
    nav_book_btn: "HUBUNGI KAMI",

    // Top Bar
    topbar_address: "📍 Kab. Ngada, Bajawa, Flores, NTT",
    topbar_whatsapp: "WA: 0812-3630-7537",
    topbar_service: "Teman Perjalanan Anda Menjelajahi Bajawa & Flores",

    // Hero Section
    hero_explore: "Teman Perjalanan Anda Menjelajahi Bajawa & Flores",
    hero_title_1: "NITURIU TRANSPORT BAJAWA",
    hero_motto: "RENTAL MOBIL & TRANSPORTASI WISATA FLORES",
    hero_subtitle: "Nituriu Transport Bajawa menyediakan layanan rental mobil dan transportasi wisata untuk menemani perjalanan Anda di Bajawa, Kabupaten Ngada, dan berbagai destinasi menarik di Flores, NTT.",
    hero_cta_wa: "Hubungi via WhatsApp",
    hero_cta_cars: "Pilihan Armada Mobil",
    search_dest_cat: "Pilih Rute Wisata Bajawa & Flores",
    search_travel_date: "Tanggal Rencana Perjalanan",
    search_date_placeholder: "Kapan rencana perjalanan Anda?",
    search_btn: "KONSULTASI PERJALANAN",

    // Destinations Section & Page
    dest_tag: "AREA & RUTE POPULER",
    dest_title: "Eksplorasi Bajawa & Flores, NTT",
    dest_desc: "Melayani rute populer dari Bajawa menuju Soa, Aimere, Riung, Mbay, Ende, Moni, Ruteng, hingga Labuan Bajo.",
    dest_select_cat: "PILIH DESTINASI WISATA",
    dest_cat_subtitle: "Eksplorasi Keunikan Budaya & Alam Flores",
    dest_cat_all: "Semua Destinasi",
    dest_cat_jabar: "Kampung Adat Bena & Wogo",
    dest_cat_jateng: "Gunung Inerie & Air Panas",
    dest_cat_jatim: "Riung 17 Pulau & Bahari",
    dest_cat_bali: "Danau Wawomudha & Trip Flores",
    dest_spots_label: "Rute Populer:",
    dest_wa_consult: "Konsultasi Rute via WA",
    dest_view_all: "Lihat Semua Rute",
    dest_breadcrumb_home: "BERANDA",
    dest_breadcrumb_page: "AREA & RUTE",

    // Package Tour Page
    pkg_tag: "DESTINASI WISATA UNGGULAN",
    pkg_title: "WISATA BAJAWA & FLORES",
    pkg_subtitle: "Eksplorasi Kampung Adat Bena, Gunung Inerie, Air Panas Mengeruda, Riung 17 Pulau, Danau Wawomudha, dan Kampung Adat Wogo.",
    pkg_filter_heading: "PILIH KATEGORI WISATA",
    pkg_filter_all: "Semua Destinasi Wisata",
    pkg_filter_domestik: "Wisata Budaya & Gunung Bajawa",
    pkg_filter_internasional: "Wisata Bahari & Overland Flores",
    pkg_route_label: "Rute Perjalanan",
    pkg_starting_from: "Mulai Dari",
    pkg_per_person: "/ trip",
    pkg_detail_btn: "Detail Destinasi",
    pkg_modal_duration: "Durasi Perjalanan",
    pkg_modal_tier_title: "PILIHAN ARMADA & FASILITAS",
    pkg_modal_hotel: "Akomodasi",
    pkg_modal_notes: "Catatan",
    pkg_modal_highlights: "Highlight Destinasi",
    pkg_modal_includes: "Termasuk (Include)",
    pkg_modal_excludes: "Tidak Termasuk (Exclude)",
    pkg_modal_selected: "Pilihan Terpilih",
    pkg_modal_wa_btn: "Pesan via WhatsApp",

    // About Section
    about_tag: "PROFIL NITURIU TRANSPORT BAJAWA",
    about_title_1: "NITURIU TRANSPORT BAJAWA",
    about_title_2: "Rental Mobil & Transportasi Wisata Flores",
    about_desc_1: "Nituriu Transport Bajawa menyediakan layanan rental mobil dan transportasi wisata untuk menemani perjalanan Anda di Bajawa, Kabupaten Ngada, dan berbagai destinasi menarik di Flores, NTT.",
    about_desc_2: "Dengan pilihan kendaraan Avanza, Innova, dan Toyota Hiace, kami melayani perjalanan pribadi, keluarga, rombongan, hingga kebutuhan wisata bersama driver berpengalaman.",
    about_read_more: "Lihat Selengkapnya",
    about_read_less: "Tutup Detail",
    about_badge: "BERBASIS DI BAJAWA, KAB. NGADA, FLORES",
    about_card_tag: "NITURIU TRANSPORT BAJAWA",
    about_card_sub: "RENTAL MOBIL & WISATA FLORES",
    about_card_rating_label: "KEPUASAN PELANGGAN",

    // Vision
    vision_title: "Kenapa Nituriu Transport Bajawa?",
    vision_1: "Berbasis di Bajawa, Kabupaten Ngada untuk memudahkan wisatawan yang ingin menjelajahi Bajawa dan wilayah Flores.",
    vision_2: "Pilihan armada praktis & nyaman: Toyota Avanza, Toyota Innova, dan Toyota Hiace.",
    vision_3: "Driver siap membantu perjalanan Anda agar lebih nyaman dan aman.",

    // Mission
    mission_title: "Layanan Utama Kami",
    mission_1: "Rental Mobil & Rental dengan Driver untuk perjalanan pribadi maupun wisata di Bajawa.",
    mission_2: "Airport Transfer antar-jemput dari dan menuju Bandara Soa (Bajawa).",
    mission_3: "Transportasi Wisata & Private Trip menjelajahi Bajawa dan Flores.",
    mission_4: "Layanan Rombongan untuk keluarga, komunitas, perusahaan, maupun group tour.",

    // Strengths
    strength_clean_title: "Pilihan Kendaraan",
    strength_clean_desc: "Tersedia Avanza, Innova, dan Toyota Hiace untuk berbagai kebutuhan perjalanan.",
    strength_driver_title: "Driver Berpengalaman",
    strength_driver_desc: "Perjalanan lebih nyaman dengan driver yang siap membantu perjalanan Anda.",
    strength_price_title: "Berbasis di Bajawa",
    strength_price_desc: "Alamat: Kab. Ngada, Bajawa, Flores, NTT. Memudahkan penjemputan Bandara Soa & Hotel.",
    strength_time_title: "Rute Fleksibel",
    strength_time_desc: "Bisa menentukan destinasi dan rute custom sesuai kebutuhan perjalanan Anda.",

    // Cars Section
    cars_tag: "PILIHAN ARMADA MOBIL",
    cars_title: "Armada Nituriu Transport Bajawa",
    cars_desc: "Nikmati perjalanan dengan kendaraan yang nyaman dan sesuai kebutuhan Anda: Toyota Avanza, Toyota Innova, dan Toyota Hiace.",
    cars_seats: "Kursi",
    cars_transmission_auto: "Matic",
    cars_transmission_manual: "Manual",
    cars_included_label: "Fasilitas & Layanan:",
    cars_driver_friendly: "Sopir Berpengalaman + BBM",
    cars_book_btn: "Konsultasi & Sewa via WA",

    // Steps
    steps_tag: "CARA PEMESANAN",
    steps_title: "3 Langkah Mudah Pemesanan",
    steps_desc: "Proses reservasi cepat, ramah, dan fleksibel bersama Nituriu Transport Bajawa.",
    step_1_title: "Pilih Kendaraan",
    step_1_desc: "Pilih Toyota Avanza, Toyota Innova, atau Toyota Hiace.",
    step_2_title: "Konsultasi Rute & Jadwal",
    step_2_desc: "Hubungi kami via WhatsApp (0812-3630-7537) untuk antar-jemput Bandara Soa atau rute wisata.",
    step_3_title: "Nikmati Perjalanan",
    step_3_desc: "Driver kami siap menjemput Anda tepat waktu di Bandara Soa atau Hotel.",

    // Testimonials
    testi_tag: "TESTIMONI PELANGGAN",
    testi_title: "Pengalaman Bersama Nituriu Transport Bajawa",
    testi_desc: "Kenyamanan dan kepuasan perjalanan Anda di Flores adalah prioritas utama kami.",
    testi_rating_label: "RATING KEPUASAN",
    testi_rented_model: "Armada / Layanan:",
    testi_btn_next: "Selanjutnya",
    testi_btn_prev: "Sebelumnya",

    // Booking Modal
    modal_title: "FORM RESERVASI MOBIL & TOUR",
    modal_desc: "Isi draf reservasi untuk terhubung langsung dengan WhatsApp Nituriu Transport Bajawa.",
    modal_summary_base: "Kendaraan / Layanan",
    modal_summary_total_days: "Durasi Sewa",
    modal_field_name: "Nama Pemesan",
    modal_field_phone: "Nomor WhatsApp",
    modal_field_date: "Tanggal Keberangkatan",
    modal_field_time: "Jam Penjemputan",
    modal_field_duration: "Durasi (Hari)",
    modal_field_extra_allin: "Sewa Lengkap Sopir & BBM",
    modal_field_extra_detail: "Termasuk pengemudi berpengalaman & estimasi bahan bakar",
    modal_field_address: "Lokasi Penjemputan (Bandara Soa / Hotel di Bajawa)",
    modal_field_notes: "Jumlah Rombongan & Catatan Perjalanan",
    modal_btn_confirm: "Kirim Draf via WhatsApp ➔",
    modal_err_name: "Nama pemesan wajib diisi.",
    modal_err_phone: "Nomor WhatsApp wajib diisi.",
    modal_err_address: "Lokasi penjemputan wajib diisi.",

    // Footer Section
    footer_callout_badge: "KONSULTASI PERJALANAN 24/7",
    footer_callout_title: "Rencanakan Perjalanan Anda Bersama Nituriu Transport Bajawa",
    footer_callout_desc: "Rental mobil, airport transfer Bandara Soa, hingga transportasi wisata Flores.",
    footer_callout_wa_btn: "WA: 0812-3630-7537",
    footer_col1_desc: "NITURIU TRANSPORT BAJAWA — Rental Mobil & Transportasi Wisata Flores. Teman Perjalanan Anda Menjelajahi Bajawa & Flores.",
    footer_motto_label: "SLOGAN PERUSAHAAN",
    footer_motto_text: "\"Teman Perjalanan Anda Menjelajahi Bajawa & Flores\"",
    footer_address_title: "Alamat Lokasi:",
    footer_address_text: "Kab. Ngada, Bajawa, Flores, NTT",
    footer_wa_title: "Kontak WhatsApp:",
    footer_quick_nav_title: "Navigasi Cepat"
  }
};

// AUTOMATED 1:1 KEY VALIDATION
(() => {
  const enKeys = Object.keys(TRANSLATIONS.EN) as Array<keyof TranslationSchema>;
  const idKeys = Object.keys(TRANSLATIONS.ID) as Array<keyof TranslationSchema>;

  const missingInID = enKeys.filter(k => !(k in TRANSLATIONS.ID));
  const missingInEN = idKeys.filter(k => !(k in TRANSLATIONS.ID));

  if (missingInID.length > 0) {
    console.error('CRITICAL I18N ERROR: Missing keys in ID dictionary:', missingInID);
  }
  if (missingInEN.length > 0) {
    console.error('CRITICAL I18N ERROR: Missing keys in EN dictionary:', missingInEN);
  }
})();

export function getTranslation(lang: 'EN' | 'ID', key: keyof TranslationSchema): string {
  const dict = TRANSLATIONS[lang];
  if (!dict || !dict[key]) {
    console.error(`MISSING TRANSLATION KEY: [${lang}] "${key}"`);
    return TRANSLATIONS.EN[key] || key;
  }
  return dict[key];
}
