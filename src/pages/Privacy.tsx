import { Link } from 'react-router-dom';
import PolicyPage, { type PolicySection } from '../components/PolicyPage';
import Detail from '../components/Detail';
import { business, hasAddress, operatorFullName, portals } from '../config/business';

const sections: PolicySection[] = [
  {
    id: 'scope',
    heading: 'Who this policy is from',
    body: (
      <>
        <p>
          This policy explains how{' '}
          <strong>
            <Detail value={operatorFullName()} label="Operator legal name" />
          </strong>{' '}
          handles personal data in BiteSite, the canteen pre-ordering service. It covers the
          marketing site at www.bitesite.in and the student, canteen and administration portals on
          the bitesite.in domain.
        </p>
        <p>
          It describes what the service actually does today, and is written to align with India's
          Digital Personal Data Protection Act.
        </p>
      </>
    ),
  },
  {
    id: 'collect',
    heading: 'What we collect',
    body: (
      <>
        <ul>
          <li>
            <strong>Account details.</strong> Your name, email address and password. The password is
            stored only as a bcrypt hash and is never held in a readable form. A mobile number and a
            roll number are optional and are stored only if you provide them.
          </li>
          <li>
            <strong>Verification codes.</strong> One-time codes sent to your email or phone, stored
            only as hashes, with their expiry and attempt count.
          </li>
          <li>
            <strong>Your college.</strong> The single college your account belongs to, which
            determines the canteens and menus you can see.
          </li>
          <li>
            <strong>Order data.</strong> What you ordered, from which outlet, at what price, when,
            and the status of the order through preparation and collection.
          </li>
          <li>
            <strong>Payment references.</strong> The order amount, Razorpay's order and payment
            reference identifiers, and the payment status Razorpay reports back to us.
          </li>
          <li>
            <strong>Support requests.</strong> The subject and text of any grievance you raise, the
            order it relates to, and the response from canteen or administration staff.
          </li>
          <li>
            <strong>Push notification subscriptions.</strong> If you opt in to order-ready alerts,
            the browser-issued subscription endpoint and keys needed to deliver them.
          </li>
          <li>
            <strong>Operational and audit logs.</strong> Records of significant actions such as menu
            price changes, order status changes and account deletions, kept for accountability and
            fraud investigation.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'not-collect',
    heading: 'What we never collect',
    body: (
      <div className="callout callout--moss">
        <p className="callout__title">Your payment credentials never reach us</p>
        <p>
          Card numbers, CVVs, UPI PINs, bank credentials and similar details are entered on
          Razorpay's checkout and are processed by Razorpay. BiteSite never receives, sees or stores
          them. We hold only the amount, Razorpay's reference identifiers, and whether the payment
          succeeded or failed.
        </p>
      </div>
    ),
  },
  {
    id: 'why',
    heading: 'Why we process it, and on what basis',
    body: (
      <>
        <p>
          We process personal data to provide the service you asked for, and for no unrelated
          purpose. Specifically, to:
        </p>
        <ul>
          <li>create and authenticate your account, and verify that you are reachable</li>
          <li>show you your own college's canteens and menus</li>
          <li>take payment and confirm it before your order enters the kitchen queue</li>
          <li>let canteen staff prepare your order and hand it to you</li>
          <li>notify you when your order is ready or has been cancelled</li>
          <li>process refunds</li>
          <li>let you raise support issues and let staff respond to them</li>
          <li>investigate misuse and keep records the canteen needs for its accounts</li>
        </ul>
        <p>
          The basis for this processing is the consent you give when you register and place an
          order, together with what is necessary to perform that order and to meet our legal and
          accounting obligations. We do not use your data for advertising, and we do not sell it.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    heading: 'Who your data is shared with',
    body: (
      <>
        <ul>
          <li>
            <strong>Your college's canteen staff.</strong> Staff at the outlet you ordered from can
            see your order and the name attached to it, so they can prepare it and hand it over.
            They cannot see other colleges' data.
          </li>
          <li>
            <strong>Razorpay.</strong> Our payment gateway, which processes your payment and any
            refund under its own privacy policy.
          </li>
          <li>
            <strong>Infrastructure and communication providers.</strong> The cloud hosting, email and
            SMS providers we use to run the service and to send you verification codes.
          </li>
          <li>
            <strong>Authorities,</strong> where we are legally required to disclose something.
          </li>
        </ul>
        <p>We do not sell or rent personal data, and we do not share it for advertising.</p>
      </>
    ),
  },
  {
    id: 'security',
    heading: 'How we protect it',
    body: (
      <ul>
        <li>Passwords are stored as bcrypt hashes; verification codes as SHA-256 hashes.</li>
        <li>All traffic to the service is served over HTTPS.</li>
        <li>
          Access is role-based, and each college's data is isolated so one college can never read
          another's.
        </li>
        <li>Sensitive staff and administrative actions are recorded in an audit log.</li>
        <li>
          Rate limiting is applied to sign-in, registration, checkout, verification and support
          forms to limit abuse.
        </li>
      </ul>
    ),
  },
  {
    id: 'retention',
    heading: 'How long we keep it',
    body: (
      <p>
        Account data is kept while your account is active. Order and payment records are kept
        afterwards because the canteen has a legitimate accounting and tax need for them, but with
        the details identifying you removed if you delete your account. Verification codes are
        short-lived and expire within minutes. Audit logs are retained for accountability.
      </p>
    ),
  },
  {
    id: 'rights',
    heading: 'Your rights',
    body: (
      <>
        <p>You can:</p>
        <ul>
          <li>
            <strong>Access and review</strong> the account details we hold, from your account page in
            the app
          </li>
          <li>
            <strong>Correct</strong> your details by editing them in the app
          </li>
          <li>
            <strong>Delete your account,</strong> which removes or anonymises your name, email, phone
            number and roll number and signs you out immediately
          </li>
          <li>
            <strong>Withdraw consent</strong> for optional processing, such as turning off push
            notifications
          </li>
          <li>
            <strong>Raise a grievance</strong> about how your data has been handled, and have it
            addressed by our grievance officer
          </li>
        </ul>
        <p>
          When you delete your account, anonymised order and payment records remain so the canteen's
          books stay complete. They can no longer be linked back to you.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    heading: 'Children',
    body: (
      <p>
        BiteSite is intended for college students and staff. It is not directed at children. If you
        believe a child has created an account without appropriate consent, contact us and we will
        remove it.
      </p>
    ),
  },
  {
    id: 'cookies',
    heading: 'Cookies and local storage',
    body: (
      <p>
        The app sets a session cookie so you stay signed in, and a security token used to protect
        forms against cross-site request forgery. These are necessary for the service to work. We do
        not use advertising or cross-site tracking cookies. This marketing site does not set
        analytics or advertising cookies.
      </p>
    ),
  },
  {
    id: 'transfers',
    heading: 'Where your data is processed',
    body: (
      <p>
        The service is hosted in India. Some providers we rely on may process limited data outside
        India; where that happens we rely on the provider's own safeguards and on transfers being
        permitted under applicable Indian law.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <p>
        If this policy changes, the updated version is published on this page with a new effective
        date. Material changes affecting how we use your data will be brought to your attention in
        the app.
      </p>
    ),
  },
  {
    id: 'grievance',
    heading: 'Grievance officer',
    body: (
      <>
        <p>
          In line with India's information technology rules and the Digital Personal Data Protection
          Act, we publish a grievance officer who is responsible for addressing complaints about your
          data or your use of the service.
        </p>
        <div className="callout">
          <p className="callout__title">Grievance officer</p>
          <p>
            <Detail value={business.grievanceOfficerName} label="Officer name" />
            <br />
            {business.grievanceOfficerEmail ? (
              <a href={`mailto:${business.grievanceOfficerEmail}`}>
                {business.grievanceOfficerEmail}
              </a>
            ) : (
              <Detail value="" label="Officer email" />
            )}
            {hasAddress() && (
              <>
                <br />
                {business.address}
              </>
            )}
          </p>
        </div>
        <p>
          We acknowledge grievances within a reasonable period and aim to resolve them within the
          timeframes required under applicable Indian law. For an issue with a specific order, using
          in-app Support at <a href={portals.app}>app.bitesite.in</a> is faster, because it attaches
          your message to that order. Our <Link to="/contact">contact page</Link> lists all routes.
        </p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <PolicyPage
      title="Privacy policy"
      lede="What personal data BiteSite collects, why, who it is shared with, how long it is kept, and the rights you have over it."
      description="BiteSite privacy policy: what data we collect, why payment credentials never reach us, who data is shared with, retention, your DPDP Act rights, and our grievance officer."
      path="/privacy-policy"
      sections={sections}
    />
  );
}
