
import React from 'react';

const StickyMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[90] p-4 bg-slate-950/80 backdrop-blur-xl border-t border-white/10">
      <div className="grid grid-cols-2 gap-4">
        <a 
          href="tel:+919211841593" 
          className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold"
        >
          <i className="fa-solid fa-phone"></i>
          Call
        </a>
        <a 
          href="https://wa.me/919211841593" 
          className="flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-600/30"
        >
          <i className="fa-brands fa-whatsapp text-lg"></i>
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
