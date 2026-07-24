import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import PoojaCard from '@/components/pooja/PoojaCard';
import { poojaServices } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pooja Services | Namoh',
  description: 'Browse authentic Vedic pooja services performed by verified priests, ready to book online.',
};

export default function PoojaListingPage() {
  return (
    <Section className="pt-10 sm:pt-14">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Our Services</span>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Sacred Pooja Services</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Book verified priests for authentic Vedic rituals performed at your home or our partner temples.
            Select a pooja below to see full details and start your booking.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {poojaServices.map((pooja) => (
            <PoojaCard key={pooja.id} pooja={pooja} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
