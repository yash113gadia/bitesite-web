/**
 * Renders a business detail, or a visible "not published yet" marker if it is unset.
 *
 * Deliberately loud rather than silent: a policy page that silently omits the operator's
 * legal name reads as finished when it is not, and shipping an invented one is worse
 * still. The marker makes an incomplete page obvious to us and honest to a reader.
 */
export default function Detail({ value, label }: { value: string; label: string }) {
  if (value.trim().length > 0) return <>{value}</>;
  return <span className="pending">{label} to be published</span>;
}
