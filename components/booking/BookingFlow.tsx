'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import BookingStepper from '@/components/booking/BookingStepper';
import SummaryCard from '@/components/booking/SummaryCard';
import SelectPoojaStep from '@/components/booking/steps/SelectPoojaStep';
import DateTimeStep from '@/components/booking/steps/DateTimeStep';
import PackageStep from '@/components/booking/steps/PackageStep';
import SelectPanditStep from '@/components/booking/steps/SelectPanditStep';
import PaymentSummaryStep from '@/components/booking/steps/PaymentSummaryStep';
import { pandits, poojaServices, timeSlots } from '@/lib/data';

const STEP_LABELS = ['Select Pooja', 'Date & Time', 'Package', 'Pandit', 'Payment'];

export default function BookingFlow() {
  const searchParams = useSearchParams();
  const initialPoojaId = searchParams.get('poojaId');

  const [currentStep, setCurrentStep] = useState(0);
  const [poojaId, setPoojaId] = useState<string | null>(initialPoojaId);
  const [date, setDate] = useState<string | null>(null);
  const [timeSlotId, setTimeSlotId] = useState<string | null>(null);
  const [packageId, setPackageId] = useState<string | null>(null);
  const [panditId, setPanditId] = useState<string | null>(null);

  const selectedPooja = useMemo(() => poojaServices.find((pooja) => pooja.id === poojaId), [poojaId]);
  const selectedTimeSlot = useMemo(() => timeSlots.find((slot) => slot.id === timeSlotId), [timeSlotId]);
  const selectedPackage = useMemo(
    () => selectedPooja?.packages.find((pkg) => pkg.id === packageId),
    [selectedPooja, packageId],
  );
  const selectedPandit = useMemo(() => pandits.find((pandit) => pandit.id === panditId), [panditId]);

  const isStepValid = [
    Boolean(poojaId),
    Boolean(date && timeSlotId),
    Boolean(packageId),
    Boolean(panditId),
    true,
  ];

  const handlePoojaSelect = (id: string) => {
    setPoojaId(id);
    setPackageId(null);
  };

  const goNext = () => setCurrentStep((step) => Math.min(step + 1, STEP_LABELS.length - 1));
  const goBack = () => setCurrentStep((step) => Math.max(step - 1, 0));

  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-8 sm:mb-10">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">Book Your Pooja</span>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Complete Your Booking</h1>
      </div>

      <div className="rounded-card border border-white/5 bg-surface/40 p-4 sm:p-6">
        <BookingStepper steps={STEP_LABELS} currentStep={currentStep} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-card border border-white/5 bg-bg p-6 shadow-soft sm:p-8">
            {currentStep === 0 && (
              <SelectPoojaStep poojas={poojaServices} selectedId={poojaId} onSelect={handlePoojaSelect} />
            )}
            {currentStep === 1 && (
              <DateTimeStep
                date={date}
                onDateChange={setDate}
                timeSlots={timeSlots}
                timeSlotId={timeSlotId}
                onTimeSlotChange={setTimeSlotId}
              />
            )}
            {currentStep === 2 && selectedPooja && (
              <PackageStep packages={selectedPooja.packages} selectedId={packageId} onSelect={setPackageId} />
            )}
            {currentStep === 3 && <SelectPanditStep pandits={pandits} selectedId={panditId} onSelect={setPanditId} />}
            {currentStep === 4 && (
              <PaymentSummaryStep
                pooja={selectedPooja}
                timeSlot={selectedTimeSlot}
                date={date}
                pkg={selectedPackage}
                pandit={selectedPandit}
              />
            )}
          </div>

          {currentStep < STEP_LABELS.length - 1 && (
            <div className="mt-6 flex items-center justify-between gap-3">
              <Button
                type="button"
                variant="secondary"
                onClick={goBack}
                disabled={currentStep === 0}
                className="flex-1 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
              >
                Back
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={goNext}
                disabled={!isStepValid[currentStep]}
                className="flex-1 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
              >
                Continue
              </Button>
            </div>
          )}

          {currentStep === STEP_LABELS.length - 1 && (
            <div className="mt-6">
              <Button type="button" variant="secondary" onClick={goBack}>
                Back
              </Button>
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-24 lg:h-fit">
          <SummaryCard
            pooja={selectedPooja}
            timeSlot={selectedTimeSlot}
            date={date}
            pkg={selectedPackage}
            pandit={selectedPandit}
          />
        </div>
      </div>
    </Container>
  );
}
