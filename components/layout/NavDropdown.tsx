'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import type { NavLink } from '@/lib/types';

interface NavDropdownProps {
  link: NavLink;
  active?: boolean;
}

/**
 * Desktop nav item. Renders a plain link when there are no children,
 * or a hover/click dropdown panel when the link has sub-items.
 */
export default function NavDropdown({ link, active = false }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout>>();

  const open = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsOpen(true);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setIsOpen(false), 150);
  };

  if (!link.children || link.children.length === 0) {
    return (
      <Link
        href={link.href}
        className={`relative pb-1.5 text-sm font-medium transition-colors hover:text-gold ${
          active ? 'text-gold' : 'text-white/80'
        }`}
      >
        {link.label}
        {active && <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px bg-gold" />}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={scheduleClose}>
      <button
        type="button"
        className={`relative flex items-center gap-1.5 pb-1.5 text-sm font-medium transition-colors hover:text-gold ${
          active ? 'text-gold' : 'text-white/80'
        }`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {link.label}
        {active && <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px bg-gold" />}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="animate-fade-in absolute left-1/2 top-full z-50 mt-3 max-h-[70vh] w-72 -translate-x-1/2 overflow-y-auto rounded-card border border-white/10 bg-surface p-2 shadow-soft"
          onMouseEnter={open}
          onMouseLeave={scheduleClose}
        >
          {link.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-soft px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-bg hover:text-gold"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
