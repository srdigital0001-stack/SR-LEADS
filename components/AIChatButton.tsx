
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: "Hi! I'm SR Digital's AI advisor. Thinking of running ads for your property in Delhi NCR? Ask me about CPL, target areas, or budget advice!"}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a professional real estate marketing consultant for 'SR Digital' agency in Delhi NCR. 
          Respond concisely. Help the user understand lead generation on Google/Meta ads for Indian real estate. 
          Focus on Gurgaon, Noida, and Delhi. Mention that Site Visits are the ultimate goal. 
          Suggest they contact SR Digital at +91 9211841593 for a full audit.`
        }
      });
      
      setMessages(prev => [...prev, {role: 'bot', text: response.text || "I'm having trouble connecting right now."}]);
    } catch (err) {
      setMessages(prev => [...prev, {role: 'bot', text: "Sorry, I'm resting. Please call +91 9211841593 for immediate help."}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 z-[100]">
      {isOpen ? (
        <div className="w-[320px] sm:w-[400px] h-[500px] bg-slate-900 border border-indigo-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <div className="p-4 bg-indigo-600 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fa-solid fa-robot text-white"></i>
              </div>
              <span className="text-white font-bold text-sm">Strategy Advisor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-950/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-indigo-600 text-white' : 'glass-card text-slate-200'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="glass-card p-3 rounded-2xl text-slate-400 text-xs animate-pulse">
                  Analyzing strategy...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask about ads..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-500 transition-colors">
              <i className="fa-solid fa-paper-plane text-white text-sm"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-2xl shadow-indigo-500/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        >
          <div className="absolute -top-2 -left-2 bg-emerald-500 w-4 h-4 rounded-full border-2 border-slate-900 animate-pulse"></div>
          <i className="fa-solid fa-robot text-2xl group-hover:rotate-12 transition-transform"></i>
        </button>
      )}
    </div>
  );
};

export default AIChatButton;
