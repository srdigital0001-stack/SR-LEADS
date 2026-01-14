
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "How soon can I expect leads?",
      a: "Most of our Delhi NCR clients start receiving their first inquiries within 48 to 72 hours of the campaign going live."
    },
    {
      q: "Are these shared leads?",
      a: "Absolutely not. Every lead generated through your campaign is exclusive to you. We do not sell data to multiple brokers."
    },
    {
      q: "Which platform works best for NCR Real Estate?",
      a: "For high-ticket luxury properties, Google Search is king. For volume and affordable segments, Meta (FB/IG) tends to provide more scale."
    },
    {
      q: "What is your management fee?",
      a: "Our fees depend on your monthly ad spend and scope. We offer performance-based pricing for long-term partners."
    },
    {
      q: "Do you handle the creative part?",
      a: "Yes! We handle copywriting, graphic design, and video editing for all your property ads."
    }
  ];

  return (
    <section id="faq" className="scroll-mt-24 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Common Questions</h2>
      </div>

      <div className="space-y-4">
        {questions.map((item, i) => (
          <div key={i} className="glass-card rounded-2xl overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <span className="text-lg font-bold text-white">{item.q}</span>
              <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="px-8 pb-6 text-slate-400 leading-relaxed">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
