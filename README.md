# bitesite-web

The public marketing and business website for **BiteSite**, served at
[www.bitesite.in](https://www.bitesite.in).

This repository contains **only** the marketing site. It has no login, no accounts and no
ordering. The product itself is a separate Spring Boot application living on its own
subdomains:

| Host                 | What it is                        |
| -------------------- | --------------------------------- |
| `www.bitesite.in`    | This site — marketing and legal   |
| `app.bitesite.in`    | Student ordering app              |
| `outlet.bitesite.in` | Canteen staff portal              |
| `admin.bitesite.in`  | Platform administration           |

Every call to action here links out to `app.bitesite.in`.

## Why this site exists

Two jobs, and both matter:

1. Explain what BiteSite is to students and to colleges.
2. Serve as the business website a **payment gateway reviews during merchant onboarding**.
   That second job is why the legal pages are thorough, why the business identity is
   published in the footer of every page, and why a Grievance Officer is named.

## Before going live — required

`src/config/business.ts` holds the operator's real business identity and **every field
starts empty**. Nothing is invented: an unfilled field renders as a visible
"to be published" marker rather than a plausible-looking fake, because a fabricated
company name or address on a live merchant site is worse than an obviously incomplete one.

Fill in all of:

- `legalName`, `entityType` — exactly as on the bank account and KYC documents
- `address` — full registered address with PIN code
- `email`, `phone` — working support contacts
- `gstin` — if GST-registered
- `grievanceOfficerName`, `grievanceOfficerEmail` — required under India's IT Rules 2021
- `lastUpdated` — effective date shown on the legal pages
- `pricingDetail` — the concrete commercial terms for colleges

While any field is empty, a setup notice is rendered in the footer listing what is missing.
It disappears once they are all set.

## Pages

| Route                     | Purpose                                       |
| ------------------------- | --------------------------------------------- |
| `/`                       | Landing page                                  |
| `/how-it-works`           | The ordering flow end to end                  |
| `/for-canteens`           | The pitch to colleges and canteen operators   |
| `/pricing`                | Who pays what                                 |
| `/about`                  | About the business, with identity details     |
| `/contact`                | Contact routes + Grievance Officer            |
| `/terms`                  | Terms of service                              |
| `/privacy-policy`         | Privacy policy (DPDP Act aware)               |
| `/refund-policy`          | Refund and cancellation policy                |
| `/shipping-and-delivery`  | States plainly that fulfilment is pickup-only |

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run smoke    # render every route in Node, fail on a crash or a near-empty page
npm run lint
```

`npm run smoke` exists because this is a client-rendered SPA: a build can type-check
cleanly and still throw at runtime, leaving a blank page. The smoke test renders all
routes server-side and fails loudly if any of them throws.

## Design

The palette, the mascot and the `Baloo 2` wordmark are inherited from the product so the
two read as one brand. The display face here is **Fraunces** rather than the app's Baloo 2:
this site has to look like a real company to a compliance reviewer, and Baloo 2 at poster
sizes reads playful.

The one signature device is the **break clock** on the landing page — a 30-minute break
drawn as a bar, showing how much of it the queue consumes. It is labelled illustrative,
because it is.

## Deployment

Static build (`dist/`) deployed to Azure Static Web Apps, with `staticwebapp.config.json`
providing the SPA fallback and security headers. DNS is managed in Cloudflare.
