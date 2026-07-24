'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import AstrologerCard from '@/components/astrologer/AstrologerCard';
import { astrologers } from '@/lib/data';

const tabs = [
  { mode: 'talk', label: 'Talk to Astrologer', cta: 'Call Now' },
  { mode: 'chat', label: 'Chat with Astrologer', cta: 'Chat Now' },
] as const;

export default function AstrologyContent() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') === 'chat' ? 'chat' : 'talk';
  const activeTab = tabs.find((tab) => tab.mode === mode) ?? tabs[0];

  return (
    <Section className="pt-10 sm:pt-14">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Astrology</span>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Connect with Trusted Astrologers</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Get personalized guidance on career, relationships, and life decisions — by call or by chat,
            whichever feels right for you.
          </p>
        </div>

        <div className="mt-8 inline-flex rounded-soft border border-white/10 bg-surface p-1">
          {tabs.map((tab) => (
            <Link
              key={tab.mode}
              href={`/astrology?mode=${tab.mode}`}
              className={`rounded-soft px-4 py-2 text-sm font-medium transition-colors ${
                activeTab.mode === tab.mode ? 'bg-primary text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {astrologers.map((astrologer) => (
            <AstrologerCard
              key={astrologer.id}
              astrologer={astrologer}
              ctaLabel={activeTab.cta}
              ctaHref={`#${astrologer.id}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
