import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverEffect?: boolean;
}

/**
 * Base surface card used for services, astrologers, products, and testimonials.
 */
export default function Card({ children, className = '', hoverEffect = true, ...props }: CardProps) {
  return (
    <div
      className={`rounded-card border border-gold/10 bg-surface p-6 shadow-soft ${
        hoverEffect
          ? 'transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-glow'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
