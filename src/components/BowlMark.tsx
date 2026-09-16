/**
 * The brand mark: the app's own icon artwork.
 *
 * This used to be a hand-drawn bowl SVG, described in its own comment as "a placeholder,
 * but a deliberate one". The real mark has existed for a while — the red tile with the
 * bone B and the yellow bowl in its counter — and it is what ships on both Android apps,
 * the PWA icon set and every signed-in screen. The site is the only place that was still
 * showing something else.
 *
 * Kept as a component rather than an inline <img> so the two call sites (header, footer)
 * stay unchanged, and so there is still one place to swap if the artwork is reissued.
 */
export default function BowlMark({ className }: { className?: string }) {
  return (
    <img
      className={className}
      src="/brand/logo-mark.png"
      width={38}
      height={38}
      alt=""
      aria-hidden="true"
    />
  );
}
