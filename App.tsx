
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import About from './pages/About';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 tracking-tighter">
              OMEGA NEXUS
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-600 hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-white text-2xl font-bold mb-6 tracking-tighter">OMEGA NEXUS</h2>
        <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
          Architecting the future of digital enterprise. We provide premium IT consulting, 
          cloud strategy, and cybersecurity for global leaders.
        </p>
        <div className="flex space-x-4">
          <Github className="w-5 h-5 hover:text-white cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-6">Explore</h3>
        <ul className="space-y-4">
          <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          <li><Link to="/services" className="hover:text-white">Services</Link></li>
          <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-6">Contact</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3"><Mail size={16} /> info@omeganexus.io</li>
          <li className="flex items-center gap-3"><Phone size={16} /> +1 (555) NEXUS-IT</li>
          <li className="flex items-center gap-3"><MapPin size={16} /> Silicon Valley, CA</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-sm text-center">
      © {new Date().getFullYear()} Omega Nexus IT Consulting Services. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
