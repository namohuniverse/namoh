import Image from 'next/image';
import Card from '@/components/ui/Card';
import { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card hoverEffect={false} className="flex flex-col">
      <div className="flex text-gold" aria-label={`Rated ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} aria-hidden="true">
            {index < testimonial.rating ? '★' : '☆'}
          </span>
        ))}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">&ldquo;{testimonial.quote}&rdquo;</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="40px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-white/50">{testimonial.location}</p>
        </div>
      </div>
    </Card>
  );
}
