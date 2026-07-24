'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import LoginModal from '@/components/auth/LoginModal';
import { Pandit, PoojaPackage, PoojaService, TimeSlot } from '@/lib/types';

interface PaymentSummaryStepProps {
  pooja?: PoojaService;
  timeSlot?: TimeSlot;
  date?: string | null;
  pkg?: PoojaPackage;
  pandit?: Pandit;
}

function formatDate(date?: string | null) {
  if (!date) return '—';
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return '—';
  return parsed.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function PaymentSummaryStep({ pooja, timeSlot, date, pkg, pandit }: PaymentSummaryStepProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const total = (pkg?.price ?? pooja?.basePrice ?? 0) + (pandit?.fee ?? 0);
  const canConfirm = Boolean(pooja && date && timeSlot && pkg && pandit);

  const handleConfirmClick = () => {
    if (isLoggedIn) {
      setIsConfirmed(true);
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="rounded-card border border-gold/30 bg-surface p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-2xl text-primary">
          ✓
        </div>
        <h2 className="mt-4 font-heading text-xl font-semibold text-white">Booking Confirmed</h2>
        <p className="mt-2 text-sm text-white/60">
          Your {pooja?.title} is booked for {formatDate(date)}, {timeSlot?.label}. A confirmation has been sent to
          your registered email.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-white">Payment Summary</h2>
      <p className="mt-1 text-sm text-white/60">Review your booking details before confirming payment.</p>

      <div className="mt-6 rounded-card border border-white/5 bg-surface p-6 shadow-soft">
        <dl className="divide-y divide-white/5">
          <div className="flex items-center justify-between py-3 text-sm">
            <dt className="text-white/50">Pooja</dt>
            <dd className="font-medium text-white">{pooja?.title ?? '—'}</dd>
          </div>
          <div className="flex items-center justify-between py-3 text-sm">
            <dt className="text-white/50">Date and time</dt>
            <dd className="font-medium text-white">
              {formatDate(date)} · {timeSlot?.label ?? '—'}
            </dd>
          </div>
          <div className="flex items-center justify-between py-3 text-sm">
            <dt className="text-white/50">Package</dt>
            <dd className="font-medium text-white">
              {pkg ? `${pkg.name} · ₹${pkg.price.toLocaleString('en-IN')}` : '—'}
            </dd>
          </div>
          <div className="flex items-center justify-between py-3 text-sm">
            <dt className="text-white/50">Pandit</dt>
            <dd className="font-medium text-white">
              {pandit ? `${pandit.name} · ₹${pandit.fee.toLocaleString('en-IN')}` : '—'}
            </dd>
          </div>
        </dl>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm font-medium text-white/70">Total Payable</span>
          <span className="font-heading text-2xl font-semibold text-gold">₹{total.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <Button
        type="button"
        variant="primary"
        className="mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!canConfirm}
        onClick={handleConfirmClick}
      >
        Confirm and Pay ₹{total.toLocaleString('en-IN')}
      </Button>
      {!canConfirm && (
        <p className="mt-2 text-center text-xs text-white/40">Complete all previous steps to confirm your booking.</p>
      )}

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onSuccess={handleLoginSuccess} />
    </div>
  );
}
