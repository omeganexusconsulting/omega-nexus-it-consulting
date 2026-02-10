
import React from 'react';
/* Import ArrowRight icon from lucide-react */
import { Target, Eye, Heart, Shield, Award, Zap, Users, ArrowRight } from 'lucide-react';

/* Use React.FC to properly type the component and handle the reserved 'key' prop in the parent component's loop */
const TeamMember: React.FC<{ name: string; role: string; image: string; bio: string }> = ({ name, role, image, bio }) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5]">
      <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <p className="text-white text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
    <h4 className="text-xl font-bold text-slate-900">{name}</h4>
    <p className="text-indigo-600 font-medium">{role}</p>
  </div>
);

export default function About() {
  const values = [
    { icon: <Shield size={24} />, title: "Unyielding Integrity", desc: "Trust is our primary currency. We act with transparency in every engagement." },
    { icon: <Zap size={24} />, title: "Radical Innovation", desc: "We don't just follow trends; we define the technological vanguard." },
    { icon: <Award size={24} />, title: "Operational Excellence", desc: "Precision in execution is not a goal—it is our standard operating procedure." },
    { icon: <Users size={24} />, title: "Collective Intelligence", desc: "Our strength lies in the synergy of our elite global talent pool." }
  ];

  const team = [
    { 
      name: "Swathi", 
      role: "Chief Technology Officer", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Former Lead Architect at major cloud providers, Swathi brings 20+ years of distributed systems expertise."
    },
    { 
      name: "Swathi", 
      role: "Human Resource", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "Renowned security researcher specializing in zero-trust architectures and forensic analysis."
    }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-4 lg:px-8 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tighter">The Nexus of <span className="text-indigo-500">Expertise</span>.</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
            Omega Nexus was founded on a simple premise: that complex technological challenges 
            require more than just engineers—they require visionaries.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-sm border border-slate-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-indigo-100 group-hover:text-indigo-600 transition-colors">
              <Target size={80} strokeWidth={1} />
            </div>
            <h3 className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4">Our Mission</h3>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Empowering enterprise via strategic precision.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our mission is to bridge the gap between legacy limitations and future possibilities. 
              We empower global enterprises through transformative technology, ensuring they lead 
              rather than follow in an increasingly digital world.
            </p>
          </div>

          <div className="bg-slate-900 p-10 lg:p-16 rounded-[2.5rem] text-white relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-slate-800 group-hover:text-indigo-500 transition-colors">
              <Eye size={80} strokeWidth={1} />
            </div>
            <h3 className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4">Our Vision</h3>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Setting the cornerstone of digital resilience.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We envision a world where technology is a seamless extension of business intent. 
              Omega Nexus strives to be the primary architect of digital resilience and 
              innovation for the world's most ambitious organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-4">Core Principles</h3>
            <h2 className="text-4xl font-bold text-slate-900">What drives us forward.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <h3 className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-4">The Leadership</h3>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Architects of Innovation.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our team consists of senior architects, AI researchers .
              
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-semibold text-slate-800">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                150+ Global Certifications
              </div>
              <div className="flex items-center gap-3 font-semibold text-slate-800">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                Average 12 years seniority
              </div>
              <div className="flex items-center gap-3 font-semibold text-slate-800">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                Expertise across 40+ tech stacks
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <TeamMember key={i} {...member} />
            ))}
            <div className="flex items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-2">Join the Nexus</h4>
                <p className="text-slate-500 text-sm mb-6">We are always looking for elite talent.</p>
                <a href="#/careers" className="text-indigo-600 font-bold hover:underline flex items-center justify-center gap-2">
                  View open roles <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
