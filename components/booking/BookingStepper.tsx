interface BookingStepperProps {
  steps: string[];
  currentStep: number;
}

/**
 * Horizontal step indicator for the booking flow.
 * Shows full circles + labels on desktop, a compact progress bar on mobile.
 */
export default function BookingStepper({ steps, currentStep }: BookingStepperProps) {
  return (
    <nav aria-label="Booking progress">
      <ol className="hidden items-center sm:flex">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <li key={step} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                    isCompleted
                      ? 'border-primary bg-primary text-white'
                      : isCurrent
                        ? 'border-primary text-primary'
                        : 'border-white/20 text-white/40'
                  }`}
                >
                  {isCompleted ? '✓' : index + 1}
                </div>
                <span
                  className={`whitespace-nowrap text-xs font-medium ${
                    isCurrent ? 'text-white' : 'text-white/40'
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`mx-3 mb-6 h-px flex-1 ${isCompleted ? 'bg-primary' : 'bg-white/10'}`}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>

      <div className="sm:hidden">
        <div className="flex items-center justify-between text-xs text-white/50">
          <span>
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="font-medium text-white">{steps[currentStep]}</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </nav>
  );
}
