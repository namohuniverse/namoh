import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const reasons = [
  {
    title: 'Verified Priests',
    description: 'Every pandit is background-checked and trained in authentic Vedic rituals.',
    icon: '🕉️',
  },
  {
    title: 'Trusted Astrologers',
    description: 'Consult experienced astrologers rated by thousands of devotees.',
    icon: '✨',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden costs — see full pricing before you book any package.',
    icon: '🪔',
  },
  {
    title: 'Secure Payments',
    description: 'Book now, pay only when your slot is confirmed — safe and simple.',
    icon: '🔒',
  },
];

export default function WhyNamoh() {
  return (
    <Section id="why-namoh" className="bg-bg/30">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Why Namoh</span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            A Premium, Trusted Spiritual Partner
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            We blend timeless tradition with modern reliability, so every ritual and consultation
            feels authentic, transparent, and effortless.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card key={reason.title} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                {reason.icon}
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-white">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{reason.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
