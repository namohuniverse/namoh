'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { CalendarIcon, LotusIcon, PersonIcon } from '@/components/ui/Icon';
import NavDropdown from '@/components/layout/NavDropdown';
import { navLinks } from '@/lib/data';

function isLinkActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  const [path] = href.split('#');
  if (!path || path === '/') return false;
  return pathname === path || pathname.startsWith(`${path}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenAccordion(null);
  };

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-gold/10 bg-bg/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-18 items-center justify-between" aria-label="Primary">
          <Link href="/" className="flex items-center gap-2">
            <LotusIcon className="h-7 w-7 text-gold" />
            <span className="font-heading text-2xl font-semibold tracking-wide text-white">
              Namoh
              <span className="text-gold">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavDropdown link={link} active={isLinkActive(pathname, link.href)} />
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/pandit-login"
              className="flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors hover:text-white/80"
            >
              <PersonIcon className="h-4 w-4" />
              Pandit Login
            </Link>
            <Button href="/booking" variant="primary" className="px-5 py-2.5">
              <CalendarIcon className="h-4 w-4" />
              Book your Slot
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-soft border border-white/10 text-white lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </nav>
      </Container>
    </header>

      {/* Mobile slide-out drawer */}
      <div
        className={`fixed inset-0 z-40 overflow-hidden lg:hidden ${isMenuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-xs flex-col overflow-y-auto border-l border-white/10 bg-bg px-4 pb-8 pt-4 shadow-soft transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-heading text-xl font-semibold text-white">
              <LotusIcon className="h-6 w-6 text-gold" />
              Namoh<span className="text-gold">.</span>
            </span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-soft border border-white/10 text-white"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="mt-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              const isAccordionOpen = openAccordion === link.href;

              return (
                <li key={link.href}>
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpenAccordion(isAccordionOpen ? null : link.href)}
                        aria-expanded={isAccordionOpen}
                        className="flex w-full items-center justify-between rounded-soft px-2 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-surface hover:text-gold"
                      >
                        {link.label}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${isAccordionOpen ? 'rotate-180' : ''}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isAccordionOpen && (
                        <ul className="ml-2 mt-1 flex flex-col gap-1 border-l border-white/10 pl-4">
                          {link.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeMenu}
                                className="block rounded-soft px-2 py-2.5 text-sm text-white/60 transition-colors hover:bg-surface hover:text-gold"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-soft px-2 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-surface hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <Button href="/booking" variant="primary" className="w-full" onClick={closeMenu}>
              <CalendarIcon className="h-4 w-4" />
              Book your Slot
            </Button>
            <Link
              href="/pandit-login"
              onClick={closeMenu}
              className="flex items-center justify-center gap-1.5 text-center text-xs font-medium text-white/50 transition-colors hover:text-white/80"
            >
              <PersonIcon className="h-4 w-4" />
              Pandit Login 
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
