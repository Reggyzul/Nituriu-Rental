import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Search, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function Hero({ onExploreClick, lang, onBookingClick }: HeroProps) {
  const [destinationInput, setDestinationInput] = useState('Kampung Adat Bena (Rumah Adat & Megalitikum)');
  const [travelDateInput, setTravelDateInput] = useState('');

  const t = TRANSLATIONS[lang];

  const destOptions = lang === 'EN' ? [
    { value: 'Kampung Adat Bena (Cultural Village & Megalithic)', label: 'Kampung Adat Bena (Cultural Village & Megalithic)' },
    { value: 'Gunung Inerie & Air Panas Mengeruda', label: 'Gunung Inerie & Air Panas Mengeruda' },
    { value: 'Riung 17 Pulau (Islands Hopping & Marine Park)', label: 'Riung 17 Pulau (Islands Hopping & Marine Park)' },
    { value: 'Danau Wawomudha & Kampung Adat Wogo', label: 'Danau Wawomudha & Kampung Adat Wogo' },
    { value: 'Transfer Bandara Soa (Bajawa) / Hotel', label: 'Transfer Bandara Soa (Bajawa) / Hotel' },
    { value: 'Rute Bajawa → Ende / Moni / Ruteng / Labuan Bajo', label: 'Rute Bajawa → Ende / Moni / Ruteng / Labuan Bajo' }
  ] : [
    { value: 'Kampung Adat Bena (Rumah Adat & Megalitikum)', label: 'Kampung Adat Bena (Rumah Adat & Megalitikum)' },
    { value: 'Gunung Inerie & Air Panas Mengeruda', label: 'Gunung Inerie & Air Panas Mengeruda' },
    { value: 'Riung 17 Pulau (Wisata Bahari & Island Hopping)', label: 'Riung 17 Pulau (Wisata Bahari & Island Hopping)' },
    { value: 'Danau Wawomudha & Kampung Adat Wogo', label: 'Danau Wawomudha & Kampung Adat Wogo' },
    { value: 'Transfer Bandara Soa (Bajawa) / Hotel', label: 'Transfer Bandara Soa (Bajawa) / Hotel' },
    { value: 'Rute Bajawa → Ende / Moni / Ruteng / Labuan Bajo', label: 'Rute Bajawa → Ende / Moni / Ruteng / Labuan Bajo' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6281236307537';
    const message = lang === 'EN'
      ? `Hello Nituriu Transport Bajawa, I would like to consult route / vehicle rental for: ${destinationInput}${travelDateInput ? ` (Planned Date: ${travelDateInput})` : ''}. Please inform price quote & details. Thank you!`
      : `Halo Nituriu Transport Bajawa, saya ingin konsultasi sewa mobil / rute wisata: ${destinationInput}${travelDateInput ? ` (Rencana Tanggal: ${travelDateInput})` : ''}. Mohon informasi harga & rincian terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="home" className="relative pt-16 pb-4 bg-white overflow-hidden text-center">
      
      {/* 1. HERO BANNER */}
      <div className="relative w-full min-h-[500px] sm:min-h-[540px] flex flex-col justify-between bg-slate-900 text-white overflow-hidden border-b border-slate-200">
        
        {/* Bajawa / Flores Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/dest_wolobobo.jpg')`
          }}
        />

        {/* Soft Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/85 backdrop-blur-[0.5px]" />

        {/* Top Spacer */}
        <div className="h-20 sm:h-24" />

        {/* Hero Central Typography */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-6 text-center space-y-3 sm:space-y-4">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-lg"
            style={{ fontFamily: "'Great Vibes', cursive, serif" }}
          >
            {t.hero_explore}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none drop-shadow-lg"
          >
            {t.hero_title_1}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-1.5 text-xs sm:text-sm font-sans font-bold text-red-300 tracking-wider uppercase drop-shadow-sm"
          >
            <span>{t.hero_motto}</span>
            <span className="text-[11px] text-amber-300 font-medium normal-case">
              📍 Kab. Ngada, Bajawa, Flores, NTT — Antar-Jemput Bandara Soa (Bajawa)
            </span>
          </motion.div>
        </div>

        {/* Bottom Spacer inside Banner */}
        <div className="h-16 sm:h-20" />

      </div>

      {/* 2. ELEVATED SEARCH TOUR BOX */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-20">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 text-left">
          
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Field 1: Destination / Route */}
            <div className="md:col-span-5 space-y-1">
              <label className="text-[10px] font-sans font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>{t.search_dest_cat}</span>
              </label>
              <div className="relative">
                <select
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 pr-8 text-xs font-sans font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
                >
                  {destOptions.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Field 2: Planned Travel Date */}
            <div className="md:col-span-4 space-y-1">
              <label className="text-[10px] font-sans font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-red-600" />
                <span>{t.search_travel_date}</span>
              </label>
              <input
                type="date"
                value={travelDateInput}
                onChange={(e) => setTravelDateInput(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-xs font-sans font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Field 3: Consult Button */}
            <div className="md:col-span-3 pt-2 md:pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-sans font-extrabold text-xs uppercase py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>{t.search_btn}</span>
              </button>
            </div>

          </form>

        </div>
      </div>

    </section>
  );
}
