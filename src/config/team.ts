/**
 * The people who represent BiteSite on campus.
 *
 * Deliberately not in business.ts. That file is the operator's legal identity for
 * payment-gateway KYC, and every field in it is a disclosure someone is required to
 * make. These are roles held in the business, not facts about the operating entity,
 * so they are kept out of that set and rendered outside the merchant identity block.
 *
 * Single source for the About page team section and the site-wide footer, so the two
 * cannot drift apart.
 */
export interface TeamMember {
  /** Title as it should appear publicly. */
  role: string;
  /** Full name. */
  name: string;
  /**
   * City, not college. Naming the university implies it has agreed to be named and
   * that BiteSite already operates there, and it pre-claims the relationship the
   * person is about to go and ask for.
   */
  city: string;
}

export const team: TeamMember[] = [
  { role: 'Chief Business Officer', name: 'Sanskar Rathore', city: 'Pune' },
  { role: 'Chief Operating Officer', name: 'Shubh Gupta', city: 'Kanpur' },
];
