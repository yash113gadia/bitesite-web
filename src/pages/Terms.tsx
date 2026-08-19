import { Link } from 'react-router-dom';
import PolicyPage, { type PolicySection } from '../components/PolicyPage';
import Detail from '../components/Detail';
import { business, portals } from '../config/business';

const sections: PolicySection[] = [
  {
    id: 'about',
    heading: 'About these terms',
    body: (
      <>
        <p>
          These terms govern your use of BiteSite, the canteen pre-ordering service operated by{' '}
          <strong>
            <Detail value={business.legalName} label="Operator legal name" />
          </strong>
          , available at www.bitesite.in and at the app, outlet and admin portals on the
          bitesite.in domain.
        </p>
        <p>
          By creating an account or placing an order, you agree to these terms. If you do not agree
          with them, do not use the service.
        </p>
      </>
    ),
  },
  {
    id: 'what-it-is',
    heading: 'What BiteSite is, and what it is not',
    body: (
      <>
        <p>
          BiteSite is a technology platform. It lets a student browse their own college canteen's
          menu, place an order in advance, pay for it online, and collect it at the canteen counter.
        </p>
        <p>
          BiteSite does not cook, sell, or hand over food. The canteen or outlet operating at your
          college prepares the food, sets its own menu and prices, decides what is available, and is
          responsible for the quality, safety, hygiene and accuracy of what it serves. Your order is
          a purchase from that canteen, facilitated through this platform.
        </p>
        <p>
          Each account belongs to exactly one college. You will only ever see the canteens, menus
          and orders belonging to your own college.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    heading: 'Accounts and eligibility',
    body: (
      <>
        <p>
          Accounts are intended for students and staff of a college that has been onboarded onto
          BiteSite. You must provide accurate information when registering, and you must be
          competent to enter into a contract under applicable Indian law. If you are a minor, you
          may use the service only with the consent and under the supervision of a parent or
          guardian.
        </p>
        <p>
          You are responsible for keeping your password confidential and for every order placed from
          your account. Tell us promptly if you believe someone else has accessed it.
        </p>
      </>
    ),
  },
  {
    id: 'verification',
    heading: 'Verifying your account',
    body: (
      <p>
        New accounts are verified by a one-time code sent to your email address, and to your mobile
        number if you provide one. Codes expire after ten minutes and allow a limited number of
        attempts. You cannot sign in until verification is complete. This exists to keep orders and
        refunds attached to a real, reachable person.
      </p>
    ),
  },
  {
    id: 'ordering',
    heading: 'Ordering and payment',
    body: (
      <>
        <p>
          <strong>Payment is required in advance for every order.</strong> BiteSite does not offer
          pay-at-the-counter. An order is only passed to the canteen's kitchen queue once payment
          has been confirmed as successful.
        </p>
        <p>
          Payments are processed by Razorpay, a third-party payment gateway, under its own terms and
          privacy policy. Your card, UPI or bank credentials are entered on Razorpay's checkout.
          BiteSite never receives or stores them.
        </p>
        <p>
          Order totals are always calculated on our servers from the canteen's current menu prices.
          If a price displayed to you is out of date, the amount computed at checkout is the amount
          that applies. Placing an order is an offer to buy; it is accepted when payment succeeds and
          the order enters the canteen's queue.
        </p>
        <p>
          An order that is not paid for within the checkout window expires automatically. Nothing is
          charged and nothing is prepared.
        </p>
      </>
    ),
  },
  {
    id: 'prices',
    heading: 'Prices, taxes and availability',
    body: (
      <p>
        Menu items, prices, discounts, taxes and availability are set and maintained by each canteen,
        and can change at any time. Availability shown in the app reflects what the canteen has
        marked as available and is not a guarantee that an item will still be in stock when the
        kitchen begins preparing your order.
      </p>
    ),
  },
  {
    id: 'cancellations',
    heading: 'Cancellations and refunds',
    body: (
      <>
        <p>
          If a canteen cannot fulfil a paid order, its staff can cancel it. Cancelling a paid order
          always issues a full refund to your original payment method, and the refund is processed
          before the cancellation is recorded.
        </p>
        <p>
          Once an order has moved into preparation, you cannot cancel it yourself, because the
          canteen has already committed ingredients and effort to it. If something has genuinely
          gone wrong, raise it through in-app Support so staff can review and refund it.
        </p>
        <p>
          The full details, including timelines, are in our{' '}
          <Link to="/refund-policy">refund and cancellation policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'collection',
    heading: 'Collecting your order',
    body: (
      <>
        <p>
          BiteSite is <strong>counter pickup only</strong>. There is no delivery and nothing is
          shipped. You collect your order in person from your own college canteen counter, and you
          may be asked to show your order reference.
        </p>
        <p>
          Prepared food is perishable. If an order is not collected within a reasonable time of being
          marked ready, the canteen may be unable to hold it, and you may not be entitled to a refund
          in that case. See our{' '}
          <Link to="/shipping-and-delivery">shipping and delivery policy</Link> for how fulfilment
          works.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    heading: 'Acceptable use',
    body: (
      <>
        <p>When using BiteSite, you must not:</p>
        <ul>
          <li>access, or try to access, another user's account or another college's data</li>
          <li>place orders you do not intend to collect, or use the service to harass a canteen</li>
          <li>
            attempt to interfere with, probe, or disrupt the service, its security controls, or its
            payment flows
          </li>
          <li>use automated means to scrape, overload or replicate the service</li>
          <li>upload unlawful, offensive or infringing content through any form on the platform</li>
        </ul>
      </>
    ),
  },
  {
    id: 'suspension',
    heading: 'Suspension and termination',
    body: (
      <p>
        We may suspend or close an account that breaches these terms, that is used fraudulently, or
        where required to protect other users, a canteen, or the platform. You can delete your own
        account at any time from your account page; what deletion does and does not remove is
        described in our <Link to="/privacy-policy">privacy policy</Link>.
      </p>
    ),
  },
  {
    id: 'availability',
    heading: 'Service availability',
    body: (
      <p>
        We work to keep BiteSite available, but we do not guarantee uninterrupted or error-free
        operation. The service may be unavailable during maintenance, during an outage at a provider
        we depend on, or when a canteen has closed ordering. A canteen may also stop accepting
        orders at its own discretion.
      </p>
    ),
  },
  {
    id: 'ip',
    heading: 'Intellectual property',
    body: (
      <p>
        The BiteSite name, logo, mascot, interface and underlying software belong to the operator
        named above. Menu content, outlet names and logos belong to the respective canteens and
        colleges. Nothing in these terms transfers ownership of any of it to you.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    body: (
      <>
        <p>
          BiteSite is responsible for operating the platform: taking your order accurately, passing
          it to the correct canteen, and handling payment and refunds as described in these terms and
          the refund policy.
        </p>
        <p>
          BiteSite is not responsible for the preparation, quality, safety, hygiene, weight,
          temperature or nutritional content of the food, which is the responsibility of the canteen
          that prepared it. To the fullest extent permitted by law, our aggregate liability in
          relation to any order is limited to the amount you paid for that order. Nothing in these
          terms excludes liability that cannot be excluded under applicable law, including under
          consumer protection law.
        </p>
      </>
    ),
  },
  {
    id: 'indemnity',
    heading: 'Indemnity',
    body: (
      <p>
        You agree to indemnify the operator against claims, losses and reasonable costs arising from
        your breach of these terms or your misuse of the service.
      </p>
    ),
  },
  {
    id: 'privacy',
    heading: 'Privacy',
    body: (
      <p>
        Our <Link to="/privacy-policy">privacy policy</Link> explains what personal data we collect,
        why, who it is shared with, how long it is kept, and the rights you have over it. It forms
        part of these terms.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to these terms',
    body: (
      <p>
        These terms may change as the service develops. When they do, the updated version is
        published on this page with a new effective date. Continuing to use BiteSite after a change
        means you accept the updated terms.
      </p>
    ),
  },
  {
    id: 'law',
    heading: 'Governing law and jurisdiction',
    body: (
      <p>
        These terms are governed by the laws of India. Subject to any right you have under consumer
        protection law to approach a forum local to you, the courts having jurisdiction over the
        operator's registered address shall have jurisdiction over any dispute arising from them.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contacting us',
    body: (
      <>
        <p>
          For anything about a specific order, use in-app Support from your account at{' '}
          <a href={portals.app}>app.bitesite.in</a> so your message is attached to that order.
        </p>
        <p>
          For anything else, including questions about these terms, see our{' '}
          <Link to="/contact">contact page</Link>, which also lists our grievance officer as required
          under Indian law.
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <PolicyPage
      title="Terms of service"
      lede="The agreement between you and the operator of BiteSite covering accounts, ordering, prepayment, cancellation, collection and liability."
      description="BiteSite terms of service: accounts, advance payment via Razorpay, cancellations and refunds, counter pickup, acceptable use, and liability."
      path="/terms"
      sections={sections}
    />
  );
}
