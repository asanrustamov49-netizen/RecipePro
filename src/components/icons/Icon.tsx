import type { ReactNode } from 'react';

const ICONS = {
  sparkles: (
    <>
      <path d="M12 3.5l1.8 4.7 4.7 1.8-4.7 1.8L12 16.5l-1.8-4.7L5.5 10l4.7-1.8z" />
      <path d="M19 15v4M17 17h4M5 3v3M3.5 4.5h3" />
    </>
  ),
  chefHat: (
    <>
      <path d="M6.5 14A4 4 0 0 1 7.6 6.2a5 5 0 0 1 8.8 0A4 4 0 0 1 17.5 14v6h-11z" />
      <path d="M6.5 17h11" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  users: (
    <>
      <path d="M15.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5V20" />
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M20.5 20v-1.5a3.5 3.5 0 0 0-2.6-3.4M15 4.6a3.5 3.5 0 0 1 0 6.8" />
    </>
  ),
  level: <path d="M6 19v-4M12 19v-8M18 19V5" />,
  plus: <path d="M12 5.5v13M5.5 12h13" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  close: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15" />
    </>
  ),
  refresh: (
    <>
      <path d="M19.5 11A7.5 7.5 0 0 0 6 7l-1.5 1.5" />
      <path d="M4.5 4.5v4h4" />
      <path d="M4.5 13A7.5 7.5 0 0 0 18 17l1.5-1.5" />
      <path d="M19.5 19.5v-4h-4" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5.5M12 16.3v.2" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5M12 7.7v.2" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19.5C4.5 11 9.5 5 20 4.5c-.5 10.5-6.5 15.5-15 15z" />
      <path d="M5 19.5c3-4.5 6-7.5 9.5-9.5" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  plug: (
    <>
      <path d="M9 3.5V8M15 3.5V8" />
      <path d="M6.5 8h11v3a5.5 5.5 0 0 1-11 0z" />
      <path d="M12 16.5v4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  basket: (
    <>
      <path d="M3.5 10h17l-1.6 8.4a2 2 0 0 1-2 1.6H7.1a2 2 0 0 1-2-1.6z" />
      <path d="M8 10l3-6M16 10l-3-6M9.5 14v2.5M14.5 14v2.5" />
    </>
  ),
  bulb: (
    <>
      <path d="M9.5 18h5M10.5 21h3" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z" />
    </>
  ),
  utensils: (
    <>
      <path d="M7 3v18M4.5 3v5a2.5 2.5 0 0 0 5 0V3" />
      <path d="M17.5 21V3c-2.2 1.2-3.5 4-3.5 8h3.5" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z" />
      <path d="M13.5 6.5l4 4" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICONS;

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Icon({ name, size = 20, strokeWidth = 1.75, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  );
}
