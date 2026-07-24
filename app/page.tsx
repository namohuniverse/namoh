import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Astrology from '@/components/sections/Astrology';
import WhyNamoh from '@/components/sections/WhyNamoh';
import Testimonials from '@/components/sections/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Astrology />
      <WhyNamoh />
      <Testimonials />
    </>
  );
}
