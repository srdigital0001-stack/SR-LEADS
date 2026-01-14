
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { getLeadStrategyAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const LeadStrategyChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am the SR Digital AI Lead Strategist. Ask me anything about generating real estate leads in Delhi NCR.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getLeadStrategyAdvice(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm not sure about that. Let's discuss it with our human team!" }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center gap-2 group"
        >
          <MessageCircle size={24} />
          <span className="hidden group-hover:block whitespace-nowrap pr-2 font-semibold">Free Lead Strategy AI</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-[#0B1020] border border-white/10 w-80 md:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[500px]">
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold">AI Lead Strategist</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-700 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[300px]"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl flex gap-2 ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white/5 text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  <div className="mt-1">
                    {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-gray-400 p-3 rounded-2xl rounded-tl-none animate-pulse text-xs">
                  Analyzing lead data...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How to get leads in Noida?"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-indigo-600 p-2 rounded-xl text-white hover:bg-indigo-500 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadStrategyChat;
