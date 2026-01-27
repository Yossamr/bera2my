import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Coffee, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: <Users />, value: "+200", label: "عميل سعيد" },
    { icon: <CheckCircle />, value: "+50", label: "مشروع مكتمل" },
    { icon: <Award />, value: "5", label: "سنوات خبرة" },
    { icon: <Coffee />, value: "∞", label: "كوب قهوة" },
  ];

  return (
    <section id="about" className="scroll-mt-32 py-24 relative overflow-hidden bg-gradient-to-b from-[#0A2647] to-[#081f3a]">
      {/* Background Decor */}
      <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-right order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-brand-cyan rounded-full"></span>
              <span className="text-brand-cyan font-bold tracking-wider uppercase text-sm">قصتنا ورؤيتنا</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              نحن نبني المستقبل <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-light drop-shadow-sm">بأيدي مصرية 100%</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                في <strong>bera2my</strong>، نؤمن بأن التكنولوجيا ليست مجرد أكواد، بل هي حلول ذكية تسهل حياة الناس وتنمي الأعمال. بدأنا كفريق صغير من المطورين الشغوفين، واليوم نخدم مئات العملاء في السوق المصري.
              </p>
              <p>
                هدفنا بسيط: تقديم برامج قوية، سهلة الاستخدام، وبسعر منافس، تساعدك تدير شغلك باحترافية وتتفرغ للنمو والتطوير.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
               <a href="#contact" className="px-8 py-3.5 bg-brand-cyan text-white font-bold rounded-lg hover:bg-brand-light transition-all shadow-lg hover:shadow-brand-cyan/30">
                 تواصل معنا
               </a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
              {/* Decorative elements behind grid */}
              <div className="absolute inset-0 bg-brand-cyan/5 blur-3xl rounded-full transform -rotate-12 scale-90 pointer-events-none" />

              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-[#112D4E] transition-all border border-white/5 hover:border-brand-cyan/20 aspect-square"
                >
                  <div className="w-14 h-14 mb-4 rounded-full bg-white/5 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all shadow-inner">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 28, strokeWidth: 2 })}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400 text-sm md:text-base font-medium group-hover:text-gray-300 transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};