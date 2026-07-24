import Image from 'next/image';
import { Pandit } from '@/lib/types';

interface PanditCardProps {
  pandit: Pandit;
  selected?: boolean;
  onSelect?: (id: string) => void;
}

/**
 * Selectable pandit card used in the "Select Pandit" booking step.
 */
export default function PanditCard({ pandit, selected = false, onSelect }: PanditCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(pandit.id)}
      aria-pressed={selected}
      className={`flex w-full items-center gap-4 rounded-card border bg-surface p-4 text-left shadow-soft transition-colors sm:p-5 ${
        selected ? 'border-primary ring-2 ring-primary/40' : 'border-white/5 hover:border-white/20'
      }`}
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold/40 sm:h-20 sm:w-20">
        <Image src={pandit.image} alt={pandit.name} fill sizes="80px" className="object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-heading text-base font-semibold text-white">{pandit.name}</h3>
        <p className="mt-1 text-sm text-primary">{pandit.specialization}</p>
        <p className="mt-1 text-xs text-white/50">{pandit.experience}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/50">
          <span className="flex items-center gap-1 text-gold">
            <span aria-hidden="true">★</span>
            {pandit.rating.toFixed(1)} ({pandit.reviews})
          </span>
          <span>{pandit.languages.join(' · ')}</span>
        </div>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-sm font-semibold text-gold">₹{pandit.fee.toLocaleString('en-IN')}</p>
        <span
          className={`mt-2 inline-flex h-5 w-5 items-center justify-center rounded-full border ${
            selected ? 'border-primary bg-primary text-white' : 'border-white/30 text-transparent'
          }`}
          aria-hidden="true"
        >
          ✓
        </span>
      </div>
    </button>
  );
}
