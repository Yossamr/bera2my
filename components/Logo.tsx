import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex flex-col items-center justify-center select-none ${className}`}>
    <div className="relative">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none tracking-tight drop-shadow-lg" style={{ fontFamily: 'Tajawal, sans-serif' }}>
        خليك <span className="text-brand-cyan">رقمي</span>
      </h1>
    </div>
    <span className="text-[0.6rem] sm:text-[0.75rem] md:text-[0.9rem] text-brand-light font-bold tracking-[0.35em] uppercase mt-1 drop-shadow-md">
      Be Digital
    </span>
  </div>
);