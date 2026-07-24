import { Pandit, PoojaPackage, PoojaService, TimeSlot } from '@/lib/types';

interface SummaryCardProps {
  pooja?: PoojaService;
  timeSlot?: TimeSlot;
  date?: string | null;
  pkg?: PoojaPackage;
  pandit?: Pandit;
  className?: string;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <span className="text-white/50">{label}</span>
      <span className="text-right font-medium text-white">{value}</span>
    </div>
  );
}

function formatDate(date?: string | null) {
  if (!date) return 'Not selected';
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return 'Not selected';
  return parsed.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

/**
 * Sticky booking summary. Renders as a normal card on mobile and
 * sticks to the right column on desktop via the parent layout.
 */
export default function SummaryCard({ pooja, timeSlot, date, pkg, pandit, className = '' }: SummaryCardProps) {
  const total = (pkg?.price ?? pooja?.basePrice ?? 0) + (pandit?.fee ?? 0);

  return (
    <div className={`rounded-card border border-white/5 bg-surface p-6 shadow-soft ${className}`}>
      <h3 className="font-heading text-lg font-semibold text-white">Booking Summary</h3>

      <div className="mt-4 divide-y divide-white/5">
        <Row label="Pooja" value={pooja?.title ?? 'Not selected'} />
        <Row label="Date" value={formatDate(date)} />
        <Row label="Time slot" value={timeSlot?.label ?? 'Not selected'} />
        <Row label="Package" value={pkg?.name ?? 'Not selected'} />
        <Row label="Pandit" value={pandit?.name ?? 'Not selected'} />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-sm font-medium text-white/70">Total</span>
        <span className="font-heading text-xl font-semibold text-gold">₹{total.toLocaleString('en-IN')}</span>
      </div>
    </div>
  );
}
