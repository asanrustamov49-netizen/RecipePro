interface EmptyIllustrationProps {
  className?: string;
}

export function EmptyIllustration({ className }: EmptyIllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 190"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="120" cy="100" r="78" fill="var(--color-green-50)" />
      <circle
        cx="120"
        cy="100"
        r="92"
        stroke="var(--color-green-200)"
        strokeWidth="1.5"
        strokeDasharray="3 7"
        strokeLinecap="round"
      />

      <g stroke="var(--color-green-200)" strokeWidth="3" strokeLinecap="round" className="ill-steam">
        <path d="M98 58c-7-8 7-13 0-23" />
        <path d="M120 52c-7-9 7-15 0-26" />
        <path d="M142 58c-7-8 7-13 0-23" />
      </g>

      <path d="M117 88c-3-14 4-24 18-27-1 14-8 23-18 27z" fill="var(--color-green-600)" />
      <path d="M117 88c4-8 9-14 15-20" stroke="var(--color-green-800)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M112 90c-12-6-16-16-12-27 11 5 15 15 12 27z" fill="#4f8a62" />

      <circle cx="88" cy="88" r="15" fill="#d9744a" />
      <path d="M84 75c2 3 6 3 8 0" stroke="var(--color-green-700)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="83" cy="84" r="3.5" fill="#f3a585" />

      <ellipse cx="153" cy="86" rx="17" ry="13" fill="#fffaf0" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <circle cx="155" cy="86" r="6.5" fill="#efb44a" />

      <path d="M54 98h132a66 62 0 0 1-132 0z" fill="var(--color-green-700)" />
      <path d="M70 112a52 46 0 0 0 30 34" stroke="#2f6a4b" strokeWidth="4" strokeLinecap="round" />
      <rect x="46" y="92" width="148" height="12" rx="6" fill="var(--color-green-800)" />

      <ellipse cx="120" cy="174" rx="44" ry="5" fill="var(--color-border)" />

      <path
        d="M196 40l2.6 6.4L205 49l-6.4 2.6L196 58l-2.6-6.4L187 49l6.4-2.6z"
        fill="var(--color-accent)"
      />
      <path
        d="M40 128l1.6 3.9 3.9 1.6-3.9 1.6L40 139l-1.6-3.9-3.9-1.6 3.9-1.6z"
        fill="var(--color-accent)"
        opacity="0.6"
      />
    </svg>
  );
}
