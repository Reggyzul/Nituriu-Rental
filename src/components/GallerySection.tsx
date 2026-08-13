import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronRight } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GallerySectionProps {
  lang: 'ID' | 'EN';
  onViewAllGallery: () => void;
}

export default function GallerySection({ lang, onViewAllGallery }: GallerySectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  const galleryItems = [
    {
      id: 1,
      title: isEN ? 'Bena Cultural Visit' : 'Kunjungan Adat Kampung Bena',
      subtitle: isEN ? 'Bena Traditional Village, Bajawa, Flores, NTT' : 'Kampung Adat Bena, Bajawa, Flores, NTT',
      image: '/gallery_tourists_bena_tenun.jpg'
    },
    {
      id: 2,
      title: isEN ? 'Wologai Traditional Village' : 'Kampung Adat Wologai Flores',
      subtitle: isEN ? 'Wologai Traditional Village, Ende, Flores, NTT' : 'Desa Adat Wologai, Ende, Flores, NTT',
      image: '/gallery_wologai_village.jpg'
    },
    {
      id: 3,
      title: isEN ? 'Premium Tour Service' : 'Layanan Transportasi Terbaik',
      subtitle: isEN ? 'Flores Tour Overland Service' : 'Layanan Overland Tour Flores',
      image: '/gallery_tourists_driver.jpg'
    },
    {
      id: 4,
      title: isEN ? 'Mount Inerie Peak Climb' : 'Pendakian Puncak Gunung Inerie',
      subtitle: isEN ? 'Mount Inerie, Bajawa, Flores, NTT' : 'Gunung Inerie, Bajawa, Flores, NTT',
      image: '/gallery_mount_inerie_flag.jpg'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white overflow-hidden relative border-b border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="gallery-heading">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500/20 border border-amber-500/40 text-red-400 font-display font-extrabold text-xs tracking-wider uppercase">
            <Camera className="w-4 h-4 text-red-400" />
            <span>{isEN ? 'GALLERY & FLEET DOCUMENTATION' : 'DOKUMENTASI GALERI & ARMADA'}</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            Galeri <span className="text-red-400">Nituriu Travel</span>
          </h2>

          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />

          <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
            {isEN
              ? 'Beautiful travel documentation and exotic destinations across Bajawa and Flores, NTT.'
              : 'Dokumentasi perjalanan wisata dan keindahan alam perkampungan adat di Bajawa dan Flores, NTT.'}
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              onClick={() => setSelectedPhoto(item.image)}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer bg-slate-950"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                <h3 className="font-display font-black text-lg text-white group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 font-medium line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON (Selengkapnya) */}
        <div className="text-center pt-4">
          <button
            onClick={onViewAllGallery}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-red-700 via-red-600 to-red-500 hover:from-red-600 hover:to-[#0f2b5c] text-white font-display font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{isEN ? 'View More Gallery' : 'Selengkapnya'}</span>
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 text-white hover:text-red-400 p-2 rounded-full bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto}
              alt="Preview Galeri"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
