import { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
});

export function LotusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21c-3.5 0-6-2.2-6-5.5 1.8 0 3.6.7 6 2.6 2.4-1.9 4.2-2.6 6-2.6 0 3.3-2.5 5.5-6 5.5Z" />
      <path d="M12 17.5c-2-2.4-3-4.6-3-7 0-2 .9-3.8 3-5.5 2.1 1.7 3 3.5 3 5.5 0 2.4-1 4.6-3 7Z" />
      <path d="M6.5 12.5C4.7 11 3.5 9.3 3 7c2.3-.4 4.2.1 6 1.3M17.5 12.5c1.8-1.5 3-3.2 3.5-5.5-2.3-.4-4.2.1-6 1.3" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
      <path d="M7.75 13.5h1.5M11.25 13.5h1.5M14.75 13.5h1.5M7.75 17h1.5M11.25 17h1.5" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4.5V16h-1A2.5 2.5 0 0 1 2 13.5v-6" />
    </svg>
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.4-3.6 4.3-5.5 7.5-5.5s6.1 1.9 7.5 5.5" />
    </svg>
  );
}

export function TempleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5 15 7H9l3-4.5Z" />
      <path d="M6 7h12v2.5H6V7ZM4.5 21V11l1.5-1.5h12L19.5 11v10M8 21v-6h8v6" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5 19.5 5.5v5.5c0 5-3.2 8.4-7.5 10.5-4.3-2.1-7.5-5.5-7.5-10.5V5.5L12 2.5Z" />
      <path d="M8.75 12.25 11 14.5l4.25-4.75" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5 14.9 8.6l6.6.7-5 4.5 1.4 6.6L12 16.9l-5.9 3.5 1.4-6.6-5-4.5 6.6-.7L12 2.5Z" />
    </svg>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c1.1-3.2 3.5-5 6.5-5s5.4 1.8 6.5 5" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.7 12.2c2.2.3 3.9 1.9 4.8 4.8" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function RupeeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 4h10M7 8.5h10M7 4c3.5 0 5.8 1.3 5.8 4.2S10.5 12.4 7 12.4h-.5L14 20" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function ScissorsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6.5" r="2.3" />
      <circle cx="6" cy="17.5" r="2.3" />
      <path d="M7.8 8 20 19M7.8 16 20 5" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5c1 2.5-.5 3.8-1.7 5.2-1.4 1.6-2.3 3.2-2.3 5.3a4 4 0 0 0 8 0c0-1.2-.4-2-1-2.8-.2 1.6-1 2.4-1.8 2.4a1.7 1.7 0 0 1-1.7-1.7c0-1 .6-1.6 1.3-2.4 1.4-1.6 2.2-3.3 1.2-5.9-.7 1.3-1.4 1.9-2 1.9Z" />
    </svg>
  );
}

export function FlowerIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 3.5a2.7 2.7 0 0 1 0 5.4 2.7 2.7 0 0 1 0-5.4ZM12 15.1a2.7 2.7 0 0 1 0 5.4 2.7 2.7 0 0 1 0-5.4ZM3.5 12a2.7 2.7 0 0 1 5.4 0 2.7 2.7 0 0 1-5.4 0ZM15.1 12a2.7 2.7 0 0 1 5.4 0 2.7 2.7 0 0 1-5.4 0Z" />
    </svg>
  );
}

export function KalashIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3.5h6M8.5 5.5h7" />
      <path d="M12 5.5v2.3" />
      <path d="M7 9c0-1 2-1.7 5-1.7S17 8 17 9c0 5.3-1.5 9.5-5 9.5S7 14.3 7 9Z" />
      <path d="M8.3 12.5c1.2.5 2.5.8 3.7.8s2.5-.3 3.7-.8" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4a6.8 6.8 0 0 0 9.5 9.5Z" />
    </svg>
  );
}

export function OrbitIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function BabyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="9" r="4.5" />
      <path d="M9 9c0-1.5 1-2.7 3-2.7M4.5 19c1.6-3 4.2-4.5 7.5-4.5s5.9 1.5 7.5 4.5" />
    </svg>
  );
}
