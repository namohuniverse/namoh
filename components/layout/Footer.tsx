import Link from 'next/link';
import Container from '@/components/ui/Container';
import { navLinks } from '@/lib/data';

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'WhatsApp', href: '#' },
];

const services = ['Pooja Booking', 'Astrology Consultation', 'Kundli Matching'];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
          <div>
            <span className="font-heading text-2xl font-semibold text-white">
              Namoh<span className="text-primary">.</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Authentic pooja services and trusted astrologers — rooted in tradition, designed for
              modern life.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-gold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-gold">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-gold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>support@namoh.com</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, Maharashtra, India</li>
            </ul>
            <div className="mt-6 flex gap-4">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-xs font-medium uppercase tracking-wide text-white/50 transition-colors hover:text-primary"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Namoh. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
