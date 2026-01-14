
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/50 pt-20 pb-24 md:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <i className="fa-solid fa-bolt text-white"></i>
              </div>
              <span className="text-xl font-black text-white tracking-tight">SR DIGITAL</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading performance marketing agency dedicated to the Delhi NCR real estate micro-markets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">How it Works</a></li>
              <li><a href="#process" className="hover:text-indigo-400 transition-colors">Our Process</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
              <li><a href="#leadForm" className="hover:text-indigo-400 transition-colors">Request Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Locations</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Gurgaon Sectors</li>
              <li>Noida Extension</li>
              <li>South Delhi Projects</li>
              <li>Dwarka Expressway</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-indigo-500"></i>
                +91 9211841593
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-indigo-500"></i>
                hello@srdigital.in
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-indigo-500"></i>
                Noida, Uttar Pradesh
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SR Digital Media. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
