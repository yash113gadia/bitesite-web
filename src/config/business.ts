/**
 * The operator's real business identity.
 *
 * Payment gateways verify a merchant by checking the website for a named legal entity,
 * a reachable address, a working phone and email, and a named grievance officer (required
 * of intermediaries under India's IT Rules 2021). Those are facts about whoever runs
 * BiteSite, not about this codebase, so they live here in one place.
 *
 * Every field is intentionally EMPTY until the operator supplies the real value. Anything
 * left empty renders as nothing at all rather than as a placeholder — a fabricated address
 * or company name on a live site is exactly the kind of thing that gets a merchant
 * application rejected, and is worse than an obviously incomplete page.
 *
 * ── TO GO LIVE, FILL IN EVERY FIELD BELOW ──
 */
export interface BusinessInfo {
  /**
   * Exact registered name, as it appears on the settlement bank account and KYC documents.
   * For a sole proprietorship this is the proprietor's own name, not the brand — a gateway
   * matches this string against the bank account, and a mismatch is a direct rejection.
   */
  legalName: string;
  /** The name the business trades under, if different from {@link legalName}. */
  tradeName: string;
  /** e.g. "Sole proprietorship", "Private limited company", "LLP", "Registered partnership". */
  entityType: string;
  /** Full registered/operating address including city, state and PIN code. */
  address: string;
  /** Support email. Gateways prefer an address on the site's own domain. */
  email: string;
  /** Support phone, in international format, e.g. "+91 XXXXX XXXXX". */
  phone: string;
  /** GSTIN, if registered. Leave empty if not GST-registered — it is not required to launch. */
  gstin: string;
  /** Grievance Officer's full name (IT Rules 2021). May be the founder. */
  grievanceOfficerName: string;
  /** Grievance Officer's contact email. */
  grievanceOfficerEmail: string;
  /** Effective date shown on the legal pages, e.g. "19 August 2026". */
  lastUpdated: string;
  /**
   * The concrete commercial arrangement, in one or two sentences, e.g. what a canteen
   * pays to be on the platform. A vague pricing page is itself a rejection risk.
   */
  pricingDetail: string;
}

export const business: BusinessInfo = {
  // Sole proprietorship: the settlement account is in the proprietor's own name, so that
  // is the legal name a gateway will match. Anvaya Labs is the trading name and BiteSite
  // is the product; all three are published together so nothing looks inconsistent.
  legalName: 'Yash Gadia',
  tradeName: 'Anvaya Labs',
  entityType: 'Sole proprietorship',
  // STILL REQUIRED. Payment gateways check this specifically and a missing address is one
  // of the most common rejection reasons. Left empty rather than guessed.
  address: '',
  email: 'yash113gadia@gmail.com',
  phone: '+91 99500 94483',
  // Not GST-registered. The GSTIN block is hidden entirely rather than shown empty.
  gstin: '',
  grievanceOfficerName: 'Yash Gadia',
  grievanceOfficerEmail: 'yash113gadia@gmail.com',
  lastUpdated: '20 August 2026',
  // STILL REQUIRED. What a college or canteen actually pays to be on the platform.
  pricingDetail: '',
};

/** Where the actual product lives. www.bitesite.in is marketing only. */
export const portals = {
  app: 'https://app.bitesite.in',
  outlet: 'https://outlet.bitesite.in',
  admin: 'https://admin.bitesite.in',
} as const;

const filled = (v: string) => v.trim().length > 0;

/**
 * How the operator is named in legal copy: the bank-matching legal name, plus the trading
 * name the public actually recognises. Publishing both is what keeps "Yash Gadia" on the
 * bank account and "Anvaya Labs" on the website from looking like a discrepancy.
 */
export const operatorFullName = (): string =>
  filled(business.tradeName) && filled(business.legalName)
    ? `${business.legalName} (trading as ${business.tradeName})`
    : business.legalName;

/** Enough detail to render a real contact block: a named entity plus a way to reach it. */
export const hasIdentity = () =>
  filled(business.legalName) && (filled(business.email) || filled(business.phone));

export const hasGrievanceOfficer = () =>
  filled(business.grievanceOfficerName) && filled(business.grievanceOfficerEmail);

export const hasAddress = () => filled(business.address);
export const hasGstin = () => filled(business.gstin);
export const hasPhone = () => filled(business.phone);
export const hasEmail = () => filled(business.email);

/** Fields still missing, so the build can warn instead of shipping a half-page silently. */
export const missingBusinessFields = (): string[] =>
  (Object.keys(business) as (keyof BusinessInfo)[]).filter((k) => !filled(business[k]));
