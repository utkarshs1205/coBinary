import React, { useState, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
import Particles from '../components/Particles';
import {
  Star,
  CheckCircle2,
  Upload,
  X,
  Image as ImageIcon,
  Video as VideoIcon,
  Send,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

interface ReviewsPageProps {
  onOpenContact: (plan?: string) => void;
  onNavigate: (target: string) => void;
}

interface ClientReview {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  projectType: string;
  comment: string;
  date: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  mediaName?: string;
  avatar: string;
}

const INITIAL_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    name: 'Devendra Singh',
    role: 'Director',
    company: 'S.A.B.M Trading Co.',
    rating: 5,
    projectType: 'B2B Wholesale Catalog & Ordering',
    comment:
      'coBinary developed a premium B2B veterinary catalog platform for us. Their custom WhatsApp pre-filled ordering system has made wholesale order processing incredibly smooth and error-free. Highly recommended for commercial web engineering.',
    date: 'Recent Client',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    mediaUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    mediaType: 'image',
    mediaName: 'wholesale_catalog_preview.png',
  },
  {
    id: 'rev-2',
    name: 'Aman Verma',
    role: 'Founder',
    company: 'Buddy4Plant',
    rating: 5,
    projectType: 'E-commerce & Custom Interactive Filters',
    comment:
      'coBinary engineered our high-speed e-commerce storefront with custom plant care guidance. Our cart checkout conversion surged by 42% in the first 30 days post-launch. Their team is communicative, fast, and obsessed with quality.',
    date: 'Verified Client',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    mediaUrl: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&auto=format&fit=crop&q=80',
    mediaType: 'image',
    mediaName: 'buddy4plant_storefront.png',
  },
  {
    id: 'rev-3',
    name: 'Neha Sharma',
    role: 'Creative Director',
    company: 'Orchid Flame',
    rating: 5,
    projectType: '3D Worldbuilding & Luxury Brand Kit',
    comment:
      'From custom 3D web visuals to our luxury brand redesign, coBinary delivered a cinematic aesthetic that immediately elevated our market valuation and brand prestige. Jack & Ishant brought our vision alive without friction.',
    date: 'Verified Client',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    mediaUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    mediaType: 'image',
    mediaName: 'brand_3d_render.png',
  },
  {
    id: 'rev-4',
    name: 'Rohan Gupta',
    role: 'VP of Growth',
    company: 'GMI Solutions',
    rating: 5,
    projectType: 'B2B Client Funnel & Analytics',
    comment:
      'They automated our B2B onboarding funnel and integrated real-time analytics. Turnaround was exceptionally fast, highly professional, and communication was flawless from day one.',
    date: 'Verified Client',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'rev-5',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Nextlevel Studios',
    rating: 5,
    projectType: 'Full-Stack Web App & 3D CGI Showcase',
    comment:
      'Jack’s 3D product renders looked like Apple-grade CGI, while Ishant built our web app to load in under 600ms. We raised our seed round right off this new digital launch. Unbeatable technical execution.',
    date: 'Verified Client',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'rev-6',
    name: 'Sarah Lindqvist',
    role: 'Head of Growth',
    company: 'Vex Ventures',
    rating: 5,
    projectType: 'Fintech Interface & Lead Automation',
    comment:
      'We needed striking 3D visual assets for our tech fund launch. coBinary nailed the lighting and textures on the very first sprint, and the site went live ahead of schedule without a single bug.',
    date: 'Verified Client',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
];

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenContact, onNavigate }) => {
  const [reviews, setReviews] = useState<ClientReview[]>(INITIAL_REVIEWS);

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [projectType, setProjectType] = useState('Website & Development');
  const [comment, setComment] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMediaFile(file);
    const isVideo = file.type.startsWith('video');
    setMediaType(isVideo ? 'video' : 'image');

    const previewUrl = URL.createObjectURL(file);
    setMediaPreview(previewUrl);
  };

  const handleRemoveMedia = () => {
    if (mediaPreview) URL.revokeObjectURL(mediaPreview);
    setMediaFile(null);
    setMediaPreview(null);
    setMediaType(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newReview: ClientReview = {
        id: `rev-${Date.now()}`,
        name: name.trim(),
        role: role.trim() || 'Client Partner',
        company: company.trim() || 'Direct Client',
        rating,
        projectType,
        comment: comment.trim(),
        date: 'Just now',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        mediaUrl: mediaPreview || undefined,
        mediaType: mediaType || undefined,
        mediaName: mediaFile?.name,
      };

      setReviews([newReview, ...reviews]);
      setIsSubmitting(false);
      setSubmittedSuccess(true);

      // Reset fields
      setName('');
      setRole('');
      setCompany('');
      setComment('');
      setMediaFile(null);
      setMediaPreview(null);
      setMediaType(null);
      if (fileInputRef.current) fileInputRef.current.value = '';

      // Scroll to reviews list smoothly
      const el = document.getElementById('client-reviews-grid');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 700);
  };

  const scrollToForm = () => {
    const el = document.getElementById('post-review-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen w-full relative overflow-x-hidden font-sans antialiased selection:bg-sky-500 selection:text-white flex flex-col justify-between">
      {/* 1. Global Navigation Bar */}
      <div className="relative z-40 bg-[#0C0C0C]">
        <Navbar
          onOpenContact={() => onOpenContact()}
          onNavigate={onNavigate}
          activePage="reviews"
        />
      </div>

      {/* 2. Hero Header with Sky Blue & White Theme + Floating Particles */}
      <header className="relative w-full min-h-[440px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#E0F2FE]/40 to-white border-b border-sky-100">
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#0284C7', '#38BDF8', '#EF4444', '#93C5FD']}
            particleCount={120}
            particleSpread={13}
            speed={0.15}
            particleBaseSize={200}
            sizeRandomness={1.1}
            glow={0.7}
            twinkle={0.4}
            moveParticlesOnHover
            hoverEffect="parallax"
            particleHoverFactor={1.2}
            clickBurst
            cameraDistance={18}
            className="w-full h-full opacity-70"
          />
        </div>

        <div className="absolute top-0 right-1/4 w-[450px] h-[280px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none z-1" />
        <div className="absolute top-1/3 left-1/4 w-[320px] h-[200px] bg-rose-200/25 rounded-full blur-3xl pointer-events-none z-1" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center flex flex-col items-center">
          <FadeIn delay={0.08} y={15}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              Authentic Feedback &amp; Client Stories
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              What Our <span className="text-[#0284C7]">Clients Say</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15} y={15}>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto mb-7">
              Real endorsements from founders, product leaders, and creators who partnered with coBinary to build high-performance web platforms and 3D visual experiences.
            </p>
          </FadeIn>

          <FadeIn delay={0.22} y={15}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="px-8 sm:px-10 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-[0_6px_25px_rgba(2,132,199,0.3)] hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Post Your Review</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={() => onOpenContact('Client Inquiry')}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-sky-50 text-slate-700 border border-sky-200 font-semibold text-sm tracking-wide transition-all duration-200 shadow-sm cursor-pointer"
              >
                Start Your Project
              </button>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* 3. Trusted Metrics Banner */}
      <section className="w-full bg-white py-8 border-b border-sky-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">50+</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Platforms Shipped</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0284C7] font-mono">100%</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">5-Star Feedback</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">4.9/5</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono">0 Surprises</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Milestone Guarantees</div>
          </div>
        </div>
      </section>

      {/* 4. Client Reviews Grid */}
      <main id="client-reviews-grid" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center justify-center gap-1.5 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
            Verified Testimonials
          </span>
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight inline-block border-b-[3.5px] border-[#EF4444] pb-1">
              Client Endorsements &amp; Showcase
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Explore authentic experiences from founders across B2B wholesale, e-commerce, consumer tech, and luxury branding.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 items-stretch">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_35px_rgba(2,132,199,0.06)] hover:border-sky-300 hover:shadow-[0_15px_40px_rgba(2,132,199,0.12)] transition-all duration-300"
            >
              <div>
                {/* Header: Stars & Project Scope Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {rev.date}
                  </span>
                </div>

                {/* Project Scope Tag */}
                <div className="mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-sky-50 text-[#0284C7] font-semibold inline-block">
                    {rev.projectType}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal mb-5">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                {/* Attached Photo or Video Preview if present */}
                {rev.mediaUrl && (
                  <div className="mb-5 rounded-2xl overflow-hidden border border-sky-100 bg-slate-50 relative group">
                    {rev.mediaType === 'video' ? (
                      <video
                        src={rev.mediaUrl}
                        controls
                        className="w-full max-h-[190px] object-cover"
                      />
                    ) : (
                      <img
                        src={rev.mediaUrl}
                        alt={rev.mediaName || 'Client project work'}
                        className="w-full max-h-[190px] object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    {rev.mediaName && (
                      <div className="px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] flex items-center gap-1.5">
                        {rev.mediaType === 'video' ? (
                          <VideoIcon className="w-3 h-3 text-sky-400" />
                        ) : (
                          <ImageIcon className="w-3 h-3 text-sky-400" />
                        )}
                        <span className="truncate">{rev.mediaName}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-sky-100">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-sky-200"
                  loading="lazy"
                />
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-slate-900 truncate">{rev.name}</h4>
                  <p className="text-xs text-slate-500 truncate">
                    {rev.role} • <span className="font-medium text-slate-700">{rev.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Post Your Review Submission Form Section */}
        <section
          id="post-review-form"
          className="rounded-3xl bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 border border-sky-100 p-8 sm:p-12 md:p-14 shadow-[0_20px_50px_rgba(2,132,199,0.08)] relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold flex items-center justify-center gap-1.5 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                Client Feedback Form
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                Share Your Experience with coBinary
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Post your review, select your star rating, and upload project screenshots or video demos to inspire future partners.
              </p>
            </div>

            {submittedSuccess && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <strong className="font-bold">Thank you for your review!</strong> Your feedback and media have been posted to the showcase above.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Star Rating Picker */}
              <div className="flex flex-col items-center sm:items-start gap-2 pb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Your Rating
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 cursor-pointer transition-transform hover:scale-110"
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400 drop-shadow-sm'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-slate-500 ml-2">
                    {rating} of 5 Stars
                  </span>
                </div>
              </div>

              {/* Name and Designation Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Devendra Singh"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sky-100 text-slate-800 text-sm focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Role &amp; Company
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Director, S.A.B.M Trading Co."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sky-100 text-slate-800 text-sm focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 shadow-sm transition-all"
                  />
                </div>
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Service / Project Scope
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-sky-100 text-slate-800 text-sm focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 shadow-sm transition-all cursor-pointer"
                >
                  <option value="Website & Development">Website &amp; Development</option>
                  <option value="3D & CGI Motion Showcase">3D &amp; CGI Motion Showcase</option>
                  <option value="AI Automation & Systems">AI Automation &amp; Systems</option>
                  <option value="B2B E-commerce & Ordering Portal">B2B E-commerce &amp; Ordering Portal</option>
                  <option value="Brand Identity & Visual Kit">Brand Identity &amp; Visual Kit</option>
                  <option value="Technical Consultation & Advisory">Technical Consultation &amp; Advisory</option>
                </select>
              </div>

              {/* Written Review */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Review / Testimonial *
                </label>
                <textarea
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share details on your project outcome, communication with founders, and business results..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-sky-100 text-slate-800 text-sm focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 shadow-sm transition-all resize-none"
                />
              </div>

              {/* Photos & Videos Upload Zone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Upload Photo or Video (Optional)
                </label>

                {!mediaPreview ? (
                  <label
                    htmlFor="client-media-upload"
                    className="border-2 border-dashed border-sky-200 hover:border-[#0284C7] rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-white/70 hover:bg-sky-50/50"
                  >
                    <Upload className="w-8 h-8 text-[#0284C7] mb-2" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Click to upload photos or videos
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1">
                      Supports PNG, JPG, WEBP, MP4, WEBM (Max 50MB)
                    </span>
                    <input
                      ref={fileInputRef}
                      id="client-media-upload"
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="rounded-2xl border border-sky-200 bg-white p-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3 overflow-hidden">
                      {mediaType === 'video' ? (
                        <div className="w-16 h-14 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
                          <VideoIcon className="w-6 h-6 text-sky-400" />
                        </div>
                      ) : (
                        <img
                          src={mediaPreview}
                          alt="Uploaded preview"
                          className="w-16 h-14 rounded-lg object-cover shrink-0 border border-sky-100"
                        />
                      )}
                      <div className="overflow-hidden">
                        <p className="text-xs font-semibold text-slate-800 truncate">
                          {mediaFile?.name}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {mediaFile && `${(mediaFile.size / (1024 * 1024)).toFixed(2)} MB`} • {mediaType}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleRemoveMedia}
                      className="p-1.5 rounded-full hover:bg-rose-50 text-slate-400 hover:text-[#EF4444] transition-colors cursor-pointer"
                      title="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm tracking-wide transition-all shadow-[0_6px_25px_rgba(2,132,199,0.35)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Posting Your Review...' : 'Post Your Review'}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* 6. Global Footer */}
      <Footer onNavigate={onNavigate} onOpenContact={() => onOpenContact()} />
    </div>
  );
};
