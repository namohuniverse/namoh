import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { poojaServices } from '@/lib/data';

interface PoojaDetailPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return poojaServices.map((pooja) => ({ id: pooja.id }));
}

export function generateMetadata({ params }: PoojaDetailPageProps): Metadata {
  const pooja = poojaServices.find((item) => item.id === params.id);
  if (!pooja) return { title: 'Pooja Not Found | Namoh' };
  return {
    title: `${pooja.title} | Namoh`,
    description: pooja.description,
  };
}

export default function PoojaDetailPage({ params }: PoojaDetailPageProps) {
  const pooja = poojaServices.find((item) => item.id === params.id);

  if (!pooja) {
    notFound();
  }

  return (
    <Section className="pt-10 sm:pt-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lux border border-gold/20 shadow-soft">
            <Image src={pooja.image} alt={pooja.title} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">{pooja.title}</h1>
            <div className="mt-3 flex items-center gap-4 text-sm">
              <span className="font-semibold text-gold">{pooja.price} onwards</span>
              <span className="text-white/40">{pooja.duration}</span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/70">{pooja.longDescription}</p>

            <div className="mt-8">
              <h2 className="font-heading text-base font-semibold text-white">What&apos;s Included</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                {pooja.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button href={`/booking?poojaId=${pooja.id}`} variant="primary" className="mt-8">
              Book This Pooja
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white">Available Packages</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {pooja.packages.map((pkg) => (
              <div key={pkg.id} className="rounded-card border border-white/5 bg-surface p-6 shadow-soft">
                <h3 className="font-heading text-base font-semibold text-white">{pkg.name}</h3>
                <p className="mt-2 text-xl font-semibold text-gold">₹{pkg.price.toLocaleString('en-IN')}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary" aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
