import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  Mountain, 
  Wifi, 
  Flame, 
  BedDouble, 
  UtensilsCrossed, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Maximize2,
  X,
  PhoneCall,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface VillaPageProps {
  lang: 'EN' | 'AR';
}

export default function VillaPage({ lang }: VillaPageProps) {
  const t = TRANSLATIONS[lang];
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const waNumber = '6281236307537';
  const waMessage = encodeURIComponent(
    lang === 'AR'
      ? 'Ù…Ø±Ø­Ø¨Ø§Ù‹ØŒ Ø³ÙˆØ§Ù‚ ÙÙŠ Ø§Ù†Ø¯ÙˆÙ†ÙŠØ³ÙŠØ§. Ø£ÙˆØ¯ Ø­Ø¬Ø² ÙÙŠÙ„Ø§ Ø¯ÙŠÙØ§Ù† Ù‡ÙŠÙ„Ø² Ø¨ÙˆØºÙˆØ± (Villa Divan Hills Bogor). ÙŠØ±Ø¬Ù‰ ØªØ²ÙˆÙŠØ¯ÙŠ Ø¨Ø§Ù„ØªÙØ§ØµÙŠÙ„ ÙˆØ§Ù„ØªÙˆØ§ÙØ±.'
      : 'Hello Sawaq fi Indonesia, I would like to book Villa Divan Hills Bogor. Please confirm availability and details.'
  );
  const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${waMessage}`;

  const facilities = [
    {
      icon: <Waves className="w-7 h-7 text-luxury-gold shrink-0" />,
      title: lang === 'AR' ? 'Ù…Ø³Ø¨Ø­ Ø®Ø§Øµ (Private Pool)' : 'Private Swimming Pool',
      desc: lang === 'AR' 
        ? 'Ø­Ù…Ø§Ù… Ø³Ø¨Ø§Ø­Ø© Ø®Ø§Øµ Ø¨Ù†Ø¸Ø§ÙØ© ÙØ§Ø¦Ù‚Ø© ÙˆÙ…ÙŠØ§Ù‡ Ù…Ù†Ø¹Ø´Ø© Ù„Ø§Ø³ØªØ¬Ù…Ø§Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©.' 
        : 'Clean and fresh private swimming pool for ultimate family relaxation.'
    },
    {
      icon: <Mountain className="w-7 h-7 text-luxury-gold shrink-0" />,
      title: lang === 'AR' ? 'Ø¥Ø·Ù„Ø§Ù„Ø© Ø§Ù„Ø¬Ø¨Ø§Ù„ ÙˆØ£Ø¶ÙˆØ§Ø¡ Ø§Ù„Ù…Ø¯ÙŠÙ†Ø©' : 'Mountain & City Lights View',
      desc: lang === 'AR'
        ? 'Ø¥Ø·Ù„Ø§Ù„Ø© Ø·Ø¨ÙŠØ¹ÙŠØ© Ø®Ù„Ø§Ø¨Ø© Ø¹Ù„Ù‰ Ø¬Ø¨Ø§Ù„ Ø¨ÙˆØºÙˆØ± ÙˆØ£Ø¶ÙˆØ§Ø¡ Ø§Ù„Ù…Ø¯ÙŠÙ†Ø© Ø§Ù„Ø³Ø§Ø­Ø±Ø© Ù„ÙŠÙ„Ø§Ù‹.'
        : 'Scenic natural mountain views and mesmerizing Bogor city lights at night.'
    },
    {
      icon: <Wifi className="w-7 h-7 text-luxury-gold shrink-0" />,
      title: lang === 'AR' ? 'Ø¥Ù†ØªØ±Ù†Øª Ø³Ø±ÙŠØ¹ ÙˆØ´Ø§Ø´Ø© Ø°ÙƒÙŠØ©' : 'High-Speed Wi-Fi & Smart TV',
      desc: lang === 'AR'
        ? 'Ø§ØªØµØ§Ù„ Ø¥Ù†ØªØ±Ù†Øª Ø¹Ø§Ù„ÙŠ Ø§Ù„Ø³Ø±Ø¹Ø© ÙˆØ´Ø§Ø´Ø§Øª Ø°ÙƒÙŠØ© Ù„Ù…Ø´Ø§Ù‡Ø¯Ø© Ø§Ù„Ø£ÙÙ„Ø§Ù… ÙˆØ§Ù„Ø¨Ø±Ø§Ù…Ø¬.'
        : 'Stay connected smoothly and stream your favorite movies anytime.'
    },
    {
      icon: <Flame className="w-7 h-7 text-luxury-gold shrink-0" />,
      title: lang === 'AR' ? 'Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ø´ÙˆØ§Ø¡ ÙˆØ§Ù„ØªØ¬Ù…Ø¹Ø§Øª' : 'BBQ & Outdoor Gathering Area',
      desc: lang === 'AR'
        ? 'Ù…Ø³Ø§Ø­Ø© Ø®Ø§Ø±Ø¬ÙŠØ© ÙˆØ§Ø³Ø¹Ø© Ù…Ø¬Ù‡Ø²Ø© Ù„Ø¥Ù‚Ø§Ù…Ø© Ø­ÙÙ„Ø§Øª Ø§Ù„Ø´ÙˆØ§Ø¡ ÙˆØ§Ù„Ø¬Ù„Ø³Ø§Øª Ø§Ù„Ø¹Ø§Ø¦Ù„ÙŠØ©.'
        : 'Spacious outdoor area perfect for evening barbecues and family get-togethers.'
    },
    {
      icon: <BedDouble className="w-7 h-7 text-luxury-gold shrink-0" />,
      title: lang === 'AR' ? 'ØºØ±Ù Ù†ÙˆÙ… Ù…Ø±ÙŠØ­Ø© ÙˆÙ†Ø¸ÙŠÙØ©' : 'Comfortable & Clean Bedrooms',
      desc: lang === 'AR'
        ? 'Ø£Ø³Ø±Ø© ÙØ§Ø®Ø±Ø© ÙˆÙ…Ø±Ø§ØªØ¨ empuk Ù…Ø¹ Ù…ÙØ§Ø±Ø´ Ù…Ø¹Ù‚Ù…Ø© ÙˆÙ†Ø¸ÙŠÙØ© ÙˆÙ…Ø³ØªÙ„Ø²Ù…Ø§Øª Ø§Ù„Ø­Ù…Ø§Ù….'
        : 'Premium soft mattresses complete with fresh linens and essential toiletries.'
    },
    {
      icon: <UtensilsCrossed className="w-7 h-7 text-luxury-gold shrink-0" />,
      title: lang === 'AR' ? 'Ù…Ø·Ø¨Ø® Ù…ØªÙƒØ§Ù…Ù„ ÙˆØ£Ø¯ÙˆØ§Øª Ø·Ù‡ÙŠ' : 'Fully Equipped Kitchen & Cookware',
      desc: lang === 'AR'
        ? 'Ù…Ø·Ø¨Ø® Ø¬Ù‡Ø² Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ ÙŠØ´Ù…Ù„ Ø§Ù„Ù…ÙˆÙ‚Ø¯ ÙˆØ§Ù„Ø«Ù„Ø§Ø¬Ø© ÙˆØ£Ø¯ÙˆØ§Øª Ø§Ù„Ø·Ø¨Ø® ÙˆØªÙ†Ø§ÙˆÙ„ Ø§Ù„Ø·Ø¹Ø§Ù….'
        : 'Ready-to-use kitchen with stove, refrigerator, cookware, and dining utensils.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-luxury-gold shrink-0" />,
      title: lang === 'AR' ? 'Ù…ÙˆØ§Ù‚Ù ÙˆØ§Ø³Ø¹Ø© ÙˆØ£Ù…Ù† Ù¢Ù¤/Ù§' : 'Spacious Parking & 24/7 Security',
      desc: lang === 'AR'
        ? 'Ù…ÙˆÙ‚Ù Ø³ÙŠØ§Ø±Ø§Øª ÙƒØ¨ÙŠØ± Ø¯Ø§Ø®Ù„ Ø§Ù„ÙÙŠÙ„Ø§ Ù…Ø¹ Ø­Ø±Ø§Ø³Ø© Ø£Ù…Ù†ÙŠØ© Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± Ø§Ù„Ø³Ø§Ø¹Ø©.'
        : 'Worry-free stay with ample private parking and round-the-clock safety.'
    }
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200',
      title: lang === 'AR' ? 'Ø§Ù„ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© Ù„ÙÙŠÙ„Ø§ Ø¯ÙŠÙØ§Ù† Ù‡ÙŠÙ„Ø²' : 'Villa Exterior & Private Grounds',
      subtitle: lang === 'AR' ? 'Ù…Ø¹Ù…Ø§Ø± Ø­Ø¯ÙŠØ« ØªØ­ÙŠØ· Ø¨Ù‡ Ø§Ù„Ø·Ø¨ÙŠØ¹Ø© Ø§Ù„Ø®Ø¶Ø±Ø§Ø¡' : 'Modern Luxury Architecture & Green Surroundings'
    },
    {
      url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200',
      title: lang === 'AR' ? 'Ø§Ù„Ù…Ø³Ø¨Ø­ Ø§Ù„Ø®Ø§Øµ Ø§Ù„Ù…Ù†Ø¹Ø´' : 'Private Swimming Pool',
      subtitle: lang === 'AR' ? 'Ù…ÙŠØ§Ù‡ Ù†Ù‚ÙŠØ© ÙˆÙ…Ø³Ø§Ø­Ø© Ø§Ø³ØªØ¬Ù…Ø§Ù… ÙˆØ§Ø³Ø¹Ø©' : 'Crystal Clean Water & Sun Loungers'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      title: lang === 'AR' ? 'ØºØ±ÙØ© Ø§Ù„Ù…Ø¹ÙŠØ´Ø© Ù…Ø¹ Ø§Ù„Ø´Ø§Ø´Ø© Ø§Ù„Ø°ÙƒÙŠØ©' : 'Spacious Living Room & Entertainment',
      subtitle: lang === 'AR' ? 'Ø¬Ù„Ø³Ø§Øª Ø¹Ø§Ø¦Ù„ÙŠØ© Ù…Ø±ÙŠØ­Ø© ÙˆØ¥Ø¶Ø§Ø¡Ø© Ø¯Ø§ÙØ¦Ø©' : 'Cozy Family Seating & Panoramic Glass Doors'
    },
    {
      url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200',
      title: lang === 'AR' ? 'ØºØ±ÙØ© Ø§Ù„Ù†ÙˆÙ… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© Ø§Ù„ÙØ§Ø®Ø±Ø©' : 'Master Suite & Clean Bedding',
      subtitle: lang === 'AR' ? 'Ø£Ø³Ø±Ø© Ù…Ø±ÙŠØ­Ø© ÙˆØ¥Ø·Ù„Ø§Ù„Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø·Ø¨ÙŠØ¹Ø©' : 'Ultra Soft Mattress & Mountain Breeze'
    },
    {
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
      title: lang === 'AR' ? 'Ø§Ù„Ù…Ø·Ø¨Ø® Ø§Ù„Ø­Ø¯ÙŠØ« ÙˆØ£Ø¯ÙˆØ§Øª Ø§Ù„Ø·Ù‡ÙŠ' : 'Modern Kitchen & Dining Area',
      subtitle: lang === 'AR' ? 'Ø¬Ø§Ù‡Ø² Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ù„Ø¥Ø¹Ø¯Ø§Ø¯ ÙˆØ¬Ø¨Ø§ØªÙƒÙ… Ø§Ù„Ù…ÙØ¶Ù„Ø©' : 'Fully Equipped Utensils & Full Size Refrigerator'
    },
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      title: lang === 'AR' ? 'Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ø´ÙˆØ§Ø¡ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ© ÙˆØ§Ù„Ø­Ø¯ÙŠÙ‚Ø©' : 'Outdoor Garden & BBQ Terrace',
      subtitle: lang === 'AR' ? 'Ø£Ø¬ÙˆØ§Ø¡ Ù„ÙŠÙ„ÙŠØ© Ø±Ø§Ø¦Ø¹Ø© ØªØ­Øª Ù†Ø¬ÙˆÙ… Ø¨ÙˆØºÙˆØ±' : 'Perfect Outdoor Spot for Grilling & Gatherings'
    }
  ];

  return (
    <div className="bg-white overflow-hidden pt-20" id="villa-page">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative min-h-[85vh] bg-luxury-charcoal text-white flex items-center justify-center overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1600"
            alt="Villa Divan Hills Bogor Main Banner"
            className="w-full h-full object-cover opacity-35 scale-105 animate-pulse-subtle"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/70 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center space-y-8">
          
          {/* Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-luxury-gold/20 border border-luxury-gold/40 px-5 py-2 rounded-full backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-luxury-gold" />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-luxury-gold">
              {lang === 'AR' ? 'ÙÙŠÙ„Ø§ ÙØ§Ø®Ø±Ø© ÙÙŠ Ø¨ÙˆØºÙˆØ± â€¢ VILLA DIVAN HILLS BOGOR' : 'EXCLUSIVE LUXURY VILLA â€¢ DIVAN HILLS BOGOR'}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight max-w-4xl mx-auto"
          >
            {lang === 'AR' ? (
              <>
                Ø¥ÙŠØ¬Ø§Ø± ÙÙŠÙ„Ø§ ÙØ§Ø®Ø±Ø© ÙˆØ¨Ø£Ø³Ø¹Ø§Ø± Ù…Ù†Ø§Ø³Ø¨Ø© ÙÙŠ <br />
                <span className="text-luxury-gold">Ø¯ÙŠÙØ§Ù† Ù‡ÙŠÙ„Ø² Ø¨ÙˆØºÙˆØ±</span> â€“ Ø¥Ø¬Ø§Ø²Ø© Ù…Ø±ÙŠØ­Ø© ÙˆÙ„Ø§ ØªÙÙ†Ø³Ù‰
              </>
            ) : (
              <>
                Luxury & Affordable Villa Rental at <br />
                <span className="text-luxury-gold">Divan Hills Bogor</span> â€“ Comfortable & Memorable Vacation
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {lang === 'AR'
              ? 'Ø§Ø³ØªÙ…ØªØ¹ Ø¨Ù‡Ø¯ÙˆØ¡ Ø·Ø¨ÙŠØ¹Ø© Ø¨ÙˆØºÙˆØ± Ù…Ø¹ Ø§Ù„Ù‡ÙˆØ§Ø¡ Ø§Ù„Ù…Ù†Ø¹Ø´ ÙˆØ§Ù„Ù…Ø±Ø§ÙÙ‚ Ø§Ù„ÙƒØ§Ù…Ù„Ø© ÙˆØ§Ù„Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ù…Ø±ÙŠØ­Ø© Ù„Ù„ØºØ§ÙŠØ© Ù…Ø¹ Ø¹Ø§Ø¦Ù„ØªÙƒ ÙˆØ£Ø­Ø¨Ø§Ø¦Ùƒ.'
              : 'Enjoy the serenity of Bogor nature with cool air, complete facilities, and a super comfortable atmosphere with your family and loved ones.'}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4"
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-100 hover:bg-green-100 text-white font-display font-bold text-base py-4 px-9 rounded-full shadow-2xl shadow-emerald-600/30 hover:scale-105 transition-all cursor-pointer border border-green-500/30"
              id="villa-hero-wa-cta"
            >
              <PhoneCall className="w-5 h-5 shrink-0" />
              <span>{lang === 'AR' ? 'Ø­Ø¬Ø² Ù…Ø¨Ø§Ø´Ø± Ø¹Ø¨Ø± Ø§Ù„ÙˆØ§ØªØ³Ø§Ø¨' : 'Book Now via WhatsApp'}</span>
              <ArrowRight className={`w-5 h-5 shrink-0 ${lang === 'AR' ? 'rotate-180' : ''}`} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* 2. WHY CHOOSE US / TOP AMENITIES SECTION */}
      <section className="py-24 bg-gray-50 overflow-hidden" id="villa-facilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-display font-bold text-sm text-luxury-gold tracking-widest uppercase">
              {lang === 'AR' ? 'Ù„Ù…Ø§Ø°Ø§ ØªØ®ØªØ§Ø±Ù†Ø§ØŸ' : 'WHY CHOOSE US'}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
              {lang === 'AR' ? 'Ø§Ù„Ù…ÙŠØ²Ø§Øª ÙˆØ§Ù„Ù…Ø±Ø§ÙÙ‚ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©' : 'Facilities & Key Advantages'}
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              {lang === 'AR'
                ? 'Ù†Ù‚Ø¯Ù… Ù„ÙƒÙ… ØªØ¬Ø±Ø¨Ø© Ø¥Ù‚Ø§Ù…Ø© Ù…Ù† Ø§Ù„Ø·Ø±Ø§Ø² Ø§Ù„Ø£ÙˆÙ„ Ù…Ø¹ Ù…Ø±Ø§ÙÙ‚ Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ø¶Ù…Ø§Ù† Ø±Ø§Ø­ØªÙƒÙ… Ø§Ù„ØªØ§Ù…Ø© Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ø¥Ø¬Ø§Ø²Ø©:'
                : 'We present a first-class stay experience with complete facilities to ensure your comfort during vacation:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-50 group-hover:bg-luxury-gold group-hover:text-white flex items-center justify-center transition-colors">
                  {fac.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 leading-snug">
                  {fac.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  {fac.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PHOTO GALLERY SECTION */}
      <section className="py-24 bg-white overflow-hidden" id="villa-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-display font-bold text-sm text-luxury-gold tracking-widest uppercase">
              {lang === 'AR' ? 'Ù…Ø¹Ø±Ø¶ Ø§Ù„ØµÙˆØ±' : 'PHOTO GALLERY'}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
              {lang === 'AR' ? 'Ø§Ø³ØªÙƒØ´Ù Ø£Ø¬ÙˆØ§Ø¡ ÙÙŠÙ„Ø§ Ø¯ÙŠÙØ§Ù† Ù‡ÙŠÙ„Ø²' : 'Peek Into Our Villa Atmosphere'}
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              {lang === 'AR'
                ? 'Ø§Ø³ØªØ´Ø¹Ø± Ø±ÙˆØ¹Ø© ÙˆØ¬Ù…Ø§Ù„ ÙƒÙ„ Ø²Ø§ÙˆÙŠØ© ÙÙŠ ÙÙŠÙ„Ø§ Ø¯ÙŠÙØ§Ù† Ù‡ÙŠÙ„Ø² Ø¨ÙˆØºÙˆØ± Ù‚Ø¨Ù„ Ø²ÙŠØ§Ø±ØªÙƒ.'
                : 'Feel the comfort and beauty of every corner of Villa Divan Hills Bogor before you visit.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedImg(img.url)}
                className="group relative rounded-3xl overflow-hidden shadow-md aspect-[4/3] cursor-pointer bg-gray-100"
              >
                <img 
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <h4 className="font-display font-bold text-base leading-snug text-white">
                    {img.title}
                  </h4>
                  <p className="font-sans text-xs text-gray-300">
                    {img.subtitle}
                  </p>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox Modal */}
          <AnimatePresence>
            {selectedImg && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImg(null)}
                  className="absolute inset-0 bg-black/85 backdrop-blur-md"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative z-10 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
                >
                  <button
                    onClick={() => setSelectedImg(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer z-20"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <img
                    src={selectedImg}
                    alt="Villa High Res"
                    className="w-full max-h-[80vh] object-contain"
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Final Callout Footer Box */}
          <div className="mt-16 bg-luxury-charcoal text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-luxury-gold/20 shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-luxury-gold/20 text-luxury-gold font-bold text-xs uppercase px-4 py-1.5 rounded-full border border-luxury-gold/30">
              <CheckCircle className="w-4 h-4" />
              <span>{lang === 'AR' ? 'Ø§Ø­Ø¬Ø² Ø±Ø­Ù„ØªÙƒ Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„Ø©' : 'Complete Travel & Villa Package'}</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl uppercase">
              {lang === 'AR' ? 'Ø¬Ø§Ù‡Ø² Ù„Ù‚Ø¶Ø§Ø¡ Ø£ÙØ¶Ù„ Ø¥Ø¬Ø§Ø²Ø© ÙÙŠ Ø¨ÙˆØºÙˆØ±ØŸ' : 'Ready for the Ultimate Vacation in Bogor?'}
            </h3>
            <p className="font-sans text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
              {lang === 'AR' 
                ? 'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§ Ø§Ù„Ø¢Ù† Ø¹Ø¨Ø± Ø§Ù„ÙˆØ§ØªØ³Ø§Ø¨ Ù„Ø­Ø¬Ø² ÙÙŠÙ„Ø§ Ø¯ÙŠÙØ§Ù† Ù‡ÙŠÙ„Ø² ÙˆØ³ÙŠØ§Ø±Ø§ØªÙ†Ø§ Ø§Ù„Ø³ÙŠØ§Ø­ÙŠØ© Ø§Ù„Ù…Ø²ÙˆØ¯Ø© Ø¨Ø³Ø§Ø¦Ù‚ÙŠÙ† Ù…Ø­ØªØ±ÙÙŠÙ† ÙŠØªØ­Ø¯Ø«ÙˆÙ† Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©.'
                : 'Contact us now on WhatsApp to reserve Villa Divan Hills along with our car & professional driver services.'}
            </p>
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-luxury-gold hover:bg-luxury-gold-dark text-white font-display font-bold text-sm py-3.5 px-8 rounded-full shadow-lg transition-all hover:scale-105"
              >
                <span>{lang === 'AR' ? 'Ø­Ø¬Ø² Villa Divan Hills Ø§Ù„Ø¢Ù†' : 'Reserve Villa Divan Hills Now'}</span>
                <ArrowRight className={`w-4 h-4 ${lang === 'AR' ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}


