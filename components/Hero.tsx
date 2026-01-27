import React, { useRef } from 'react';
import { ArrowRight, MessageCircle, Facebook, Instagram, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yButtons = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={ref} className="scroll-mt-32 relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden perspective-1000">
      {/* Subtle Glow Behind Text - Parallax Effect */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-cyan/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto px-4 text-center z-10 relative">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ y: yText }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex flex-col items-center justify-center"
        >
          {/* Responsive Text Sizes - Fixed Rendering Issue */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-2 leading-tight text-white drop-shadow-[0_0_25px_rgba(44,116,179,0.6)]">
            خليك رقمي
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-brand-light font-bold tracking-[0.25em] uppercase opacity-100 drop-shadow-md mt-2">
            Be Digital
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ y: yButtons }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-gray-200 leading-relaxed mb-8 md:mb-12 font-light px-2"
        >
          برامج تحل مشاكل حقيقية لمشاريعك الصغيرة، مطاعم، شركات توصيل...
          <span className="block md:inline"> ونقدر نصمم لك نظام مخصص لمشاريع الكليات والتخرج</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative px-8 py-4 bg-brand-cyan text-white text-lg md:text-xl font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(44,116,179,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(44,116,179,0.6)] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-3">
                <span>كلمنا على WhatsApp</span>
                <MessageCircle className="w-6 h-6" />
              </div>
            </a>
            
            <a 
               href="#products"
               className="w-full sm:w-auto px-8 py-4 glass-card text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span>استكشف برامجنا</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-6 mt-4">
            <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[#1877F2]/40 transform hover:-translate-y-1">
              <Facebook size={24} fill="currentColor" className="stroke-none" />
            </a>
            <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E4405F] hover:border-[#E4405F] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[#E4405F]/40 transform hover:-translate-y-1">
              <Instagram size={24} />
            </a>
             <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[#25D366]/40 transform hover:-translate-y-1">
              <Phone size={24} />
            </a>
          </div>
        </motion.div>

        {/* Decorative Circuit Lines */}
        <div className="absolute top-1/2 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
             <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                 <path d="M0,500 Q250,450 500,500 T1000,500" fill="none" stroke="url(#gradient)" strokeWidth="1" />
                 <defs>
                     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="transparent" />
                         <stop offset="50%" stopColor="#2C74B3" />
                         <stop offset="100%" stopColor="transparent" />
                     </linearGradient>
                 </defs>
             </svg>
        </div>
      </div>
    </section>
  );
};