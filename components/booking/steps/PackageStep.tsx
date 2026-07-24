import { PoojaPackage } from '@/lib/types';

interface PackageStepProps {
  packages: PoojaPackage[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function PackageStep({ packages, selectedId, onSelect }: PackageStepProps) {
  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-white">Choose Package</h2>
      <p className="mt-1 text-sm text-white/60">Select the level of service that fits your ceremony.</p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {packages.map((pkg) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => onSelect(pkg.id)}
            aria-pressed={selectedId === pkg.id}
            className={`flex flex-col rounded-card border bg-surface p-6 text-left shadow-soft transition-colors ${
              selectedId === pkg.id ? 'border-primary ring-2 ring-primary/40' : 'border-white/5 hover:border-white/20'
            }`}
          >
            <h3 className="font-heading text-base font-semibold text-white">{pkg.name}</h3>
            <p className="mt-2 text-xl font-semibold text-gold">₹{pkg.price.toLocaleString('en-IN')}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-white/60">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>
    </div>
  );
}
