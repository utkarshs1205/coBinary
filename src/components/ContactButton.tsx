import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Start Building',
  onClick,
  className = '',
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_6px_25px_rgba(2,132,199,0.35)] hover:shadow-[0_10px_35px_rgba(2,132,199,0.5)] transition-all cursor-pointer ${className}`}
    >
      <span>{label}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
      <ArrowRight className="w-4 h-4" />
    </motion.button>
  );
};

