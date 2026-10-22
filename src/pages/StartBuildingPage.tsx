import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
import { Mail, Send, CheckCircle, Copy, Check, Clock, Globe, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StartBuildingPageProps {
  initialService?: string;
  onNavigate: (target: string) => void;
}

export const StartBuildingPage: React.FC<StartBuildingPageProps> = ({
  initialService = '',
  onNavigate,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'Web Experience',
    budget: '₹25,000 – ₹50,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 75,
          origin: { y: 0.5 },
          colors: ['#F5A882', '#B600A8', '#7621B0', '#00FF87', '#FFFFFF'],
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

  const serviceOptions = [
    'Websites & Apps',
    'Cybersecurity & Testing',
    'AI/ML & Automation',
    'Business Tech Consulting',
    'Digital Marketing & Growth',
    'Launch (₹9,999 – ₹14,999)',
    'Growth (₹19,999 – ₹34,999)',
    'Scale (₹39,999+)',
    'Consultancy (₹999)',
    'Custom Scope',
  ];

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] min-h-screen w-full relative overflow-x-clip font-sans antialiased selection:bg-[#B600A8] selection:text-white flex flex-col justify-between">
      {/* Top Navbar */}
      <div className="w-full pt-2">
        <Navbar onOpenContact={() => {}} onNavigate={onNavigate} />
      </div>

      {/* Atmospheric Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[400px] bg-gradient-to-b from-[#F5A882]/10 via-[#B600A8]/8 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-5 sm:px-8 md:px-10 pt-10 sm:pt-16 pb-20 sm:pb-28 w-full select-none">
        {/* Page Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <FadeIn delay={0.1} y={20}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1026] border border-[#48145C] text-[#F5A882] text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} y={25}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[0.98] mb-5">
              Start A Project With coBinary
            </h1>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-xs sm:text-sm md:text-base text-[#9FAEC0] leading-relaxed max-w-xl mx-auto">
              Tell us about your brand, product, or ideas. You’ll hear directly from Jack &amp; Ishant within 4 hours.
            </p>
          </FadeIn>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Availability */}
          <FadeIn delay={0.15} y={20} className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#131418] border border-[#232630] p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-xl font-bold uppercase text-white tracking-wide">
                Direct Founder Desk
              </h2>
              <p className="text-xs sm:text-sm text-[#8E9CA8] font-light leading-relaxed">
                We believe the best client relationships start with direct communication between creators and visionaries. No middle managers or junior handoffs.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Box */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#1A1C22] border border-[#2A2E3A]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#B600A8]" />
                    <div>
                      <div className="text-[10px] text-[#8E9CA8] uppercase font-mono">Email Us</div>
                      <div className="text-xs sm:text-sm font-mono text-[#D7E2EA]">founders@cobinary.studio</div>
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

                {/* Response Time */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1A1C22] border border-[#2A2E3A]">
                  <Clock className="w-5 h-5 text-[#00FF87]" />
                  <div>
                    <div className="text-[10px] text-[#8E9CA8] uppercase font-mono">Response Time</div>
                    <div className="text-xs sm:text-sm text-[#D7E2EA] font-medium">Guaranteed reply within 4 hours</div>
                  </div>
                </div>

                {/* Global Availability */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1A1C22] border border-[#2A2E3A]">
                  <Globe className="w-5 h-5 text-[#00E5FF]" />
                  <div>
                    <div className="text-[10px] text-[#8E9CA8] uppercase font-mono">Global Availability</div>
                    <div className="text-xs sm:text-sm text-[#D7E2EA] font-medium">EST / IST / GMT timezone coverage</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#232630] flex items-center justify-between text-xs text-[#8E9CA8]">
                <span>Currently booking Q2 &amp; Q3 client slots</span>
                <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-ping" />
              </div>
            </div>

            {/* Direct Founders Commitment Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#1F1424] to-[#12131A] border border-[#3E1650]/60 p-6 text-xs text-[#BBCCD7] leading-relaxed">
              <span className="text-white font-semibold block mb-1 uppercase tracking-wider font-mono text-[11px]">
                Built by Builders
              </span>
              You will brainstorm, plan, and build directly with Jack &amp; Ishant. Transparent updates, high velocity, and zero agency friction.
            </div>
          </FadeIn>

          {/* Right Column: Interactive Form */}
          <FadeIn delay={0.2} y={20} className="lg:col-span-7">
            <div className="rounded-3xl bg-[#131418] border border-[#232630] p-6 sm:p-8 md:p-10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#1A2E20] border-2 border-[#00FF87] flex items-center justify-center text-[#00FF87] mb-2">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                      Message Received
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A2B1BC] max-w-sm font-light leading-relaxed">
                      Thank you for reaching out. Jack or Ishant will review your project details and reply within 4 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          service: 'Web Experience',
                          budget: '₹25,000 – ₹50,000',
                          message: '',
                        });
                      }}
                      className="mt-6 px-6 py-2.5 rounded-full bg-[#252834] text-xs uppercase font-medium text-[#D7E2EA] hover:bg-[#323646] transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                          placeholder="e.g. Alex Morgan"
                          className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A636F] focus:outline-none focus:border-[#F5A882] transition-colors"
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
                          className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A636F] focus:outline-none focus:border-[#F5A882] transition-colors"
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
                          className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A636F] focus:outline-none focus:border-[#F5A882] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-2">
                          Estimated Budget (INR ₹)
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5A882] transition-colors"
                        >
                          <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                          <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                          <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                          <option value="₹1,00,000+">₹1,00,000+ (Full Ecosystem / Retainer)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-[#8E9CA8] mb-2">
                        Primary Package / Service Needed
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {serviceOptions.map((serv) => (
                          <button
                            key={serv}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: serv })}
                            className={`px-3 py-2 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                              formData.service === serv
                                ? 'bg-gradient-to-r from-[#F5A882]/25 to-[#B600A8]/25 border-[#F5A882] text-white font-medium shadow-sm'
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
                        className="w-full bg-[#1B1D23] border border-[#2A2E3A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A636F] focus:outline-none focus:border-[#F5A882] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#F5A882] via-[#B600A8] to-[#7621B0] text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer disabled:opacity-50 shadow-[0_4px_25px_rgba(245,168,130,0.35)]"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit Project Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </main>

      {/* Page Footer */}
      <Footer onNavigate={onNavigate} onOpenContact={() => {}} />
    </div>
  );
};
