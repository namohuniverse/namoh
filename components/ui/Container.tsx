import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Max-width wrapper used across the app to keep content aligned
 * on a consistent horizontal rhythm.
 */
export default function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
}
