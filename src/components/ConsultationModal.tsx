/**
 * ConsultationModal Component
 * 
 * A compact modal form that triggers from CTA buttons like:
 * - "Request a Consultation" (Hero section)
 * - "Start a Conversation" (About section, case study pages)
 * 
 * Integrates with SheetDB API for lead capture
 */

import { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

// SheetDB API endpoint
const SHEETDB_API = 'https://sheetdb.io/api/v1/2c49qy6gf0507';

// Blocked email domains (personal/free email providers)
const BLOCKED_DOMAINS = [
  'gmail.com', 'yahoo.com', 'yahoo.co.in', 'hotmail.com', 'outlook.com',
  'live.com', 'aol.com', 'icloud.com', 'mail.com', 'protonmail.com',
  'zoho.com', 'yandex.com', 'gmx.com', 'rediffmail.com', 'inbox.com',
  'fastmail.com', 'tutanota.com', 'hey.com', 'me.com', 'msn.com',
];

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', company: '', message: '' });
      setErrors({});
      setStatus('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    const domain = email.split('@')[1]?.toLowerCase();
    if (BLOCKED_DOMAINS.includes(domain)) return 'Please use your corporate email address';
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch(SHEETDB_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [{
            Name: formData.name.trim(),
            Email: formData.email.trim().toLowerCase(),
            Company: formData.company.trim(),
            Message: formData.message.trim() || 'No message provided',
            Timestamp: new Date().toISOString(),
          }],
        }),
      });
      
      if (!response.ok) throw new Error('Failed to submit');
      setStatus('success');
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-lg bg-background rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center py-8 animate-in fade-in duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-5">
                <CheckCircle2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                Request Received
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest. I'll respond within 24-48 business hours.
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground">
                  Share your details and I'll reach out to schedule a conversation.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border mb-8" />

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label 
                    htmlFor="modal-name" 
                    className="block text-xs font-medium text-muted-foreground mb-2 tracking-[0.1em] uppercase"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-0 border-b-2 ${errors.name ? 'border-destructive' : 'border-border'} px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors`}
                    placeholder="Your full name"
                    disabled={status === 'submitting'}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="modal-email" 
                    className="block text-xs font-medium text-muted-foreground mb-2 tracking-[0.1em] uppercase"
                  >
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-0 border-b-2 ${errors.email ? 'border-destructive' : 'border-border'} px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors`}
                    placeholder="you@company.com"
                    disabled={status === 'submitting'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label 
                    htmlFor="modal-company" 
                    className="block text-xs font-medium text-muted-foreground mb-2 tracking-[0.1em] uppercase"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="modal-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-0 border-b-2 ${errors.company ? 'border-destructive' : 'border-border'} px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors`}
                    placeholder="Your organization"
                    disabled={status === 'submitting'}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="modal-message" 
                    className="block text-xs font-medium text-muted-foreground mb-2 tracking-[0.1em] uppercase"
                  >
                    Message <span className="text-muted-foreground/50 normal-case tracking-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-transparent border-0 border-b-2 border-border px-0 py-2 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    disabled={status === 'submitting'}
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-sm">
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errorMessage}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-background text-sm font-medium tracking-wide hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors group"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      START A CONVERSATION
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Privacy Note */}
              <p className="mt-6 text-xs text-muted-foreground text-center">
                Your information is kept confidential.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
