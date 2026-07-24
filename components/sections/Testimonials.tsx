import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import TestimonialCard from '@/components/testimonial/TestimonialCard';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface/40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What Our Devotees Say</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
