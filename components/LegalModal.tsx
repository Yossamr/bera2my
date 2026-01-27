import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/80 backdrop-blur-sm z-[60]"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 m-auto z-[70] w-full max-w-2xl h-[85vh] flex flex-col pointer-events-none p-4"
          >
            <div className="glass-card w-full h-full flex flex-col rounded-2xl overflow-hidden pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#0A2647]/90">
              
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <h3 className="text-2xl font-bold text-white tracking-wide">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 text-gray-400 hover:text-red-400 hover:rotate-90"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Content Area */}
              <div className="flex-1 p-6 overflow-y-auto text-right custom-scrollbar" dir="rtl">
                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                  {content}
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t border-white/10 bg-white/5 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-8 py-2.5 bg-brand-cyan text-white rounded-lg hover:bg-brand-light transition-colors font-bold shadow-lg shadow-brand-cyan/20"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};