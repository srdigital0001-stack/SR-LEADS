
import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Rocket, 
  TrendingUp, 
  Target, 
  Layers, 
  Zap, 
  BarChart3,
  ChevronDown,
  AlertCircle,
  Lightbulb,
  Trophy,
  Clock,
  Sparkles
} from 'lucide-react';
import { 
  PHONE_E164, 
  PHONE_DISPLAY, 
  WHATSAPP_DEFAULT_MSG, 
  AREAS, 
  BUDGET_RANGES, 
  buildWhatsAppLink 
} from './constants';
import { LeadFormData } from './types';
import LeadStrategyChat from './components/LeadStrategyChat';

const Logo = () => (
  <div className="flex flex-col items-center select-none py-1 group">
    {/* Arc element with vibrant orange gradient */}
    <div className="relative w-[140px] h-[20px] mb-[-6px]">
      <svg viewBox="0 0 140 30" className="w-full h-full">
        <path 
          d="M10 25 Q70 -5 130 25" 
          fill="none" 
          stroke="url(#logoArcGradient)" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        <defs>
          <linearGradient id="logoArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D6511B" />
            <stop offset="50%" stopColor="#F7941D" />
            <stop offset="100%" stopColor="#D6511B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    
    {/* Main Text in Brand Navy Blue */}
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-[900] tracking-[-0.04em] leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.1)]" style={{ color: '#2B4A6F' }}>
        SR DIGITAL
      </h2>
      
      {/* Subtext in Brand Gray */}
      <p className="text-[8.5px] font-black tracking-[0.38em] uppercase leading-none mt-2 pr-[-0.38em]" style={{ color: '#888888' }}>
        DIGITAL MARKETING AGENCY
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    area: '',
    budget: '',
    message: ''
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const composed = `Hi SR Digital, I want a FREE lead audit.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nArea: ${formData.area}\nMonthly Ads Budget: ${formData.budget}\nInventory/Notes: ${formData.message || "—"}\n\nPlease share the best strategy for Delhi NCR real estate leads.`;
    window.open(buildWhatsAppLink(composed), "_blank");
  };

  const caseStudies = [
    {
      title: "Luxury 3BHK Project, Gurgaon",
      problem: "Receiving high volume of 'junk' leads from generic Facebook ads. CPL was ₹450 but site visits were less than 2%.",
      solution: "Implemented narrow interest targeting (Luxury properties + HNI) and replaced the lead form with a high-intent WhatsApp funnel.",
      result: "45% reduction in CPL (now ₹240) and site visit conversion jumped to 8%. Generated 14 bookings in 3 months.",
      metric: "45% CPL Cut",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Mid-Segment Residential, Noida",
      problem: "Campaigns were stagnant with low lead volume. Client was struggling to fill site visit slots for a new tower launch.",
      solution: "Launched a Google Search campaign targeting specific sector keywords and introduced a 'Limited Time Offer' creative hook.",
      result: "Generated 210+ high-quality leads in the first 30 days. Site visit slots were fully booked for 4 consecutive weekends.",
      metric: "210+ Monthly Leads",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Commercial Retail Space, Ghaziabad",
      problem: "Phone inquiries were mostly from people with low budgets. Marketing spend was being wasted on unqualified clicks.",
      solution: "Developed a custom landing page with a multi-step qualification form that pre-vetted leads based on their investment budget.",
      result: "Lead quality score improved by 70%. Lead-to-call conversion reached 60%, resulting in 5 high-value retail leases signed.",
      metric: "70% Quality Boost",
      color: "from-orange-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen text-gray-100 mesh-bg selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#070A12]/85 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo />
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-400">
            <a href="#offers" className="hover:text-white transition-colors">What You Get</a>
            <a href="#results" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_E164}`} className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
              <Phone size={14} className="text-indigo-400" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <a href={buildWhatsAppLink(WHATSAPP_DEFAULT_MSG)} target="_blank" className="brand-gradient px-5 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
              <MessageSquare size={14} className="text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Trusted by 50+ Delhi NCR Realtors
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Get more site visits & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">qualified leads</span>
              <br/> within 7–14 days.
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              SR Digital builds premium ad creatives + landing funnels that convert. We focus on <strong>high-intent buyers</strong> (location + budget filters) in the Delhi NCR region.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href={buildWhatsAppLink(WHATSAPP_DEFAULT_MSG)} target="_blank" className="px-8 py-4 rounded-2xl bg-white text-[#070A12] font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 group shadow-xl">
                Get Free Lead Plan
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex -space-x-3 items-center ml-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 10}/100`} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-[#070A12] object-cover" />
                ))}
                <div className="pl-6 text-sm">
                  <div className="font-bold">4.9/5 Average Rating</div>
                  <div className="text-gray-500">Based on campaign ROI</div>
                </div>
              </div>
            </div>

            {/* Quick Offer Highlight Box */}
            <div className="p-1 rounded-2xl bg-gradient-to-r from-orange-500/40 via-indigo-500/40 to-cyan-500/40 max-w-2xl">
              <div className="bg-[#0B1020] rounded-[calc(1rem+4px)] p-6 flex flex-col md:flex-row items-center gap-6 border border-white/5 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 border border-orange-500/20">
                  <Clock size={28} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="text-orange-500 font-black uppercase text-xs tracking-widest flex items-center gap-1">
                      <Sparkles size={14} /> Quick Offer
                    </span>
                    <span className="bg-orange-500 text-[#070A12] text-[10px] font-black px-2 py-0.5 rounded-full animate-bounce">
                      LIMITED SLOTS
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Free 15-min strategy call + ad account audit</h4>
                  <p className="text-sm text-gray-400">Discover where your lead funnel is leaking money. Zero strings attached.</p>
                </div>
                <button 
                  onClick={() => window.open(buildWhatsAppLink("Hi SR Digital, I want to book my free 15-min strategy call and ad account audit. Please share the next available slot!"), "_blank")}
                  className="px-6 py-3 rounded-xl bg-orange-500 text-[#070A12] font-black text-sm hover:bg-orange-400 transition-all whitespace-nowrap shadow-lg shadow-orange-500/20 active:scale-95"
                >
                  Book Slot
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/5">
              {[
                { icon: <CheckCircle2 className="text-indigo-500" size={20} />, text: "No Long-term lock-in" },
                { icon: <MapPin className="text-cyan-500" size={20} />, text: "Delhi • Gurgaon • Noida" },
                { icon: <TrendingUp className="text-emerald-500" size={20} />, text: "Weekly Quality Reviews" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div id="leadForm" className="lg:col-span-5 bg-[#0B1020] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden animate-fade-in transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[80px]" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Free Lead Audit</h3>
              <p className="text-gray-400 text-sm mb-6">Fill details — we’ll share a lead plan + estimated CPL range for your inventory.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone (WhatsApp)</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="98XXXXXXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Area</label>
                    <select 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all appearance-none"
                      value={formData.area}
                      onChange={e => setFormData({...formData, area: e.target.value})}
                    >
                      <option value="" disabled className="bg-[#0B1020]">Select Area</option>
                      {AREAS.map(a => <option key={a} value={a} className="bg-[#0B1020]">{a}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Budget</label>
                    <select 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all appearance-none"
                      value={formData.budget}
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="" disabled className="bg-[#0B1020]">Select Budget</option>
                      {BUDGET_RANGES.map(b => <option key={b} value={b} className="bg-[#0B1020]">{b}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Selling Project</label>
                  <textarea 
                    placeholder="Example: 3BHK in Sector 150 Noida, budget 1.2Cr"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all min-h-[80px]"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="w-full brand-gradient py-4 rounded-xl font-bold text-lg shadow-xl shadow-indigo-500/20 hover:opacity-90 transition-all">
                  🚀 Get My Lead Plan
                </button>
              </form>
              <p className="text-[10px] text-center text-gray-500 mt-4 leading-relaxed">
                By clicking, you agree to be contacted via WhatsApp/Call. <br/> Your data is 100% private.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Offers Section */}
      <section id="offers" className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic tracking-tight underline decoration-indigo-500/30">Everything we do is built to CONVERT.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just run ads; we build sales machines for NCR property dealers.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "High-Intent Targeting", desc: "We filter by location, budget segment, and specific project interest signals.", icon: <Target className="text-indigo-400" /> },
              { title: "Call + WhatsApp Funnel", desc: "Optimized landing pages that encourage one-tap WhatsApp inquiries and direct calls.", icon: <Zap className="text-cyan-400" /> },
              { title: "Conversion Tracking", desc: "Know exactly which ad brought which call. Data-driven optimization at its best.", icon: <BarChart3 className="text-emerald-400" /> },
              { title: "Premium Creatives", desc: "Scroll-stopping video tours and project hooks that build trust before they even talk to you.", icon: <Layers className="text-orange-400" /> },
              { title: "Lead Quality Optimization", desc: "Weekly manual reviews to filter out junk leads and focus on high-ticket buyers.", icon: <TrendingUp className="text-purple-400" /> },
              { title: "Fast Launch", desc: "Go live with a full tracking setup and high-converting funnel in less than 7 days.", icon: <Rocket className="text-rose-400" /> }
            ].map((feature, idx) => (
              <div key={idx} className={`p-8 rounded-[2rem] bg-[#0B1020] border border-white/5 hover:border-indigo-500/30 transition-all group reveal reveal-delay-${(idx % 3) + 1}`}>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section (Case Studies) */}
      <section id="results" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Real Results for <span className="text-indigo-400">NCR Realtors</span></h2>
              <p className="text-gray-400">See how we solved specific challenges for property dealers in Delhi, Noida, and Gurgaon.</p>
            </div>
            <a href={buildWhatsAppLink(WHATSAPP_DEFAULT_MSG)} target="_blank" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
              View all results <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className={`group flex flex-col h-full bg-[#0B1020] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/10 transition-all reveal reveal-delay-${idx + 1}`}>
                <div className={`p-6 bg-gradient-to-r ${study.color} flex justify-between items-center`}>
                  <div className="text-white font-bold tracking-tight text-sm uppercase">Case Study</div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md">
                    {study.metric}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-xl font-bold mb-6 text-white leading-tight">{study.title}</h4>
                  
                  <div className="space-y-6 flex-1">
                    <div className="flex gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400 h-fit">
                        <AlertCircle size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Problem</div>
                        <p className="text-sm text-gray-400 leading-relaxed">{study.problem}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-indigo-500/10 text-indigo-400 h-fit">
                        <Lightbulb size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Solution</div>
                        <p className="text-sm text-gray-400 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-emerald-500/10 text-emerald-400 h-fit">
                        <Trophy size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Result</div>
                        <p className="text-sm text-gray-300 font-medium leading-relaxed italic">"{study.result}"</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <button onClick={() => window.open(buildWhatsAppLink(`Hi SR Digital, I saw your case study on ${study.title}. I have a similar project and want to achieve these results.`), "_blank")} className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all">
                      Get Similar Results
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-[#0B1020] rounded-[3rem] p-12 border border-white/5 relative overflow-hidden reveal">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 blur-[100px]" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div className="reveal reveal-delay-1">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Our Simple 4-Step Process</h2>
                <p className="text-gray-400">Consistent lead flow is a science, not a gamble.</p>
              </div>
              <a href={buildWhatsAppLink(WHATSAPP_DEFAULT_MSG)} target="_blank" className="brand-gradient px-8 py-4 rounded-2xl font-bold reveal reveal-delay-2">Start Your Audit</a>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Audit", desc: "We analyze your inventory, area, and current funnel performance." },
                { step: "02", title: "Build", desc: "We design creatives, set up landing pages, and install tracking pixels." },
                { step: "03", title: "Launch", desc: "Campaigns go live with aggressive testing on keywords and interests." },
                { step: "04", title: "Optimize", desc: "Weekly reporting + lead quality feedback loops to reduce your CPL." }
              ].map((item, idx) => (
                <div key={idx} className={`relative reveal reveal-delay-${idx + 1}`}>
                  <div className="text-5xl font-black text-white/5 absolute -top-4 -left-2">{item.step}</div>
                  <div className="relative pt-4">
                    <h5 className="font-bold text-xl mb-3 text-white">{item.title}</h5>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Quick answers for busy Delhi NCR realtors.</p>
        </div>

        <div className="space-y-4 reveal">
          {[
            { q: "How soon can leads start coming?", a: "Typically within 7–14 days after launch, depending on inventory, budget, and target area competition." },
            { q: "Do you handle Google Ads and Meta Ads both?", a: "Yes — we run Google Search/Display/YouTube + Meta (Facebook/Instagram) depending on your goal and segment." },
            { q: "Will I get call + WhatsApp leads?", a: "Yes — we optimize for calls/WhatsApp clicks and keep a form option for serious buyers who prefer details." },
            { q: "Do you require a long-term contract?", a: "No long-term lock-ins. We focus on performance and transparent monthly reporting." }
          ].map((item, idx) => (
            <details key={idx} className="group bg-[#0B1020] border border-white/5 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors">
                <span className="font-bold text-lg pr-8">{item.q}</span>
                <ChevronDown className="text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-0">
                {item.a}
              </div>
            </details>
          ))}

          <div className="pt-8 text-center reveal reveal-delay-2">
             <a href={buildWhatsAppLink(WHATSAPP_DEFAULT_MSG)} target="_blank" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl brand-gradient font-bold text-lg shadow-xl shadow-indigo-500/20 hover:opacity-90 transition-all">
                🚀 Get My Lead Plan
                <ArrowRight size={20} />
             </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 px-4 mb-20 md:mb-0 reveal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-8">
            <Logo />
            <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
            <div>
              <div className="text-gray-400 font-bold mb-1">Delhi NCR Performance Marketing</div>
              <div className="text-gray-500 text-sm">Gurgaon • Noida • Delhi • Ghaziabad</div>
              <div className="text-gray-500 text-sm mt-1">Call/WhatsApp: +91 {PHONE_DISPLAY}</div>
            </div>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SR Digital. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#070A12]/85 backdrop-blur-xl border-t border-white/10 flex gap-3">
        <a href={`tel:${PHONE_E164}`} className="flex-1 bg-white/5 border border-white/10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
          <Phone size={18} />
          Call
        </a>
        <a href={buildWhatsAppLink(WHATSAPP_DEFAULT_MSG)} target="_blank" className="flex-1 brand-gradient py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
          <MessageSquare size={18} />
          WhatsApp
        </a>
      </div>

      <LeadStrategyChat />
    </div>
  );
};

export default App;
