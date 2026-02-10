
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface JobApplication {
  name: string;
  email: string;
  jobId: string;
  jobTitle: string;
  resume: File | null;
  coverLetter: string;
}
