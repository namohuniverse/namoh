import { HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
}

/**
 * Semantic <section> wrapper with the app's standard vertical rhythm.
 * Wrap page sections with this instead of repeating padding utilities.
 */
export default function Section({ children, className = '', id, ...props }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`} {...props}>
      {children}
    </section>
  );
}
