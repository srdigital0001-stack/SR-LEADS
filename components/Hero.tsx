
import React from 'react';
import LeadForm from './LeadForm';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pb-12 pt-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border-indigo-500/30 text-indigo-400 text-sm font-semibold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span>Delhi NCR Specialization</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Stop Chasing Leads. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">Start Hosting Site Visits.</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            We build high-converting ad funnels specifically for property dealers in Gurgaon, Noida, and Delhi. Get 
            <span className="text-white font-semibold"> high-intent buyer inquiries </span> 
            directly on your WhatsApp within 72 hours.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-300 glass-card px-4 py-2 rounded-lg">
              <i className="fa-solid fa-check text-emerald-500"></i>
              No Long Contracts
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 glass-card px-4 py-2 rounded-lg">
              <i className="fa-solid fa-check text-emerald-500"></i>
              Exclusive Leads
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 glass-card px-4 py-2 rounded-lg">
              <i className="fa-solid fa-check text-emerald-500"></i>
              Verified Intent
            </div>
          </div>

          <div className="pt-4 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i+10}/100/100`} 
                  className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" 
                  alt="Client" 
                />
              ))}
            </div>
            <div>
              <p className="text-white font-bold">50+ Realtors</p>
              <p className="text-sm text-slate-400">Trusted in Delhi NCR</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="glass-card rounded-3xl p-1 p-px bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-slate-900/40 rounded-[22px] p-6 sm:p-8 backdrop-blur-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Get Free Lead Audit</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We'll analyze your project area and share an estimated CPL (Cost Per Lead) report.
                </p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
