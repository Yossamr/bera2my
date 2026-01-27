import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      setIsMobileMenuOpen(false);
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'البرامج', href: '#products' },
    { name: 'عنا', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-2 shadow-lg' : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center z-50">
             <a 
               href="#home" 
               className="block hover:opacity-90 transition-opacity" 
               onClick={(e) => handleNavClick(e, '#home')}
             >
               {/* Sizing handled by internal text classes, passing padding/margins if needed */}
               <Logo className="" />
             </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/80 hover:text-brand-cyan transition-colors font-medium text-lg relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
             <a 
               href="https://wa.me/201000000000"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-brand-cyan hover:bg-brand-light text-white px-5 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(44,116,179,0.3)] hover:shadow-[0_0_25px_rgba(44,116,179,0.5)] transform hover:-translate-y-0.5"
             >
               <span>WhatsApp</span>
               <Phone size={18} />
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-navy/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 flex items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 p-4 w-full">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white text-2xl font-bold hover:text-brand-cyan transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-brand-cyan text-white px-8 py-4 rounded-full font-bold text-xl mt-4 shadow-lg active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>تواصل عبر WhatsApp</span>
            <Phone size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};