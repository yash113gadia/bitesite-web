/**
 * The wordmark's icon: a bowl with steam.
 *
 * A placeholder for the real logo, but a deliberate one — a bowl says what BiteSite is,
 * where an initial in a rounded square says nothing. Swap the paths when the logo lands;
 * nothing else needs to change.
 */
export default function BowlMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* steam */}
      <path
        d="M14.5 10.5c0-2 2-2.2 2-4.2M20 9.5c0-2.4 2.2-2.6 2.2-5M25.5 10.5c0-1.8 1.8-2 1.8-3.8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* bowl */}
      <path
        d="M5 18.5h30c0 8-6.7 14.5-15 14.5S5 26.5 5 18.5Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      {/* handle */}
      <path
        d="M35 21.5c2.2 0 3.8 1.3 3.8 3.1 0 1.8-1.6 3.1-3.8 3.1"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
