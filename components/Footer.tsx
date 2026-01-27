import React, { useState } from 'react';
import { Instagram, Facebook, Phone, Mail, ArrowLeft, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; title: string; content: React.ReactNode }>({
    isOpen: false,
    title: '',
    content: null,
  });

  const closeModal = () => setLegalModal(prev => ({ ...prev, isOpen: false }));

  const openPrivacyPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModal({
      isOpen: true,
      title: 'سياسة الخصوصية',
      content: (
        <div className="space-y-6">
          <p className="text-lg">نحن في <strong>bera2my</strong> نولي اهتماماً كبيراً لخصوصية زوارنا وعملائنا. توضح هذه السياسة كيفية جمعنا واستخدامنا وحماية بياناتك الشخصية.</p>
          
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-brand-cyan mb-2">1. جمع المعلومات</h4>
            <p>نقوم بجمع المعلومات التي تقدمها لنا طواعية عبر نماذج الاتصال أو واتساب، مثل الاسم ورقم الهاتف، وذلك لغرض التواصل معك وتلبية طلباتك.</p>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-brand-cyan mb-2">2. استخدام المعلومات</h4>
            <p className="mb-2">نستخدم المعلومات للأغراض التالية:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 mr-4">
              <li>تقديم الدعم الفني والرد على الاستفسارات.</li>
              <li>تحسين جودة برامجنا وخدماتنا.</li>
              <li>إرسال تحديثات أو عروض خاصة (بموافقتك فقط).</li>
            </ul>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-brand-cyan mb-2">3. حماية البيانات</h4>
            <p>نتعهد بعدم بيع أو تأجير أو مشاركة بياناتك الشخصية مع أي طرف ثالث لأغراض تسويقية دون موافقتك الصريحة، ونستخدم تقنيات أمان متقدمة لحماية بياناتك.</p>
          </div>
        </div>
      )
    });
  };

  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModal({
      isOpen: true,
      title: 'الشروط والأحكام',
      content: (
        <div className="space-y-6">
          <p className="text-lg">مرحباً بك في <strong>bera2my</strong>. باستخدامك لموقعنا أو شراء برامجنا، فإنك توافق على الالتزام بالشروط التالية:</p>
          
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-brand-cyan mb-2">1. حقوق الملكية الفكرية</h4>
            <p>جميع حقوق النشر، العلامات التجارية، وحقوق الملكية الفكرية في هذا الموقع وبرامجنا (الكود المصدري، التصميم، الشعارات) مملوكة حصرياً لـ bera2my. يمنع نسخ أو إعادة توزيع أي جزء دون إذن كتابي.</p>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-brand-cyan mb-2">2. ترخيص الاستخدام</h4>
            <p>عند شراء أحد برامجنا، نمنحك ترخيصاً غير حصري لاستخدام البرنامج للغرض المخصص له. لا يجوز إعادة بيع الترخيص أو تأجيره أو تعديل الكود المصدري إلا بموافقة مسبقة.</p>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-brand-cyan mb-2">3. الدعم الفني والتحديثات</h4>
            <p>نلتزم بتقديم الدعم الفني لضمان عمل البرامج بشكل صحيح. التحديثات والميزات الجديدة قد تكون مجانية أو مدفوعة بناءً على خطة الاشتراك أو العقد المبرم.</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-brand-cyan mb-2">4. حدود المسؤولية</h4>
            <p>بينما نسعى جاهدين لضمان خلو برامجنا من الأخطاء، فإننا لا نتحمل المسؤولية عن أي خسائر غير مباشرة أو تبعية قد تنجم عن سوء الاستخدام أو انقطاع الخدمة لأسباب خارجة عن إرادتنا.</p>
          </div>
        </div>
      )
    });
  };

  return (
    <>
      <footer id="contact" className="scroll-mt-32 bg-[#081f3a] pt-20 pb-10 border-t border-white/5 mt-auto relative overflow-hidden">
        
        {/* Call to Action Banner */}
        <div className="container mx-auto px-4 mb-20 relative z-20">
          <div className="bg-gradient-to-r from-brand-cyan to-blue-600 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(44,116,179,0.3)] relative overflow-hidden text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">جاهز تبدأ رحلتك الرقمية؟</h2>
              <p className="text-blue-100 text-lg font-medium max-w-lg">فريقنا متاح 24/7 للرد على استفساراتك ومساعدتك في اختيار الحل الأنسب.</p>
            </div>
            
            <a 
              href="https://wa.me/201000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 bg-white text-brand-cyan hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 group whitespace-nowrap"
            >
              <span>ابدأ المحادثة الآن</span>
              <MessageCircle size={22} className="group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
            
            {/* Brand Info */}
            <div className="lg:col-span-1 text-center md:text-right">
               <div className="flex items-center justify-center md:justify-start mb-6">
                   <Logo className="h-16 w-auto" />
               </div>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 نحول أفكارك إلى واقع رقمي. شريكك التقني الأول للنجاح في السوق المصري بأحدث الحلول البرمجية.
               </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-right">
              <h3 className="text-white font-bold text-lg mb-6">روابط سريعة</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-brand-cyan transition-colors">الرئيسية</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-brand-cyan transition-colors">البرامج</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-brand-cyan transition-colors">عن الشركة</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/201000000000" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-brand-cyan transition-colors group">
                    <Phone size={18} className="group-hover:text-green-400 transition-colors" />
                    <span>01000000000</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@bera2my.com" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-brand-cyan transition-colors group">
                    <Mail size={18} className="group-hover:text-yellow-400 transition-colors" />
                    <span>info@bera2my.com</span>
                  </a>
                </li>
              </ul>
            </div>

             {/* Social Media */}
            <div className="text-center md:text-right">
               <h3 className="text-white font-bold text-lg mb-6">تابعنا</h3>
               <div className="flex gap-4 justify-center md:justify-start">
                  <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition-all border border-white/10 shadow-lg" aria-label="Instagram">
                    <Instagram size={22} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-[#1877F2] hover:scale-110 transition-all border border-white/10 shadow-lg" aria-label="Facebook">
                    <Facebook size={22} fill="currentColor" className="stroke-none" />
                  </a>
               </div>
            </div>

          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
            <p>© {new Date().getFullYear()} bera2my. All rights reserved.</p>
            <div className="flex gap-6">
              <button onClick={openPrivacyPolicy} className="hover:text-brand-cyan transition-colors focus:outline-none">سياسة الخصوصية</button>
              <button onClick={openTerms} className="hover:text-brand-cyan transition-colors focus:outline-none">الشروط والأحكام</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal Component */}
      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={closeModal} 
        title={legalModal.title} 
        content={legalModal.content} 
      />
    </>
  );
};