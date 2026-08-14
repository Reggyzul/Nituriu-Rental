import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, X, MapPin, Users, Globe, Eye, ZoomIn } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GalleryPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function GalleryPage({ lang, onNavigateHome }: GalleryPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<{ image: string; title: string; subtitle: string; location: string } | null>(null);

  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  const galleryItems = [
    {
      id: 1,
      title: isEN ? 'Trekking Mount Inerie Trail' : 'Trekking Jalur Gunung Inerie',
      subtitle: isEN 
        ? 'Challenging path along the grassy ridge toward Mount Inerie peak with wooden stairs and safety ropes.'
        : 'Jalur menantang menyusuri punggungan berumput menuju puncak Gunung Inerie dengan tangga kayu dan tali pengaman.',
      location: isEN ? 'Mount Inerie, Bajawa, Flores, NTT' : 'Gunung Inerie, Bajawa, Flores, NTT',
      image: '/gallery_inerie_trekking.jpg',
      badge: isEN ? 'Adventure' : 'Petualangan'
    },
    {
      id: 2,
      title: isEN ? 'Wae Rebo Traditional Village' : 'Kampung Adat Wae Rebo',
      subtitle: isEN 
        ? 'The legendary village above the clouds featuring 7 cone-shaped Mbaru Niang traditional houses.'
        : 'Keindahan desa adat di atas awan Flores dengan 7 rumah adat Mbaru Niang berbentuk kerucut yang legendaris.',
      location: isEN ? 'Wae Rebo Village, Manggarai, Flores, NTT' : 'Desa Wae Rebo, Manggarai, Flores, NTT',
      image: '/gallery_waerebo_village.jpg',
      badge: isEN ? 'World Heritage' : 'Warisan Dunia'
    },
    {
      id: 3,
      title: isEN ? 'Mount Inerie Pyramid Peak' : 'Puncak Gunung Piramida Inerie',
      subtitle: isEN 
        ? 'The majestic silhouette of Mount Inerie rising like a natural pyramid under the clear blue Flores sky.'
        : 'Pesona megah Gunung Inerie yang menjulang tinggi menyerupai piramida alam di bawah langit biru Flores.',
      location: isEN ? 'Bajawa, Ngada Regency, Flores, NTT' : 'Bajawa, Kabupaten Ngada, Flores, NTT',
      image: '/gallery_inerie_volcano.jpg',
      badge: isEN ? 'Volcano' : 'Gunung Berapi'
    },
    {
      id: 4,
      title: isEN ? 'Group Tour at Bena Village' : 'Wisata Rombongan di Kampung Bena',
      subtitle: isEN 
        ? 'Group of tourists enjoying their historic visit at the megalithic stone steps of Bena traditional village.'
        : 'Momen kebersamaan wisatawan di tangga batu megalitikum perkampungan adat Kampung Bena yang bersejarah.',
      location: isEN ? 'Bena Traditional Village, Bajawa, Flores, NTT' : 'Kampung Adat Bena, Bajawa, Flores, NTT',
      image: '/gallery_tourists_bena_group.jpg',
      badge: isEN ? 'Local Experience' : 'Kunjungan Wisata'
    },
    {
      id: 5,
      title: isEN ? 'Exploring Flores with Nituriu Transport' : 'Trip Seru Keliling Flores',
      subtitle: isEN 
        ? 'Fun overland road trip exploring Flores scenery with our reliable transport unit and professional driver.'
        : 'Perjalanan darat yang menyenangkan menggunakan armada andalan dan sopir berpengalaman menjelajah keindahan Flores.',
      location: isEN ? 'Flores Overland Tour Service' : 'Layanan Overland Tour Flores',
      image: '/gallery_tourists_turquoise_car.jpg',
      badge: isEN ? 'Private Tour' : 'Trip Privat'
    },
    {
      id: 6,
      title: isEN ? "Ruteng Pu'u Traditional Village" : "Kampung adat Ruteng Pu'u",
      subtitle: isEN 
        ? "Joyful international tourists wearing traditional Flores wraps during their visit to Ruteng Pu'u Traditional Village."
        : "Kegembiraan wisatawan asing mengenakan pakaian adat khas Flores saat berkunjung ke Kampung Adat Ruteng Pu'u.",
      location: isEN ? "Ruteng Pu'u Traditional Village, Manggarai, Flores, NTT" : "Kampung Adat Ruteng Pu'u, Manggarai, Flores, NTT",
      image: '/gallery_tourists_bena_tenun.jpg',
      badge: isEN ? 'Manggarai Culture' : 'Budaya Manggarai'
    },
    {
      id: 7,
      title: isEN ? 'Wologai Traditional Village Flores' : 'Kampung Adat Wologai Flores',
      subtitle: isEN 
        ? 'Tourist group standing proudly in front of the historic Wologai traditional village sign.'
        : 'Kunjungan rombongan wisatawan di depan ikon gerbang masuk desa adat bersejarah Wologai.',
      location: isEN ? 'Wologai Traditional Village, Ende, Flores, NTT' : 'Desa Adat Wologai, Ende, Flores, NTT',
      image: '/gallery_wologai_village.jpg',
      badge: isEN ? 'Cultural Tourism' : 'Wisata Budaya'
    },
    {
      id: 8,
      title: isEN ? 'Premium Tour Transport Service Flores' : 'Layanan Transportasi Terbaik Flores',
      subtitle: isEN 
        ? 'Our satisfied tourists posing next to their comfortable private rental vehicle and friendly local driver.'
        : 'Kebersamaan wisatawan bersama armada mobil dan driver berpengalaman Nituriu Transport.',
      location: isEN ? 'Flores Tour Overland Service' : 'Layanan Overland Tour Flores',
      image: '/gallery_tourists_driver.jpg',
      badge: isEN ? 'Nituriu Fleet' : 'Armada Nituriu'
    },
    {
      id: 9,
      title: isEN ? 'Mount Inerie Peak Climb' : 'Pendakian Puncak Gunung Inerie',
      subtitle: isEN 
        ? 'Tourists raising the Indonesian flag at the majestic peak of Mount Inerie.'
        : 'Momen wisatawan membentangkan bendera merah putih di puncak megah Gunung Inerie.',
      location: isEN ? 'Mount Inerie, Bajawa, Flores, NTT' : 'Gunung Inerie, Bajawa, Flores, NTT',
      image: '/gallery_mount_inerie_flag.jpg',
      badge: isEN ? 'Adventure' : 'Petualangan'
    },
    {
      id: 10,
      title: isEN ? 'Experiencing Ngada Culture' : 'Mengenal Tenun Ikat Adat Bena',
      subtitle: isEN 
        ? 'Tourists wearing traditional handwoven Tenun Ikat wraps in Kampung Bena.'
        : 'Wisatawan mengenakan balutan kain tenun ikat tradisional khas di Kampung Adat Bena.',
      location: isEN ? 'Bena Traditional Village, Bajawa, Flores, NTT' : 'Kampung Adat Bena, Bajawa, Flores, NTT',
      image: '/gallery_tourists_bena.jpg',
      badge: isEN ? 'Ngada Heritage' : 'Warisan Budaya'
    },
    {
      id: 11,
      title: isEN ? 'Sao Meze - Traditional Ngada House' : 'Sao Meze - Rumah Adat Ngada',
      subtitle: isEN 
        ? 'The towering thatched-roof traditional houses of Ngada tribe representing ancestral spirits.'
        : 'Rumah adat beratap ilalang tinggi yang kokoh, simbol spiritualitas leluhur masyarakat Ngada.',
      location: isEN ? 'Ngada Regency, Bajawa, Flores, NTT' : 'Kabupaten Ngada, Bajawa, Flores, NTT',
      image: '/gallery_bena_house.jpg',
      badge: isEN ? 'Architecture' : 'Arsitektur Adat'
    },
    {
      id: 12,
      title: isEN ? 'Spiderweb Rice Field (Sawah Lingko)' : 'Sawah Jaring Laba-Laba (Lingko)',
      subtitle: isEN 
        ? 'A unique traditional communal land division shaped like a spiderweb.'
        : 'Keunikan pembagian lahan sawah adat suku Manggarai yang menyerupai jaring laba-laba.',
      location: isEN ? 'Flores, East Nusa Tenggara' : 'Flores, Nusa Tenggara Timur',
      image: '/gallery_spiderweb_ricefield.jpg',
      badge: isEN ? 'Agriculture' : 'Sistem Adat'
    },
    {
      id: 13,
      title: isEN ? 'Exploring Indigenous Settlements' : 'Jelajah Perkampungan Tradisional Ngada',
      subtitle: isEN 
        ? 'International tourists learning about Ngada ancestral traditions in the traditional village.'
        : 'Kunjungan wisatawan mancanegara mempelajari tradisi leluhur masyarakat adat Bajawa.',
      location: isEN ? 'Ngada Traditional Village, Bajawa, Flores, NTT' : 'Kampung Adat Ngada, Bajawa, Flores, NTT',
      image: '/gallery_tourists_ngada.jpg',
      badge: isEN ? 'Local Experience' : 'Kunjungan Wisata'
    },
    {
      id: 14,
      title: isEN ? 'Bena Traditional Village' : 'Kampung Adat Bena',
      subtitle: isEN 
        ? 'Exotic megalithic village with traditional houses at the foot of Mount Inerie.'
        : 'Keunikan perkampungan megalitikum di bawah kaki Gunung Inerie dengan tradisi Ngada yang masih sangat kental.',
      location: isEN ? 'Foot of Mount Inerie, Bajawa, Flores, NTT' : 'Kaki Gunung Inerie, Bajawa, Flores, NTT',
      image: '/gallery_bena_village_real.jpg',
      badge: isEN ? 'Ngada Culture' : 'Budaya Ngada'
    },
    {
      id: 15,
      title: isEN ? 'Mount Inerie Peak' : 'Puncak Gunung Inerie',
      subtitle: isEN 
        ? 'The majestic pyramid-shaped volcano, an iconic landmark in Bajawa.'
        : 'Gunung piramida megah ikonik Flores yang menantang dan memukau mata setiap wisatawan di Bajawa.',
      location: 'Bajawa, Kabupaten Ngada, Flores, NTT',
      image: '/gallery_inerie_volcano_real.jpg',
      badge: isEN ? 'Volcano Peak' : 'Puncak Gunung'
    },
    {
      id: 16,
      title: isEN ? 'Mengeruda Hot Springs Soa' : 'Air Panas Mengeruda Soa',
      subtitle: isEN 
        ? 'A natural geothermal hot spring river, perfect for relaxing your body.'
        : 'Sungai air panas alami yang bersumber langsung dari panas bumi untuk merelaksasi tubuh.',
      location: 'Soa, Kabupaten Ngada, Flores, NTT',
      image: '/gallery_mengeruda_soa_real.jpg',
      badge: isEN ? 'Natural Spa' : 'Relaksasi Alami'
    },
    {
      id: 17,
      title: isEN ? 'Riung 17 Islands Marine Park' : 'Taman Wisata Alam 17 Pulau Riung',
      subtitle: isEN 
        ? 'Exotic cluster of small islands featuring pristine white sands and snorkeling spots.'
        : 'Gugusan pulau eksotis dengan pasir putih halus, terumbu karang menawan, dan koloni kelelawar raksasa.',
      location: 'Riung, Kabupaten Ngada, Flores, NTT',
      image: '/dest_likupang.avif',
      badge: isEN ? 'Marine Park' : 'Wisata Bahari'
    },
    {
      id: 18,
      title: isEN ? 'Wolobobo Hill (Above the Clouds)' : 'Bukit Wolobobo (Negeri di Atas Awan)',
      subtitle: isEN 
        ? 'The perfect vantage point to witness the morning mist and Mount Inerie.'
        : 'Spot menikmati keindahan kabut pagi dan panorama Gunung Inerie berselimut awan putih.',
      location: 'Bajawa, Kabupaten Ngada, Flores, NTT',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
      badge: isEN ? 'Mountain View' : 'Negeri di Atas Awan'
    },
    {
      id: 19,
      title: isEN ? 'Danau Wawomudha Crater Lake' : 'Danau Kawah Wawomudha',
      subtitle: isEN 
        ? 'A mini volcanic crater lake with reddish water, surrounded by pine forests.'
        : 'Danau kawah vulkanis mini dengan air kemerahan yang dikelilingi hutan pinus pegunungan Bajawa.',
      location: 'Bajawa, Kabupaten Ngada, Flores, NTT',
      image: '/dest_tomohon.avif',
      badge: isEN ? 'Crater Lake' : 'Danau Vulkanik'
    },
    {
      id: 20,
      title: isEN ? 'Wogo Megalithic Traditional Village' : 'Kampung Adat Megalitikum Wogo',
      subtitle: isEN 
        ? 'Historic megalithic structures and traditional Ngada carvings.'
        : 'Pemukiman adat alternatif Ngada dengan susunan batu megalitik bersejarah dan tiang adat Ngadhu-Bhaga.',
      location: 'Wogo, Kabupaten Ngada, Flores, NTT',
      image: '/gallery_wogo_village_real.jpg',
      badge: isEN ? 'Cultural Heritage' : 'Cagar Budaya'
    }
  ];

  return (
    <div className="bg-slate-50 text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER (Bayu Buana Style Header with Real Tour Photo Background) */}
      <div className="relative w-full h-[250px] sm:h-[320px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/dest_bunaken.avif')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/95" />

        <div className="relative z-10 text-center space-y-3 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/90 text-white font-extrabold text-[11px] uppercase tracking-widest mb-1 shadow-lg"
          >
            <Camera className="w-4 h-4 text-red-300" />
            <span>{isEN ? 'GALLERY OF TRAVEL DOCUMENTATION' : 'GALERI DOKUMENTASI PERJALANAN'}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase drop-shadow-lg"
          >
            {isEN ? 'Destinations & Moments Gallery' : 'Galeri Destinasi & Momen Wisata'}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest"
          >
            <span onClick={onNavigateHome} className="hover:text-red-400 cursor-pointer transition-colors">HOME</span> / {isEN ? 'GALLERY DOKUMENTASI' : 'GALERI DOKUMENTASI'}
          </motion.p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Subtitle Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            {isEN ? 'NTT Bajawa Travel & Tour Documentation' : 'Dokumentasi Perjalanan & Wisata NTT Bajawa'}
          </h2>
          <div className="w-20 h-1 bg-[#dc2626] mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {isEN 
              ? 'Collection of beautiful moments and exotic destinations in Bajawa, Ngada Regency, and across Flores, East Nusa Tenggara (NTT) with Nituriu Transport.' 
              : 'Kumpulan dokumentasi momen indah dan destinasi eksotis di Bajawa, Kabupaten Ngada, serta wilayah Flores, Nusa Tenggara Timur (NTT) bersama Nituriu Transport.'}
          </p>
        </div>

        {/* Gallery Grid: Modern Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              key={item.id}
              onClick={() => setSelectedPhoto({ image: item.image, title: item.title, subtitle: item.subtitle, location: item.location })}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-slate-950 border border-slate-200/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Badge Tag */}
              <div className="absolute top-3.5 left-3.5 bg-[#dc2626] text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md z-10">
                {item.badge}
              </div>

              {/* Zoom Icon Floater */}
              <div className="absolute top-3.5 right-3.5 bg-white/90 p-2 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10">
                <ZoomIn className="w-4 h-4 text-[#dc2626]" />
              </div>

              {/* Card Footer Content */}
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-1.5 z-10">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-red-300">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-red-400" />
                  <span className="truncate">{item.location}</span>
                </div>
                
                <h3 className="font-display font-black text-lg text-white leading-tight group-hover:text-red-300 transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-slate-300 font-medium line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Zoom */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-left"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-slate-700 shadow-md"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                />
              </div>

              <div className="p-6 bg-slate-900 space-y-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-red-400">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{selectedPhoto.location}</span>
                </div>
                <h3 className="font-display font-black text-xl text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-medium">
                  {selectedPhoto.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}


