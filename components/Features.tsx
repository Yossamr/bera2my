import React from 'react';
import { LayoutGrid, Map, BarChart3, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureItem: React.FC<{ icon: React.ReactNode; label: string; delay: number }> = ({ icon, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ type: "spring", stiffness: 100, damping: 10, delay }}
    className="relative flex flex-col items-center gap-6 group z-10"
  >
    {/* Icon Container - Matching the dark circular button look */}
    <div className="w-24 h-24 rounded-full bg-[#112D4E] border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:border-brand-cyan group-hover:bg-[#163A66] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(44,116,179,0.4)] transition-all duration-300 relative z-10">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 36, strokeWidth: 1.5 })}
    </div>
    
    {/* Text */}
    <span className="text-white font-bold text-xl tracking-wide">{label}</span>
  </motion.div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative">
        <div className="relative flex flex-wrap justify-center md:justify-between items-center gap-12 max-w-6xl mx-auto">
             
             {/* Animated Connecting Line */}
             <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent hidden md:block z-0 origin-right" 
             />

          {/* Ordered Right to Left visually via flex-row-reverse or just rely on RTL document flow. 
              Order in image (Right to Left): Dashboard, Analytics, Maps, Security, Speed.
          */}
          <FeatureItem icon={<LayoutGrid />} label="لوحة تحكم سهلة" delay={0.1} />
          <FeatureItem icon={<BarChart3 />} label="تحليلات دقيقة" delay={0.3} />
          <FeatureItem icon={<Map />} label="دعم الخرائط" delay={0.5} />
          <FeatureItem icon={<Lock />} label="حماية وأمان" delay={0.7} />
          <FeatureItem icon={<Zap />} label="سرعة فائقة" delay={0.9} />
        </div>
      </div>
    </section>
  );
};