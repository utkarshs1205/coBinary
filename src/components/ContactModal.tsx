import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Clock, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultPlan = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: defaultPlan || '3D Modeling & CGI',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultPlan) {
      setFormData((prev) => ({ ...prev, service: defaultPlan }));
    }
  }, [defaultPlan]);

  // Lock body scroll when modal is open
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.5 },
        });
      } catch {
        // safe fallback
      }
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('founders@cobinary.studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-xl rounded-3xl bg-[#121317] border-2 border-[#2F333E] p-6 sm:p-8 shadow-2xl z-10 my-auto text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1B1D23] hover:bg-[#282C37] text-[#A2B1BC] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#1A2E20] border-2 border-[#00FF87] flex items-center justify-center text-[#00FF87] mb-4">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">
                  Inquiry Dispatched!
                </h3>
                <p className="text-sm text-[#A2B1BC] max-w-sm mb-6 leading-relaxed">
                  Thanks for reaching out, <span className="text-white font-medium">{formData.name}</span>. Jack &amp; Ishant will review your project and email you back at <span className="text-white font-mono">{formData.email}</span> within 4 hours.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8]">
                    coBinary Direct Desk
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mt-1">
                    Let&apos;s Build Something Unforgettable
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#00FF87] font-mono mt-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Jack &amp; Ishant reply within 4 hours</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Liam Miller"
                      className="w-full bg-[#1A1C22] border border-[#2B2F3B] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#58616E] focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="liam@brand.com"
                      className="w-full bg-[#1A1C22] border border-[#2B2F3B] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#58616E] focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-1.5">
                      Service / Package
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#1A1C22] border border-[#2B2F3B] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                    >
                      <option value="3D Modeling & CGI">3D Modeling & CGI</option>
                      <option value="Photorealistic Rendering">Photorealistic Rendering</option>
                      <option value="Motion Design & Dynamic CGI">Motion Design & Dynamic CGI</option>
                      <option value="Web Design & Development">Web Design & Development</option>
                      <option value="AI Automation & Workflows">AI Automation & Workflows</option>
                      <option value="3D & Motion Sprint ($2,400)">3D & Motion Sprint ($2,400)</option>
                      <option value="Brand + Web Experience ($5,800)">Brand + Web Experience ($5,800)</option>
                      <option value="Web, 3D & AI Ecosystem ($9,500+)">Web, 3D & AI Ecosystem ($9,500+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a short overview of what you want to achieve..."
                      className="w-full bg-[#1A1C22] border border-[#2B2F3B] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#58616E] focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow:
                        '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                      outline: '2px solid white',
                      outlineOffset: '-3px',
                    }}
                    className="w-full py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer mt-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="text-xs text-[#8E9CA8] hover:text-[#D7E2EA] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Or copy direct email: founders@cobinary.studio</span>
                      {copied ? <Check className="w-3.5 h-3.5 text-[#00FF87]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
