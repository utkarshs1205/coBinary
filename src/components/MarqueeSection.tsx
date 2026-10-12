import React, { useEffect, useRef, useState } from 'react';

const ALL_GIF_URLS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

// Row 1: first 11 images tripled
const ROW_1_SOURCE = ALL_GIF_URLS.slice(0, 11);
const ROW_1_IMAGES = [...ROW_1_SOURCE, ...ROW_1_SOURCE, ...ROW_1_SOURCE];

// Row 2: remaining 10 images tripled
const ROW_2_SOURCE = ALL_GIF_URLS.slice(11);
const ROW_2_IMAGES = [...ROW_2_SOURCE, ...ROW_2_SOURCE, ...ROW_2_SOURCE];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      // Scroll offset formula: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Row 1 moves RIGHT on scroll: translateX(offset - 200)
  const row1Transform = `translateX(${offset - 200}px)`;
  // Row 2 moves LEFT on scroll: translateX(-(offset - 200))
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative select-none"
    >
      {/* Subtle section header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end text-xs uppercase tracking-widest text-[#7E8B95]">
        <span>Recent 3D, CGI & Motion Archive</span>
        <span>Curated Works ({ALL_GIF_URLS.length})</span>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: moves RIGHT on scroll */}
        <div
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
          className="flex gap-3 transition-transform duration-75 ease-out whitespace-nowrap"
        >
          {ROW_1_IMAGES.map((url, i) => (
            <div
              key={`row1-${i}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#16171B] border border-[#23262E]/60 shadow-lg relative group"
            >
              <img
                src={url}
                alt={`3D work showcase ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Row 2: moves LEFT on scroll */}
        <div
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
          className="flex gap-3 transition-transform duration-75 ease-out whitespace-nowrap"
        >
          {ROW_2_IMAGES.map((url, i) => (
            <div
              key={`row2-${i}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#16171B] border border-[#23262E]/60 shadow-lg relative group"
            >
              <img
                src={url}
                alt={`3D work showcase ${i + 12}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
