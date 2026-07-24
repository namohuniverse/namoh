import type { Metadata } from 'next';
import { Suspense } from 'react';
import AstrologyContent from './AstrologyContent';

export const metadata: Metadata = {
  title: 'Astrology | Namoh',
  description: 'Talk to or chat with trusted, verified astrologers for personalized Vedic guidance.',
};

export default function AstrologyPage() {
  return (
    <Suspense fallback={null}>
      <AstrologyContent />
    </Suspense>
  );
}
