
import React, { useState } from 'react';
import { JOB_POSTINGS } from '../constants';
import { JobPosting, JobApplication } from '../types';
import { Briefcase, MapPin, Clock, ArrowRight, X, CheckCircle2, Loader2 } from 'lucide-react';
import { processJobApplication } from '../services/geminiService';

const ApplicationModal = ({ job, onClose }: { job: JobPosting; onClose: () => void }) => {
  const [formData, setFormData] = useState<JobApplication>({
    name: '',
    email: '',
    jobId: job.id,
    jobTitle: job.title,
    resume: null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Process via Gemini to simulate application acknowledgment
    const response = await processJobApplication({
      name: formData.name,
      jobTitle: job.title,
      coverLetter: formData.coverLetter
    });
    
    setAiResponse(response);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Application Sent!</h3>
          <p className="text-slate-600 mb-6 whitespace-pre-line leading-relaxed italic">
            "{aiResponse}"
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Apply for {job.title}</h3>
            <p className="text-slate-500 text-sm">{job.department} • {job.location}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Resume (PDF)</label>
            <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors bg-slate-50">
              <input 
                required
                type="file" 
                accept=".pdf"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={e => setFormData({...formData, resume: e.target.files ? e.target.files[0] : null})}
              />
              <div className="text-slate-500">
                {formData.resume ? (
                  <span className="text-indigo-600 font-semibold">{formData.resume.name}</span>
                ) : (
                  <span>Click to upload or drag and drop</span>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Cover Letter / Note</label>
            <textarea 
              rows={4}
              placeholder="Tell us why you're a great fit..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
              value={formData.coverLetter}
              onChange={e => setFormData({...formData, coverLetter: e.target.value})}
            />
          </div>
          
          <button 
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50 transition-all"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  return (
    <div className="pb-24">
      <div className="bg-slate-900 py-24 px-4 lg:px-8 text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Work with SOMETHING.</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Join a elite team of problem solvers architecting the next era of digital infrastructure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Open Positions</h2>
          <div className="flex gap-4">
            <span className="text-slate-500 font-medium">Filter by:</span>
            <select className="bg-white border-none text-slate-900 font-semibold outline-none cursor-pointer">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Sales</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {JOB_POSTINGS.map((job) => (
            <div 
              key={job.id} 
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between group"
            >
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {job.title}
                  </h3>
                  <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-slate-500">
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    <Briefcase size={16} /> {job.department}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    <MapPin size={16} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    <Clock size={16} /> Posted 2d ago
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(job)}
                className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-600 transition-all flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedJob && <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />}

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl">
            <h4 className="text-xl font-bold mb-4">Remote First</h4>
            <p className="text-slate-500 leading-relaxed">Work from anywhere and flexible hours.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl">
            <h4 className="text-xl font-bold mb-4">Health & Wellness</h4>
            <p className="text-slate-500 leading-relaxed">Comprehensive insurance, mental health support</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl">
            <h4 className="text-xl font-bold mb-4">Continuous Learning</h4>
            <p className="text-slate-500 leading-relaxed">conferences, certifications, and books.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
