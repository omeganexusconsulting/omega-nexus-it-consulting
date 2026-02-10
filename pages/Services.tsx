
import React from 'react';
import { SERVICES, getIcon } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

export default function Services() {
  return (
    <div className="pb-24">
      <div className="bg-slate-900 py-24 px-4 lg:px-8 text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Comprehensive technology solutions designed to solve the most complex 
          challenges facing modern businesses.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center p-8 lg:p-12 bg-white rounded-3xl shadow-sm border border-slate-100 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {service.description} We specialize in delivering end-to-end {service.title.toLowerCase()} 
                  infrastructure that integrates seamlessly with your existing workflow.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Enterprise scalability', '24/7 dedicated support', 'Compliance ready', 'Cost optimization'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="bg-green-100 text-green-600 p-1 rounded-full"><Check size={14} /></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all">
                  Consultation Request
                </button>
              </div>
              <div className="flex-1 w-full h-[400px] overflow-hidden rounded-2xl relative">
                <img 
                  src={`https://picsum.photos/seed/${service.id}/800/600`} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-24">
        <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Need a custom solution?</h3>
            <p className="text-indigo-100 mb-10 max-w-xl mx-auto">
              Our engineering team is ready to architect a bespoke strategy tailored 
              exactly to your business objectives.
            </p>
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2 mx-auto">
              Schedule a Workshop <ArrowRight size={20} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 rounded-full blur-[80px] -ml-32 -mb-32"></div>
        </div>
      </div>
    </div>
  );
}
