import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, MessageCircle, CheckCircle2, Sparkles, MapPin, Car, ShieldCheck, Plane, Building2, Users } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface ServicesProps {
  lang: 'ID' | 'EN';
  onViewAllDestinations?: () => void;
}

export default function Services({ lang, onViewAllDestinations }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'jabar' | 'jateng' | 'jatim' | 'bali'>('all');
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  const handleWhatsAppBooking = (highlightTitle: string, categoryName: string) => {
    const waNumber = '6281236307537';
    const message = isEN
      ? `Hello Nituriu Transport Bajawa, I would like to consult on the tour route / service: ${highlightTitle} (${categoryName}). Please inform availability & price quote. Thank you!`
      : `Halo Nituriu Transport Bajawa, saya ingin berkonsultasi mengenai rute wisata / layanan: ${highlightTitle} (${categoryName}). Mohon informasi ketersediaan & penawaran harga. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const coreServices = [
    {
      icon: Car,
      title: isEN ? 'Car Rental' : 'Rental Mobil',
      desc: isEN ? 'Vehicle rental for personal, business, or travel needs in Bajawa and surrounding areas.' : 'Sewa kendaraan untuk kebutuhan perjalanan pribadi maupun wisata di Bajawa dan sekitarnya.'
    },
    {
      icon: ShieldCheck,
      title: isEN ? 'Rental with Driver' : 'Rental dengan Driver',
      desc: isEN ? 'Enjoy a more comfortable trip with drivers ready to take you to various destinations.' : 'Nikmati perjalanan lebih nyaman bersama driver yang siap mengantar Anda ke berbagai destinasi.'
    },
    {
      icon: Compass,
      title: isEN ? 'Tour Transport' : 'Transportasi Wisata',
      desc: isEN ? 'Transport services for exploring scenic tourist destinations across Bajawa and Flores.' : 'Layanan transportasi untuk menjelajahi destinasi wisata di Bajawa dan Flores.'
    },
    {
      icon: Plane,
      title: isEN ? 'Airport Transfer' : 'Airport Transfer',
      desc: isEN ? 'Pickup & drop-off service to and from Soa Airport (Bajawa).' : 'Layanan antar-jemput dari dan menuju Bandara Soa (Bajawa).'
    },
    {
      icon: Building2,
      title: isEN ? 'Private Trip' : 'Private Trip',
      desc: isEN ? 'Plan your custom itinerary according to your preferred destinations, duration, and needs.' : 'Rencanakan perjalanan sesuai destinasi, durasi, dan kebutuhan Anda.'
    },
    {
      icon: Users,
      title: isEN ? 'Group Transport' : 'Perjalanan Rombongan',
      desc: isEN ? 'Vehicles available for family, community, corporate, or group tour travels.' : 'Tersedia kendaraan untuk keluarga, komunitas, perusahaan, maupun rombongan wisata.'
    }
  ];

  const popularRoutes = [
    'Bajawa → Soa',
    'Bajawa → Aimere',
    'Bajawa → Riung',
    'Bajawa → Mbay',
    'Bajawa → Ende',
    'Bajawa → Moni',
    'Bajawa → Ruteng',
    'Bajawa → Labuan Bajo'
  ];

  const allDestinationHighlights = [
    {
      id: 'bena',
      categoryKey: 'jabar',
      categoryNameEN: 'Cultural Heritage',
      categoryNameID: 'Wisata Budaya',
      titleEN: 'Kampung Adat Bena',
      titleID: 'Kampung Adat Bena',
      subtitleEN: 'Traditional Ngada megalithic village backed by Mount Inerie',
      subtitleID: 'Keunikan rumah adat & kehidupan tradisional Ngada berlatar Gunung Inerie',
      badgeEN: 'Cultural Village',
      badgeID: 'Kampung Adat',
      image: '/dest_bena.jpg',
      rating: 5.0,
      reviews: 210,
      spotsEN: ['Megalithic Stone Structures', 'Traditional House Architecture', 'Handwoven Tenun Ikat Crafts', 'Mount Inerie Backdrop Photo Spot'],
      spotsID: ['Batu Megalitikum & Rumah Adat Ngada', 'KERAJINAN KAIN TENUN IKAT', 'Pemandangan Latar Gunung Inerie', 'Spot Foto Budaya & Tradisi']
    },
    {
      id: 'inerie',
      categoryKey: 'jateng',
      categoryNameEN: 'Volcanic Mountain',
      categoryNameID: 'Wisata Gunung',
      titleEN: 'Gunung Inerie',
      titleID: 'Gunung Inerie',
      subtitleEN: 'Iconic pyramid volcano landscape surrounding Bajawa',
      subtitleID: 'Salah satu ikon alam Flores yang dapat dinikmati dari berbagai titik',
      badgeEN: 'Natural Icon',
      badgeID: 'Ikon Alam',
      image: '/dest_inerie.jpg',
      rating: 5.0,
      reviews: 185,
      spotsEN: ['Pyramid Volcano Panorama', 'Sunrise & Sunset Viewing Points', 'Cool Mountain Atmosphere', 'Hiking & Landscape Photography'],
      spotsID: ['Panorama Gunung Berbentuk Piramida', 'Spot Sunrise & Sunset Bajawa', 'Udara Pegunungan yang Sejuk', 'Fotografi Alam & Lanskap']
    },
    {
      id: 'mengeruda',
      categoryKey: 'jateng',
      categoryNameEN: 'Natural Hot Spring',
      categoryNameID: 'Air Panas Alami',
      titleEN: 'Air Panas Mengeruda',
      titleID: 'Air Panas Mengeruda',
      subtitleEN: 'Natural geothermal hot spring for relaxing soak in Soa',
      subtitleID: 'Tempat yang cocok untuk bersantai dan menikmati suasana alam di Soa',
      badgeEN: 'Geothermal Spring',
      badgeID: 'Air Panas',
      image: '/dest_mengeruda.jpg',
      rating: 4.9,
      reviews: 165,
      spotsEN: ['Natural Warm River Bathing', 'Shaded Tropical Atmosphere', 'Relieving Fatigue After Travels', 'Close to Soa Airport'],
      spotsID: ['Pemandian Air Panas Alami Soa', 'Suasana Pepohonan Rindang', 'Relaksasi Melepas Lelah Perjalanan', 'Berlokasi Dekat Bandara Soa']
    },
    {
      id: 'riung',
      categoryKey: 'jatim',
      categoryNameEN: 'Marine Park',
      categoryNameID: 'Wisata Bahari',
      titleEN: 'Riung 17 Pulau',
      titleID: 'Riung 17 Pulau',
      subtitleEN: 'Exotic white sand beaches, coral reefs & bat island',
      subtitleID: 'Keindahan pantai, pulau-pulau kecil, dan wisata bahari di Riung',
      badgeEN: 'Marine National Park',
      badgeID: 'Taman Bahari',
      image: '/dest_riung.jpg',
      rating: 5.0,
      reviews: 230,
      spotsEN: ['Island Hopping & White Sand Beaches', 'Snorkeling in Crystal Clear Water', 'Flying Fox Colony at Pulau Ontoloe', 'Fresh Grilled Fish Lunch'],
      spotsID: ['Jelajah 17 Pulau Pasir Putih', 'Snorkeling Terumbu Karang Jernih', 'Melihat Koloni Kelelawar Pulau Ontoloe', 'Santap Ikan Bakar Segar']
    },
    {
      id: 'wawomudha',
      categoryKey: 'bali',
      categoryNameEN: 'Crater Lake',
      categoryNameID: 'Danau Kawah',
      titleEN: 'Danau Wawomudha',
      titleID: 'Danau Wawomudha',
      subtitleEN: 'Picturesque crater lake with tranquil hill surroundings',
      subtitleID: 'Destinasi alam dengan panorama perbukitan dan suasana yang tenang',
      badgeEN: 'Crater Lake',
      badgeID: 'Danau Kawah',
      image: '/dest_wawomudha.jpg',
      rating: 4.8,
      reviews: 140,
      spotsEN: ['Reddish Crater Lake View', 'Pine Forest Trekking', 'Quiet & Fresh Air', 'Photogenic Hill Lookout'],
      spotsID: ['Pemandangan Danau Kawah Khas', 'Trekking Ringan Hutan Pinus', 'Udara Bersih & Suasana Tenang', 'Spot Foto Panorama Perbukitan']
    },
    {
      id: 'wogo',
      categoryKey: 'jabar',
      categoryNameEN: 'Cultural Village',
      categoryNameID: 'Kampung Adat',
      titleEN: 'Kampung Adat Wogo',
      titleID: 'Kampung Adat Wogo',
      subtitleEN: 'Get closer to traditional Ngada culture and megalithic heritage',
      subtitleID: 'Tempat untuk mengenal lebih dekat budaya dan tradisi masyarakat Ngada',
      badgeEN: 'Culture Heritage',
      badgeID: 'Warisan Budaya',
      image: '/dest_wogo.jpg',
      rating: 4.9,
      reviews: 150,
      spotsEN: ['Traditional Ngadhu & Bhaga Structures', 'Megalithic Stone Formations', 'Authentic Ngada Ceremonies', 'Friendly Local Community'],
      spotsID: ['Rumah Adat Ngadhu & Bhaga', 'Susunan Batu Megalitikum', 'Tradisi & Budaya Ngada yang Otentik', 'Ramah Tamah Warga Adat']
    }
  ];

  const filteredHighlights = activeCategory === 'all'
    ? allDestinationHighlights
    : allDestinationHighlights.filter(item => item.categoryKey === activeCategory);

  return (
    <section id="destinations" className="py-20 bg-slate-100 text-[#0d1b37] relative overflow-hidden text-left border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-display font-black text-xs uppercase tracking-widest border border-red-200 shadow-sm mb-1">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>{t.dest_tag}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#0d1b37] tracking-tight leading-tight uppercase">
            {isEN ? 'Services & Flores Destinations' : 'Layanan & Wisata Flores'}
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t.dest_desc}
          </p>
        </div>

        {/* 6 CORE SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-lg text-[#0d1b37] uppercase">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* POPULAR ROUTES BANNER */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-slate-700/60 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                {isEN ? 'Area & Travel Routes' : 'Area & Rute Perjalanan'}
              </h3>
              <p className="font-sans text-xs text-slate-300 font-medium">
                {isEN ? 'Nituriu Transport serves trips around Bajawa, Ngada Regency, and across Flores, NTT' : 'Nituriu Transport melayani perjalanan di sekitar Bajawa, Kabupaten Ngada, dan berbagai wilayah di Flores, NTT.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
            {popularRoutes.map((route, rIdx) => (
              <div key={rIdx} className="bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 py-2.5 rounded-xl text-center font-sans text-xs font-bold text-slate-100 transition-all">
                📍 {route}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 italic text-center pt-2">
            *Custom route juga tersedia sesuai kebutuhan perjalanan Anda.
          </p>
        </div>

        {/* TOUR DESTINATIONS CARDS */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-display font-black text-2xl text-[#0d1b37] uppercase">
              {isEN ? 'Bajawa & Flores Destinations' : 'Wisata Bajawa & Flores'}
            </h3>
            <p className="font-sans text-xs text-slate-600 font-medium">
              {isEN ? 'Kampung Bena, Gunung Inerie, Air Panas Mengeruda, Riung 17 Pulau, Danau Wawomudha & Kampung Wogo' : 'Kampung Adat Bena, Gunung Inerie, Air Panas Mengeruda, Riung 17 Pulau, Danau Wawomudha & Kampung Adat Wogo'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHighlights.map((dest) => (
              <div key={dest.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col justify-between">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.titleID}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white font-display font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                      {dest.badgeID}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-xl text-[#0d1b37] uppercase">
                      {isEN ? dest.titleEN : dest.titleID}
                    </h4>
                    <p className="font-sans text-xs text-slate-600 font-medium">
                      {isEN ? dest.subtitleEN : dest.subtitleID}
                    </p>
                    <div className="space-y-1.5 pt-3">
                      {(isEN ? dest.spotsEN : dest.spotsID).map((spot, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{spot}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppBooking(dest.titleID, dest.badgeID)}
                    className="w-full mt-4 py-3 bg-[#0d1b37] hover:bg-red-600 text-white font-display font-black text-xs uppercase tracking-wider rounded-2xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>{isEN ? 'Consult Trip via WA' : 'Konsultasi Rute via WA'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
