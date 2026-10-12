import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    id: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    id: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    id: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    id: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading: Services */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2 className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        {/* 5 Service items in vertical list */}
        <div className="flex flex-col w-full divide-y divide-[rgba(12,12,12,0.15)] border-t border-b border-[rgba(12,12,12,0.15)]">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              duration={0.7}
              y={30}
              className="py-8 sm:py-10 md:py-12 group hover:bg-black/[0.02] transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-10">
                {/* Left: Number */}
                <span className="font-black text-[#0C0C0C] leading-none shrink-0 text-[clamp(3rem,10vw,140px)] tabular-nums group-hover:translate-x-2 transition-transform duration-300">
                  {service.id}
                </span>

                {/* Right: Name + Description stacked vertically */}
                <div className="flex flex-col gap-2 max-w-2xl sm:flex-1">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] tracking-wide">
                    {service.name}
                  </h3>
                  <p className="font-light text-[#0C0C0C] leading-relaxed opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
