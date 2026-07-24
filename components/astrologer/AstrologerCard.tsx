import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Astrologer } from '@/lib/types';

interface AstrologerCardProps {
  astrologer: Astrologer;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function AstrologerCard({
  astrologer,
  ctaLabel = 'Consult Now',
  ctaHref,
  className = '',
}: AstrologerCardProps) {
  return (
    <Card className={`flex flex-col items-center p-6 text-center ${className}`}>
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-gold/40">
        <Image src={astrologer.image} alt={astrologer.name} fill sizes="96px" className="object-cover" />
      </div>

      <h3 className="mt-4 font-heading text-lg font-semibold text-white">{astrologer.name}</h3>
      <p className="mt-1 text-sm text-primary">{astrologer.specialty}</p>
      <p className="mt-1 text-xs text-white/50">{astrologer.experience}</p>

      <div className="mt-3 flex items-center gap-1 text-sm text-gold">
        <span aria-hidden="true">★</span>
        <span>{astrologer.rating.toFixed(1)}</span>
        <span className="text-white/40">({astrologer.reviews})</span>
      </div>

      <p className="mt-3 text-xs text-white/50">{astrologer.languages.join(' · ')}</p>

      <Button href={ctaHref ?? `#${astrologer.id}`} variant="secondary" className="mt-5 w-full px-4 py-2 text-xs">
        {ctaLabel}
      </Button>
    </Card>
  );
}
