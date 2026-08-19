import { Link } from 'react-router-dom';
import PolicyPage, { type PolicySection } from '../components/PolicyPage';
import Detail from '../components/Detail';
import { business, portals } from '../config/business';

const sections: PolicySection[] = [
  {
    id: 'summary',
    heading: 'In short',
    body: (
      <>
        <p>
          Every BiteSite order is paid for in advance. Because of that, refunds matter, and this page
          sets out exactly when one is issued, how it is issued, and how long it takes.
        </p>
        <div className="callout">
          <p className="callout__title">The rule we build to</p>
          <p>
            An order is never marked cancelled while your money is still uncollected. When a paid
            order is cancelled, the refund is issued through Razorpay <strong>first</strong>, and the
            cancellation is recorded only after that succeeds.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'canteen-cancels',
    heading: 'When the canteen cancels a paid order',
    body: (
      <>
        <p>
          A canteen may be unable to fulfil an order it has already accepted payment for — an
          ingredient runs out, equipment fails, or the outlet has to close early. Its staff can
          cancel the order from their queue.
        </p>
        <p>
          Cancelling a paid order <strong>always issues a full refund</strong> of the amount you paid,
          to your original payment method, through Razorpay. You do not need to request it and you do
          not need to do anything. You are notified that the order was cancelled.
        </p>
      </>
    ),
  },
  {
    id: 'payment-mismatch',
    heading: 'If money left your account but the order did not appear',
    body: (
      <>
        <p>
          Occasionally a payment succeeds at the gateway while the confirmation back to us fails, for
          example on a dropped connection. The order then shows as unpaid on our side even though you
          were charged.
        </p>
        <p>
          Our system accepts confirmation from either the gateway's server-to-server notification or
          the response in your browser, whichever arrives first, so most of these reconcile
          automatically within minutes. Razorpay also auto-refunds payments that are never captured.
        </p>
        <p>
          If neither happens, raise it through in-app Support with your payment reference and it will
          be investigated and refunded directly.
        </p>
      </>
    ),
  },
  {
    id: 'preparing',
    heading: 'After preparation has started',
    body: (
      <>
        <p>
          Once an order moves into <strong>Preparing</strong>, you cannot cancel it yourself. The
          canteen has already committed ingredients and effort, and the food cannot be resold.
        </p>
        <p>
          If something has genuinely gone wrong — the wrong item was prepared, an item you paid for
          was not included, or the order could not actually be fulfilled despite being accepted —
          raise it through Support. Canteen and administration staff can review it and issue a manual
          refund where it is warranted.
        </p>
      </>
    ),
  },
  {
    id: 'not-charged',
    heading: 'Orders that were never charged',
    body: (
      <p>
        An order that never completes payment — you abandon checkout, the payment fails, or the
        checkout window expires — is never sent to the kitchen and nothing is taken from your
        account. There is nothing to refund in that case. If your bank shows a pending
        authorisation, it is released by your bank without any action from us.
      </p>
    ),
  },
  {
    id: 'method-timing',
    heading: 'How refunds are paid, and how long they take',
    body: (
      <>
        <ul>
          <li>
            <strong>Method.</strong> Refunds always go back to the original payment method. We cannot
            redirect a refund to a different card, UPI ID or bank account, and we do not issue cash
            or store credit.
          </li>
          <li>
            <strong>Amount.</strong> A cancelled paid order is refunded in full, including any taxes
            charged on it.
          </li>
          <li>
            <strong>Initiation.</strong> The refund is initiated with Razorpay immediately as part of
            the cancellation.
          </li>
          <li>
            <strong>Settlement.</strong> Money typically reaches your account within{' '}
            <strong>5 to 7 business days</strong>, in line with Razorpay's standard refund timelines.
            How quickly it appears after that is controlled by your bank or UPI provider, not by
            BiteSite.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'request',
    heading: 'How to request a refund review',
    body: (
      <>
        <p>
          Use <strong>Support</strong> from your account at <a href={portals.app}>app.bitesite.in</a>.
          Describe the order and what went wrong, and include the order reference shown on the order
          detail page. Raising it in-app matters: it attaches your request to the specific order, so
          canteen and administration staff can see the payment and its history alongside your
          message.
        </p>
        <p>
          We aim to acknowledge refund requests promptly and to resolve them as quickly as the
          canteen can confirm what happened.
        </p>
      </>
    ),
  },
  {
    id: 'escalate',
    heading: 'If you are not satisfied',
    body: (
      <>
        <p>
          If a refund request has not been resolved to your satisfaction, escalate it to our
          grievance officer:
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
          </p>
        </div>
        <p>
          Full contact routes are on our <Link to="/contact">contact page</Link>. This policy should
          be read together with our <Link to="/terms">terms of service</Link>.
        </p>
      </>
    ),
  },
];

export default function Refund() {
  return (
    <PolicyPage
      title="Refund and cancellation policy"
      lede="When a BiteSite order can be cancelled, when a refund is issued automatically, how refunds are paid, and how long they take to reach you."
      description="BiteSite refund and cancellation policy: cancelled paid orders are refunded in full to the original payment method through Razorpay, typically settling in 5-7 business days."
      path="/refund-policy"
      sections={sections}
    />
  );
}
