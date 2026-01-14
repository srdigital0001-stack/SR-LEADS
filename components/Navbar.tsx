
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center logo-glow">
              <i className="fa-solid fa-bolt text-white text-xl"></i>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-extrabold tracking-tight leading-none text-white">SR DIGITAL</h1>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Real Estate Lead Gen</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Solutions</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:+919211841593" 
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            >
              <i className="fa-solid fa-phone text-xs"></i>
              <span>Call Now</span>
            </a>
            <a 
              href="https://wa.me/919211841593" 
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
