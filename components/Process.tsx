
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "The Audit",
      desc: "We study your inventory and competitor ad campaigns in your local Delhi NCR micro-market."
    },
    {
      number: "02",
      title: "Funnel Build",
      desc: "We design landing pages and ad creatives that resonate with the local buyer persona."
    },
    {
      number: "03",
      title: "Live Launch",
      desc: "Campaigns go live on Google & Meta. Initial data starts flowing in within 48 hours."
    },
    {
      number: "04",
      title: "Optimization",
      desc: "We refine keywords and target interests weekly to lower your cost per site-visit."
    }
  ];

  return (
    <section id="process" className="scroll-mt-24">
      <div className="glass-card rounded-[40px] p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <i className="fa-solid fa-gears text-[200px] text-white"></i>
        </div>

        <div className="relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Our 4-Step Engine</h2>
            <p className="text-slate-400 text-lg">
              Simple, transparent, and built for speed. We don't believe in long setup times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <span className="text-6xl font-black text-white/5 absolute -top-8 -left-2">{s.number}</span>
                <div className="relative">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                    {s.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
