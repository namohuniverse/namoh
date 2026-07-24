import type { Metadata } from 'next';
import { Suspense } from 'react';
import BookingFlow from '@/components/booking/BookingFlow';

export const metadata: Metadata = {
  title: 'Book a Pooja | Namoh',
  description: 'Complete your pooja booking in a few simple steps — pooja, date, package, and pandit.',
};

export default function BookingPage() {
  return (
    <Suspense fallback={null}>
      <BookingFlow />
    </Suspense>
  );
}
