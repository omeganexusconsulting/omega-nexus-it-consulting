
import React from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  Code, 
  Cpu, 
  Search, 
  Users, 
  Zap, 
  Database,
  Globe,
  Headphones
} from 'lucide-react';
import { Service, JobPosting } from './types';

export const SERVICES: Service[] = [
  {
    id: 'cloud-infra',
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure, and cost-effective cloud solutions tailored to your business needs.',
    icon: 'Cloud'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security audits and managed protection to keep your data safe.',
    icon: 'ShieldCheck'
  },
  {
    id: 'software-dev',
    title: 'Custom Software',
    description: 'Bespoke applications built with modern tech stacks for high performance.',
    icon: 'Code'
  },
  {
    id: 'ai-consulting',
    title: 'AI & Data Science',
    description: 'Harness the power of LLMs and predictive analytics to drive growth.',
    icon: 'Cpu'
  }
];

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: 'se-01',
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We are looking for a React/Node expert to build mission-critical enterprise platforms.'
  },
  {
    id: 'sa-02',
    title: 'Cloud Architect',
    department: 'DevOps',
    location: 'Remote',
    type: 'Remote',
    description: 'Design and implement complex multi-cloud architectures for global clients.'
  },
  {
    id: 'cs-03',
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'New York, NY',
    type: 'Contract',
    description: 'Help our clients identify vulnerabilities and harden their infrastructure.'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Cloud': return <Cloud className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
    case 'Code': return <Code className="w-6 h-6" />;
    case 'Cpu': return <Cpu className="w-6 h-6" />;
    case 'Search': return <Search className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'Database': return <Database className="w-6 h-6" />;
    case 'Globe': return <Globe className="w-6 h-6" />;
    case 'Headphones': return <Headphones className="w-6 h-6" />;
    default: return <Zap className="w-6 h-6" />;
  }
};
