import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import PoojaCard from '@/components/pooja/PoojaCard';
import { poojaServices } from '@/lib/data';
import type { PoojaService } from '@/lib/types';

const ROW_SIZE = 8;

function chunk(services: PoojaService[], size: number): PoojaService[][] {
  const rows: PoojaService[][] = [];
  for (let i = 0; i < services.length; i += size) {
    rows.push(services.slice(i, i + size));
  }
  return rows;
}

export default function Services() {
  const rows = chunk(poojaServices, ROW_SIZE);

  return (
    <Section id="services" className="bg-bg/30">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rotate-45 bg-primary" aria-hidden="true" />
              Our Services
              <span className="h-1.5 w-1.5 rotate-45 bg-primary" aria-hidden="true" />
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Sacred Pooja Services</h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Book verified priests for authentic Vedic rituals performed at your home or our partner temples.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {rows.map((row, index) => (
            <div
              key={index}
              className="-mx-4 flex gap-6 overflow-x-auto scroll-smooth px-4 pb-4 scrollbar-hide sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
              {row.map((pooja) => (
                <PoojaCard key={pooja.id} pooja={pooja} className="w-72 shrink-0 sm:w-80" />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
