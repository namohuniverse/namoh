import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Pandit Login | Namoh',
  description: 'Sign in to your Namoh pandit account to manage bookings and availability.',
};

export default function PanditLoginPage() {
  return (
    <Section className="flex items-center pt-10 sm:pt-14">
      <Container>
        <div className="mx-auto w-full max-w-sm rounded-card border border-white/5 bg-surface p-6 shadow-soft sm:p-8">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Pandit Portal</span>
          <h1 className="mt-2 font-heading text-2xl font-semibold text-white">Pandit Login</h1>
          <p className="mt-2 text-sm text-white/60">
            Sign in to view your assigned poojas, manage availability, and update your profile.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="pandit-id" className="mb-2 block text-sm font-medium text-white/80">
                Registered Mobile Number
              </label>
              <input
                id="pandit-id"
                type="tel"
                required
                placeholder="98765 43210"
                className="w-full rounded-soft border border-white/10 bg-bg px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="pandit-password" className="mb-2 block text-sm font-medium text-white/80">
                Password
              </label>
              <input
                id="pandit-password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-soft border border-white/10 bg-bg px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Login
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-white/40">
            Not a registered pandit yet?{' '}
            <span className="text-gold">Contact support@namoh.com</span> to get onboarded.
          </p>
        </div>
      </Container>
    </Section>
  );
}
