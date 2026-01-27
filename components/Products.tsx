import React from 'react';
import { ShoppingBag, Truck, GraduationCap, Database, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isSpecial?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, isSpecial }) => {
  // Create WhatsApp Link for specific product
  const whatsappUrl = `https://wa.me/201000000000?text=${encodeURIComponent(`مرحباً، أنا مهتم بمعرفة تفاصيل أكثر عن ${title}`)}`;

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 group
        ${isSpecial 
          ? 'bg-gradient-to-b from-brand-cyan/10 to-transparent border border-brand-cyan/40 shadow-[0_0_30px_rgba(44,116,179,0.1)]' 
          : 'bg-[#0F2B50]/60 backdrop-blur-md border border-white/5 hover:border-brand-cyan/30 hover:shadow-xl hover:shadow-brand-cyan/5'
        }
      `}
    >
      {/* Decorative Gradient Blob on Hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-cyan/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col flex-grow p-6 md:p-8">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transition-transform group-hover:scale-110 duration-300 ${isSpecial ? 'bg-gradient-to-br from-brand-cyan to-blue-600' : 'bg-white/5 border border-white/10 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/30'}`}>
          {React.cloneElement(icon as React.ReactElement, { size: 28, strokeWidth: 1.5 })}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-cyan transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-sm md:text-base group-hover:text-gray-300 transition-colors">
          {description}
        </p>

        {/* Link */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide bg-white/5 hover:bg-brand-cyan py-3 px-6 rounded-lg transition-all w-max mt-auto group-hover:translate-x-1"
        >
          <span>عرض التفاصيل</span>
          <ArrowUpRight className="w-4 h-4 rtl:rotate-180" />
        </a>
      </div>
    </motion.div>
  );
};

export const Products: React.FC = () => {
  const products = [
    {
      title: "Gold Master",
      description: "نظام إدارة المخزون والمبيعات الشامل. تحكم كامل في منتجاتك، فواتيرك، وتقارير أرباحك بضغطة زر. مناسب لجميع المحلات التجارية.",
      icon: <Database />
    },
    {
      title: "برنامج المطعم",
      description: "نظام نقاط بيع (POS) متطور للمطاعم والكافيهات. إدارة الطاولات، المطبخ، والتيك أواي بكل سهولة مع دعم الفاتورة الإلكترونية.",
      icon: <ShoppingBag />
    },
    {
      title: "برنامج شركات الشحن",
      description: "تتبع الشحنات، إدارة المناديب، وحسابات العملاء والتجار. الحل الأمثل لشركات الشحن واللوجستيات لتنظيم العمل.",
      icon: <Truck />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const customProjectWhatsapp = `https://wa.me/201000000000?text=${encodeURIComponent("مرحباً، لدي فكرة مشروع تخرج وأرغب في مناقشتها معكم.")}`;

  return (
    <section id="products" className="scroll-mt-32 py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-2 block">حلول برمجية متكاملة</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            اختار البرنامج المناسب <span className="text-brand-cyan">لمشروعك</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-brand-cyan to-transparent mx-auto rounded-full opacity-70" />
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </motion.div>

        {/* Custom Solution Card (Full Width) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden p-1 p-[1px] bg-gradient-to-r from-brand-cyan/50 via-purple-500/50 to-brand-cyan/50"
        >
            <div className="bg-[#0A2647] rounded-[22px] p-6 md:p-10 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[80px]" />

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 text-center lg:text-right">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-cyan to-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(44,116,179,0.3)]">
                            <GraduationCap className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">مشاريع التخرج والأنظمة الخاصة</h3>
                            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
                                عندك فكرة مشروع تخرج معقدة؟ أو محتاج نظام بمواصفات خاصة لشركتك؟
                                <br className="hidden md:block" />
                                فريقنا جاهز يحول فكرتك لواقع بأحدث التقنيات وكود نظيف 100%.
                            </p>
                        </div>
                    </div>
                    <a 
                      href={customProjectWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap px-8 py-4 rounded-full bg-white text-brand-navy font-bold hover:bg-brand-cyan hover:text-white transition-all shadow-lg hover:shadow-brand-cyan/50 transform hover:-translate-y-1"
                    >
                        احجز استشارتك الآن
                    </a>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};