import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { CalendarIcon, ChatIcon, LotusIcon, PeopleIcon, ShieldCheckIcon, StarIcon, TempleIcon } from '@/components/ui/Icon';

const stats = [
  { icon: TempleIcon, value: '50K+', label: 'Poojas Performed' },
  { icon: ShieldCheckIcon, value: '200+', label: 'Verified Astrologers' },
  { icon: StarIcon, value: '4.9/5', label: 'Average Rating' },
  { icon: PeopleIcon, value: '100K+', label: 'Happy Devotees' },
];

const badgeClip =
  '[clip-path:polygon(14px_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,14px_100%,0_50%)]';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_15%,rgba(224,151,58,0.2),transparent_60%)]"
      />

      <Container>
        <div className="flex min-h-[80vh] flex-col items-center justify-center py-20 text-center sm:min-h-[85vh] sm:py-28">
          <div className="animate-fade-in-up flex flex-col items-center gap-2">
            <LotusIcon className="h-6 w-6 text-gold" />
            <span
              className={`border border-gold/40 bg-gold/10 px-6 py-2 text-xs font-medium uppercase tracking-widest text-gold ${badgeClip}`}
            >
              Rooted in Tradition
            </span>
          </div>

          <h1 className="animate-fade-in-up mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your Path to Peace, <span className="text-primary">Purpose</span> &amp; Divine Guidance
          </h1>

          <div className="animate-fade-in-up mt-5 flex items-center gap-3 text-gold/40" aria-hidden="true">
            <span className="h-px w-10 bg-gold/40" />
            <LotusIcon className="h-3.5 w-3.5" />
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <p className="animate-fade-in-up mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Namoh connects you with authentic pooja services and trusted astrologers — bringing
            timeless traditions to your everyday life.
          </p>

          <div className="animate-fade-in-up mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button href="/booking" variant="primary" className="w-full sm:w-auto">
              <CalendarIcon className="h-4 w-4" />
              Book your Slot
            </Button>
            <Button href="/astrology" variant="secondary" className="w-full sm:w-auto">
              <ChatIcon className="h-4 w-4" />
              Talk to an Astrologer
            </Button>
          </div>

          <div className="animate-fade-in-up mt-10 flex items-center gap-6 rounded-card border border-gold/15 bg-black/20 px-6 py-5 sm:gap-10 sm:px-10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                {index > 0 && <div className="h-9 w-px bg-gold/15" aria-hidden="true" />}
                <div className="flex flex-col items-center gap-1.5">
                  <stat.icon className="h-5 w-5 text-gold" />
                  <p className="font-heading text-xl font-semibold text-white sm:text-2xl">{stat.value}</p>
                  <p className="whitespace-nowrap text-[11px] text-white/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
