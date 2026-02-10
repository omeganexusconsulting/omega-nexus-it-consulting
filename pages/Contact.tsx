
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2, Send } from 'lucide-react';
import { ContactFormData } from '../types';
import { processContactInquiry } from '../services/geminiService';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [aiAcknowledge, setAiAcknowledge] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Call Gemini to simulate an email trigger and generate a professional response
    const response = await processContactInquiry({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });

    setAiAcknowledge(response);
    setStatus('success');
  };

  return (
    <div className="pb-24">
      <div className="bg-indigo-600 py-24 px-4 lg:px-8 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Let's build something.</h1>
          <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Ready to evolve your digital infrastructure? Contact us to schedule a strategic 
            consultation with our engineering leadership.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-100">
            {status === 'success' ? (
              <div className="py-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto italic whitespace-pre-line leading-relaxed">
                  "{aiAcknowledge}"
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Swathi M"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all outline-none bg-slate-50"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="swathi@mail.com"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all outline-none bg-slate-50"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Company (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="Enter your organization"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all outline-none bg-slate-50"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">How can we help?</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="Briefly describe your project goals..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all outline-none bg-slate-50 resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full sm:w-auto bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 disabled:opacity-70"
                >
                  {status === 'submitting' ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Submit Inquiry</>}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-10">Contact Details</h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email us</h4>
                    <p className="text-slate-400">hello@omeganexus.com</p>
                    <p className="text-slate-400">support@omeganexus.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call us</h4>
                    <p className="text-slate-400">+91 8919907825 </p>
                    <p className="text-slate-400">Mon - Fri, 9am - 6pm IST</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Visit us</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Plot No 198/2, PNR Colony RN 14,<br />
                      Hyderabad,<br />
                      Pin 502032
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
