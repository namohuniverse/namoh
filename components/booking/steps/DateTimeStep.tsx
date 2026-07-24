import { TimeSlot } from '@/lib/types';

interface DateTimeStepProps {
  date: string | null;
  onDateChange: (date: string) => void;
  timeSlots: TimeSlot[];
  timeSlotId: string | null;
  onTimeSlotChange: (id: string) => void;
}

const periods: TimeSlot['period'][] = ['Morning', 'Afternoon', 'Evening'];

export default function DateTimeStep({ date, onDateChange, timeSlots, timeSlotId, onTimeSlotChange }: DateTimeStepProps) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-white">Choose Date and Time</h2>
      <p className="mt-1 text-sm text-white/60">Pick a convenient date and time slot for your ceremony.</p>

      <div className="mt-6 max-w-xs">
        <label htmlFor="pooja-date" className="mb-2 block text-sm font-medium text-white/80">
          Date
        </label>
        <input
          id="pooja-date"
          type="date"
          min={today}
          value={date ?? ''}
          onChange={(event) => onDateChange(event.target.value)}
          className="w-full rounded-soft border border-white/10 bg-bg px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
        />
      </div>

      <div className="mt-8 space-y-6">
        {periods.map((period) => {
          const slots = timeSlots.filter((slot) => slot.period === period);
          if (slots.length === 0) return null;

          return (
            <div key={period}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-white/40">{period}</h3>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {slots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => onTimeSlotChange(slot.id)}
                    aria-pressed={timeSlotId === slot.id}
                    className={`rounded-soft border px-3 py-2.5 text-sm font-medium transition-colors ${
                      timeSlotId === slot.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-white/10 text-white/70 hover:border-white/30'
                    }`}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
