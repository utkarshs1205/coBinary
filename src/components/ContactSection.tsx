import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Mail, MessageSquare, Send, CheckCircle, Copy, Check, Clock, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || '3D Modeling & CGI',
    budget: '$5,000 - $10,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B600A8', '#7621B0', '#BE4C00', '#00FF87', '#FFFFFF'],
        });
      } catch {
        // Safe fallback
      }
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('founders@cobinary.studio');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] py-24 px-5 sm:px-8 md:px-10 border-t border-[#1C1F26] relative z-30 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn y={30} className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8] px-3.5 py-1 rounded-full bg-[#1F1026] border border-[#48145C] inline-block mb-4">
            Let&apos;s Build Together
          </span>
          <h2 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            Start A Project With coBinary
          </h2>
          <p className="text-[#A2B1BC] text-sm sm:text-base max-w-xl mx-auto mt-4 font-light">
            Tell us about your brand, product, or ideas. You’ll hear directly from Jack &amp; Ishant within 4 hours.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Availability */}
          <FadeIn delay={0.1} y={20} className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#131418] border border-[#232630] p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold uppercase text-white tracking-wide">
                Direct Founder Desk
              </h3>
              <p className="text-sm text-[#8E9CA8] font-light leading-relaxed">
                We believe the best client relationships start with direct communication between creators and visionaries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#1A1C22] border border-[#2A2E3A]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#B600A8]" />
                    <div>
                      <div className="text-xs text-[#8E9CA8] uppercase">Email Us</div>
                      <div className="text-sm font-mono text-[#D7E2EA]">founders@cobinary.studio</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#252834] hover:bg-[#333746] text-[#A2B1BC] hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#00FF87]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1A1C22] border border-[#2A2E3A]">
                  <Clock className="w-5 h-5 text-[#00FF87]" />
                  <div>
                    <div className="text-xs text-[#8E9CA8] uppercase">Response Time</div>
                    <div className="text-sm text-white font-medium">Guaranteed reply within 4 hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1A1C22] border border-[#2A2E3A]">
                  <Globe className="w-5 h-5 text-[#00E5FF]" />
                  <div>
                    <div className="text-xs text-[#8E9CA8] uppercase">Global Availability</div>
                    <div className="text-sm text-white font-medium">EST / IST / GMT timezone coverage</div>
                  </div>
                </div>
              </div>

              {/* Current Status Badge */}
              <div className="pt-4 border-t border-[#232630] flex items-center gap-2 text-xs font-mono text-[#BBCCD7]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87] animate-ping" />
                <span>Currently booking Q2 &amp; Q3 client slots</span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Contact Form */}
          <FadeIn delay={0.2} y={20} className="lg:col-span-7">
            <div className="rounded-3xl bg-[#131418] border border-[#232630] p-6 sm:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#1A2E20] border-2 border-[#00FF87] flex items-center justify-center text-[#00FF87] mb-2">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold uppercase text-white tracking-wide">
                      Message Received!
                    </h4>
                    <p className="text-sm text-[#A2B1BC] max-w-md font-light leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>! Jack and Ishant have received your project brief. We’ll review your goals and reach out to <span className="text-white font-mono">{formData.email}</span> within 4 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-[#252834] text-xs uppercase font-medium text-[#D7E2EA] hover:bg-[#323646] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A636F] focus:outline-none focus:border-[#B600A8] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A636F] focus:outline-none focus:border-[#B600A8] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-2">
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Brand or Studio Name"
                          className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A636F] focus:outline-none focus:border-[#B600A8] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-2">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                        >
                          <option value="₹10,000 - ₹25,000">₹10,000 – ₹25,000</option>
                          <option value="₹25,000 - ₹50,000">₹25,000 – ₹50,000</option>
                          <option value="₹50,000 - ₹1,00,000">₹50,000 – ₹1,00,000</option>
                          <option value="₹1,00,000+">₹1,00,000+ (Full Ecosystem / Retainer)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-2">
                        Primary Service Needed
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          '3D Modeling & CGI',
                          'Web Experience',
                          'Motion & Shoots',
                          'AI Automation',
                          'Full Brand Launch',
                          'Custom Retainer',
                        ].map((serv) => (
                          <button
                            key={serv}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: serv })}
                            className={`px-3 py-2 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                              formData.service === serv
                                ? 'bg-[#B600A8]/20 border-[#B600A8] text-white font-medium'
                                : 'bg-[#181920] border-[#2A2E3A] text-[#8E9CA8] hover:border-[#404655]'
                            }`}
                          >
                            {serv}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-2">
                        Project Overview *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you're creating, key deadlines, links to references, or your vision..."
                        className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A636F] focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
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
                      className="w-full py-4 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
