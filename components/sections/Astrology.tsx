import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import AstrologerCard from '@/components/astrologer/AstrologerCard';
import { astrologers } from '@/lib/data';

export default function Astrology() {
  return (
    <Section id="astrology" className="bg-surface/40">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Astrology</span>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Connect with Trusted Astrologers</h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Get personalized guidance on career, relationships, and life decisions from experienced astrologers.
          </p>
        </div>

        <div className="mt-12 -mx-4 flex gap-6 overflow-x-auto scroll-smooth px-4 pb-4 scrollbar-hide sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          {astrologers.map((astrologer) => (
            <AstrologerCard key={astrologer.id} astrologer={astrologer} className="w-64 shrink-0 sm:w-72" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
