import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import { ArrowRightIcon, ClockIcon, RupeeIcon, StarIcon } from '@/components/ui/Icon';
import { getPoojaIcon } from '@/components/pooja/poojaIcon';
import { PoojaService } from '@/lib/types';

interface PoojaCardProps {
  pooja: PoojaService;
  variant?: 'link' | 'selectable';
  selected?: boolean;
  onSelect?: (id: string) => void;
  className?: string;
}

/**
 * Reusable pooja card. In `link` mode it navigates to the pooja detail page.
 * In `selectable` mode it acts as a radio-style option for the booking flow.
 */
export default function PoojaCard({
  pooja,
  variant = 'link',
  selected = false,
  onSelect,
  className = '',
}: PoojaCardProps) {
  const BadgeIcon = getPoojaIcon(pooja.id);

  const content = (
    <>
      <div className="relative h-44 w-full">
        <Image
          src={pooja.image}
          alt={pooja.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-black/60 text-gold backdrop-blur-sm">
          <BadgeIcon className="h-4 w-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold text-white">{pooja.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{pooja.description}</p>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 font-semibold text-gold">
            <RupeeIcon className="h-3.5 w-3.5" />
            {pooja.price.replace('₹', '')}
          </span>
          <span className="flex items-center gap-1 text-white/40">
            <ClockIcon className="h-3.5 w-3.5" />
            {pooja.duration}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1 text-xs">
          <StarIcon className="h-3.5 w-3.5 text-gold" />
          <span className="font-medium text-white/80">{pooja.rating.toFixed(1)}</span>
          <span className="text-white/40">({pooja.reviews})</span>
        </div>

        {variant === 'link' && (
          <span className="mt-4 flex items-center gap-1 text-sm font-medium text-gold">
            View Details
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        )}
      </div>
    </>
  );

  if (variant === 'selectable') {
    return (
      <button
        type="button"
        onClick={() => onSelect?.(pooja.id)}
        aria-pressed={selected}
        className={`flex w-full flex-col overflow-hidden rounded-card border bg-surface p-0 text-left shadow-soft transition-colors ${
          selected ? 'border-primary ring-2 ring-primary/40' : 'border-white/5 hover:border-white/20'
        } ${className}`}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={`/pooja/${pooja.id}`} className={`block ${className}`}>
      <Card className="flex h-full flex-col overflow-hidden p-0">{content}</Card>
    </Link>
  );
}
