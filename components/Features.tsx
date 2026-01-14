
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Precision Targeting",
      desc: "We don't just target 'Real Estate'. We target buyers currently active in your specific sector or local area.",
      icon: "fa-solid fa-crosshairs",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "WhatsApp Funnels",
      desc: "Skip slow email replies. Our funnels send leads directly to your WhatsApp for instant closing.",
      icon: "fa-brands fa-whatsapp",
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "High-ROI Creatives",
      desc: "Our ad designs focus on USP, location, and price transparency to attract serious buyers, not tire-kickers.",
      icon: "fa-solid fa-palette",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Google Search Ads",
      desc: "Capture people actively searching for 'ready to move 3bhk in Gurgaon'. Highest intent possible.",
      icon: "fa-brands fa-google",
      color: "from-orange-500 to-amber-400"
    },
    {
      title: "Meta Retargeting",
      desc: "Follow up with site visitors on Instagram & Facebook until they book a site visit.",
      icon: "fa-brands fa-facebook",
      color: "from-indigo-500 to-blue-400"
    },
    {
      title: "Weekly Lead Audits",
      desc: "We analyze lead quality every week with you to ensure your CRM is full of genuine prospects.",
      icon: "fa-solid fa-chart-line",
      color: "from-rose-500 to-orange-400"
    }
  ];

  return (
    <section id="features" className="scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Why SR Digital</h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white">Full-Stack Lead Ecosystem</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="group glass-card p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-500">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
              <i className={`${f.icon} text-white text-2xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
