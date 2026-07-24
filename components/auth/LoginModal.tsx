'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

/**
 * Mock login gate shown only when the user tries to confirm a booking.
 * No real OTP/auth backend — accepts any phone number to keep the demo flow working.
 */
export default function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="animate-fade-in absolute inset-0 bg-black/70" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        className="animate-fade-in-up relative w-full max-w-sm rounded-card border border-white/10 bg-surface p-6 shadow-soft sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/50 transition-colors hover:text-white"
        >
          ✕
        </button>

        <h2 id="login-modal-title" className="font-heading text-xl font-semibold text-white">
          Login to Confirm Booking
        </h2>
        <p className="mt-2 text-sm text-white/60">
          You can browse poojas, packages, and pandits freely. Please log in only to confirm and pay for
          your booking.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login-phone" className="mb-2 block text-sm font-medium text-white/80">
              Mobile Number
            </label>
            <input
              id="login-phone"
              type="tel"
              required
              placeholder="98765 43210"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-soft border border-white/10 bg-bg px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
            />
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Send OTP &amp; Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
