import PanditCard from '@/components/pandit/PanditCard';
import { Pandit } from '@/lib/types';

interface SelectPanditStepProps {
  pandits: Pandit[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function SelectPanditStep({ pandits, selectedId, onSelect }: SelectPanditStepProps) {
  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-white">Select a Pandit</h2>
      <p className="mt-1 text-sm text-white/60">Choose a verified priest to perform your ceremony.</p>

      <div className="mt-6 space-y-4">
        {pandits.map((pandit) => (
          <PanditCard key={pandit.id} pandit={pandit} selected={selectedId === pandit.id} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
