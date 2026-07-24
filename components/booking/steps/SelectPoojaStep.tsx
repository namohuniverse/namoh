import PoojaCard from '@/components/pooja/PoojaCard';
import { PoojaService } from '@/lib/types';

interface SelectPoojaStepProps {
  poojas: PoojaService[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function SelectPoojaStep({ poojas, selectedId, onSelect }: SelectPoojaStepProps) {
  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-white">Select a Pooja</h2>
      <p className="mt-1 text-sm text-white/60">Choose the ceremony you would like to book.</p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {poojas.map((pooja) => (
          <PoojaCard key={pooja.id} pooja={pooja} variant="selectable" selected={selectedId === pooja.id} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
