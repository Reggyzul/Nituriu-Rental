import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, MessageCircle, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface DestinationHighlightsPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function DestinationHighlightsPage({ lang, onNavigateHome }: DestinationHighlightsPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'jabar' | 'jateng' | 'jatim' | 'bali'>('all');
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  const handleWhatsAppBooking = (highlightTitle: string, categoryName: string) => {
    const waNumber = '6281236307537';
    const message = isEN
      ? `Hello Nituriu Transport Bajawa, I would like to consult on the destination route: ${highlightTitle} (${categoryName}). Please inform schedule, amenities & best price quote. Thank you!`
      : `Halo Nituriu Transport Bajawa, saya ingin berkonsultasi mengenai rute destinasi: ${highlightTitle} (${categoryName}). Mohon informasi jadwal, fasilitas & penawaran harga terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const allDestinationHighlights = [
    // 1. KAMPUNG ADAT BENA & WOGO
    {
      id: 'bena-wogo',
      categoryKey: 'jabar',
      categoryNameEN: 'Cultural Villages',
      categoryNameID: 'Wisata Budaya',
      titleEN: 'Kampung Adat Bena & Wogo',
      titleID: 'Kampung Adat Bena & Wogo',
      subtitleEN: 'Megalithic Stone Structures & Traditional Ngada Architecture',
      subtitleID: 'Rumah Adat Ngada & Warisan Batu Megalitikum',
      badgeEN: 'Cultural Heritage',
      badgeID: 'Kampung Adat',
      image: '/dest_bunaken.avif',
      rating: 5.0,
      reviews: 210,
      spotsEN: ['Kampung Adat Bena at Mount Inerie foot', 'Megalithic Stone Formations & Ngadhu-Bhaga', 'Kampung Adat Wogo Traditional Life', 'Handwoven Tenun Ikat Crafts'],
      spotsID: ['Kampung Adat Bena Kaki Gunung Inerie', 'Susunan Batu Megalitikum & Ngadhu-Bhaga', 'Kehidupan Tradisional Kampung Adat Wogo', 'Kerajinan Tenun Ikat Khas Ngada']
    },

    // 2. GUNUNG INERIE & AIR PANAS MENGERUDA
    {
      id: 'inerie-mengeruda',
      categoryKey: 'jateng',
      categoryNameEN: 'Volcano & Hot Springs',
      categoryNameID: 'Gunung & Air Panas',
      titleEN: 'Mount Inerie & Mengeruda Hot Spring',
      titleID: 'Gunung Inerie & Air Panas Mengeruda',
      subtitleEN: 'Iconic Pyramid Volcano Landscape & Geothermal Soa',
      subtitleID: 'Gunung Piramida & Pemandian Air Panas Soa',
      badgeEN: 'Volcano & Geothermal',
      badgeID: 'Gunung & Air Panas',
      image: '/dest_tomohon.avif',
      rating: 5.0,
      reviews: 190,
      spotsEN: ['Mount Inerie Pyramid Volcano Viewpoint', 'Mengeruda Natural Warm River Soak', 'Cool Mountain Atmosphere in Bajawa', 'Close to Soa Airport'],
      spotsID: ['Spot Panorama Gunung Piramida Inerie', 'Berendam Air Panas Alami Mengeruda Soa', 'Udara Pegunungan Sejuk Bajawa', 'Dekat dengan Akses Bandara Soa']
    },

    // 3. RIUNG 17 PULAU BAHARI
    {
      id: 'riung-17-pulau',
      categoryKey: 'jatim',
      categoryNameEN: 'Marine National Park',
      categoryNameID: 'Wisata Bahari',
      titleEN: 'Riung 17 Islands Marine Park',
      titleID: 'Riung 17 Pulau',
      subtitleEN: 'Island Hopping, Flying Foxes & White Sand Beaches',
      subtitleID: 'Jelajah Pulau, Kelelawar & Pasir Putih',
      badgeEN: 'Marine Park',
      badgeID: 'Wisata Bahari',
      image: '/dest_likupang.avif',
      rating: 5.0,
      reviews: 240,
      spotsEN: ['Island Hopping White Sand Beaches', 'Snorkeling in Crystal Clear Water', 'Pulau Ontoloe Flying Fox Colony', 'Fresh Grilled Fish Coastal Lunch'],
      spotsID: ['Jelajah Pulau Pasir Putih Riung', 'Snorkeling Laut Jernih & Terumbu Karang', 'Melihat Kelelawar Pulau Ontoloe', 'Santap Ikan Bakar Pesisir']
    },

    // 4. DANAU WAWOMUDHA
    {
      id: 'wawomudha-lake',
      categoryKey: 'bali',
      categoryNameEN: 'Crater Lake & Nature',
      categoryNameID: 'Danau & Alam',
      titleEN: 'Danau Wawomudha Bajawa',
      titleID: 'Danau Wawomudha Bajawa',
      subtitleEN: 'Serene Crater Lake surrounded by Pine Hills',
      subtitleID: 'Danau Kawah Eksotis & Perbukitan Pinus',
      badgeEN: 'Nature & Trekking',
      badgeID: 'Danau Kawah',
      image: '/dest_manado_city.avif',
      rating: 4.8,
      reviews: 140,
      spotsEN: ['Reddish Crater Lake Viewpoint', 'Pine Forest Light Trekking', 'Quiet Atmosphere & Fresh Mountain Air', 'Photogenic Hill Lookout'],
      spotsID: ['Panorama Danau Kawah Wawomudha', 'Trekking Ringan Hutan Pinus', 'Suasana Tenang & Udara Sejuk', 'Spot Foto Panorama Alam']
    }
  ];

  const filteredHighlights = allDestinationHighlights.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categoryKey === activeCategory;
  });

  return (
    <div className="bg-slate-50 text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* TOP HEADER BANNER */}
      <div className="relative w-full h-[230px] sm:h-[290px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest mb-1 shadow-md">
            <Globe className="w-3.5 h-3.5 text-red-300" />
            <span>NITURIU TRANSPORT BAJAWA</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            {t.dest_title}
          </h1>

          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-red-400 cursor-pointer">{t.dest_breadcrumb_home}</span> / {t.dest_breadcrumb_page}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Subtitle Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            {t.dest_cat_subtitle}
          </h2>
          <div className="w-20 h-1 bg-[#dc2626] mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t.dest_desc}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_all}
          </button>
          <button
            onClick={() => setActiveCategory('jabar')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'jabar'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_jabar}
          </button>
          <button
            onClick={() => setActiveCategory('jateng')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'jateng'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_jateng}
          </button>
          <button
            onClick={() => setActiveCategory('jatim')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'jatim'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_jatim}
          </button>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHighlights.map((dest) => {
            const title = isEN ? dest.titleEN : dest.titleID;
            const subtitle = isEN ? dest.subtitleEN : dest.subtitleID;
            const badge = isEN ? dest.badgeEN : dest.badgeID;
            const spots = isEN ? dest.spotsEN : dest.spotsID;
            const categoryName = isEN ? dest.categoryNameEN : dest.categoryNameID;

            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={dest.image}
                      alt={title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md">
                      {badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-display font-black text-xl text-[#0d1b37] uppercase tracking-tight">
                        {title}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 font-medium mt-1">
                        {subtitle}
                      </p>
                    </div>

                    <div className="space-y-1.5 border-t border-slate-100 pt-3">
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                        {isEN ? 'Key Highlights:' : 'Highlight Utama:'}
                      </span>
                      <ul className="space-y-1.5">
                        {spots.map((spot, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{spot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleWhatsAppBooking(title, categoryName)}
                    className="w-full py-3 bg-[#0d1b37] hover:bg-red-600 text-white font-display font-black text-xs uppercase tracking-wider rounded-2xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>{isEN ? 'Consult Route via WA' : 'Konsultasi Rute via WA'}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
