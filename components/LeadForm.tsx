
import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    budget: '',
    inventory: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi SR Digital, I want a FREE lead audit.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AArea: ${formData.area}%0ABudget: ${formData.budget}%0AInventory: ${formData.inventory}%0A%0APlease share the strategy.`;
    window.open(`https://wa.me/919211841593?text=${message}`, '_blank');
  };

  const inputClass = "w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-slate-600";
  const labelClass = "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Your Name</label>
          <input 
            required
            type="text" 
            placeholder="Rahul" 
            className={inputClass}
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className={labelClass}>WhatsApp No.</label>
          <input 
            required
            type="tel" 
            placeholder="98xxxxxx" 
            className={inputClass}
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Focus Area</label>
        <select 
          required
          className={inputClass}
          value={formData.area}
          onChange={e => setFormData({...formData, area: e.target.value})}
        >
          <option value="" disabled className="bg-slate-900">Select City</option>
          <option value="Gurgaon" className="bg-slate-900">Gurgaon</option>
          <option value="Noida" className="bg-slate-900">Noida</option>
          <option value="Delhi" className="bg-slate-900">Delhi</option>
          <option value="Faridabad" className="bg-slate-900">Faridabad</option>
          <option value="Ghaziabad" className="bg-slate-900">Ghaziabad</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Monthly Ads Budget</label>
        <select 
          required
          className={inputClass}
          value={formData.budget}
          onChange={e => setFormData({...formData, budget: e.target.value})}
        >
          <option value="" disabled className="bg-slate-900">Select Budget</option>
          <option value="15k-30k" className="bg-slate-900">₹15k – ₹30k</option>
          <option value="30k-60k" className="bg-slate-900">₹30k – ₹60k</option>
          <option value="60k-1L" className="bg-slate-900">₹60k – ₹1L</option>
          <option value="1L+" className="bg-slate-900">₹1L+</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Inventory Type</label>
        <textarea 
          placeholder="e.g. 3BHK Luxury Flats in Sec 150" 
          className={`${inputClass} h-24 resize-none`}
          value={formData.inventory}
          onChange={e => setFormData({...formData, inventory: e.target.value})}
        ></textarea>
      </div>

      <button 
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-95 transition-all"
      >
        🚀 GET MY LEAD PLAN
      </button>

      <p className="text-[10px] text-center text-slate-500 leading-tight px-4">
        By clicking, you agree to receive lead reports via WhatsApp. We value your privacy.
      </p>
    </form>
  );
};

export default LeadForm;
