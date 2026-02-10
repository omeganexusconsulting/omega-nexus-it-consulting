
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Zap, Users, Globe } from 'lucide-react';
import { SERVICES, getIcon } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[100px] opacity-60"></div>
          <div className="absolute top-[60%] -right-[5%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Zap size={14} /> Omega Nexus IT Consulting
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                Engineering <span className="text-indigo-600 italic">Unrivaled</span> Digital Resilience.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                Omega Nexus provides premium IT consulting and cybersecurity strategies for 
                global leaders navigating the AI-first era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                  Discuss a Project <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-slate-50 transition-all">
                  About the Nexus
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[10,11,12,13].map(i => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i}/100`} alt="Client" />
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400 gap-0.5 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-medium text-slate-500">Trusted by Fortune 500 partners</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden aspect-square lg:aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                  alt="High Tech Visualization" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-effect p-6 rounded-2xl flex items-center gap-4 border border-white/40">
                  <div className="bg-indigo-600 text-white p-3 rounded-xl">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 tracking-tight">.</h4>
                    <p className="text-sm text-slate-500">.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl font-bold mb-2 tracking-tighter">99.99%</div>
            <div className="text-slate-400 text-sm">Target Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 tracking-tighter">500+</div>
            <div className="text-slate-400 text-sm">Security Audits</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 tracking-tighter">24/7</div>
            <div className="text-slate-400 text-sm">Global SOC Operations</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 tracking-tighter">15M+</div>
            <div className="text-slate-400 text-sm">Lines of Code Audited</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-4">Core Competencies</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Expertise that powers scale.</h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We deliver the specialized knowledge required to compete and dominate 
              in an increasingly complex global technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-all group hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {getIcon(s.icon)}
                </div>
                <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.description}</p>
                <Link to="/services" className="text-indigo-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Service <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
