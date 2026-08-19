import { Link } from 'react-router-dom';
import PolicyPage, { type PolicySection } from '../components/PolicyPage';
import { portals } from '../config/business';

const sections: PolicySection[] = [
  {
    id: 'no-shipping',
    heading: 'BiteSite does not ship or deliver anything',
    body: (
      <>
        <div className="callout">
          <p className="callout__title">Counter pickup only</p>
          <p>
            BiteSite is an order-ahead and collect service. We do not deliver food, we do not ship
            goods, we use no couriers or delivery partners, and we never ask for a delivery address.
            Every order is collected in person by the person who placed it, at their own college
            canteen counter.
          </p>
        </div>
        <p>
          Because nothing is shipped, there are no shipping charges, no delivery fees, no packaging
          or handling charges, no dispatch timelines, and no serviceable-pincode list. This page
          exists to state that plainly and to describe how fulfilment actually works instead.
        </p>
      </>
    ),
  },
  {
    id: 'how-fulfilment-works',
    heading: 'How an order is fulfilled',
    body: (
      <>
        <ul>
          <li>
            <strong>You order and pay.</strong> The order is placed from your account and paid for in
            advance through Razorpay.
          </li>
          <li>
            <strong>The canteen receives it.</strong> Once payment is confirmed, the order appears in
            your canteen's live queue.
          </li>
          <li>
            <strong>The kitchen prepares it.</strong> The order moves to Preparing when staff start
            work on it.
          </li>
          <li>
            <strong>You are told it is ready.</strong> The order is marked ready for pickup, and if
            you have opted in to notifications you get one at that moment.
          </li>
          <li>
            <strong>You collect it.</strong> You go to the counter, show your order reference, and
            take your food. Staff mark it as collected.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'timing',
    heading: 'Preparation times',
    body: (
      <p>
        How long an order takes depends on the item, the canteen, and how busy it is — a snack at a
        quiet hour and a full meal at the lunch rush are not comparable. Preparation times are
        controlled by each canteen and BiteSite does not promise a fixed time. The status shown on
        your order is the accurate, live picture: it tells you when preparation has actually started
        and when the food is actually ready.
      </p>
    ),
  },
  {
    id: 'where',
    heading: 'Where you can collect',
    body: (
      <p>
        Only at the outlet you ordered from, on your own college campus. Your account belongs to one
        college, so you can only see and order from that college's canteens. An order cannot be
        transferred to a different outlet or a different campus.
      </p>
    ),
  },
  {
    id: 'uncollected',
    heading: 'Orders that are not collected',
    body: (
      <p>
        Prepared food is perishable and cannot be held indefinitely or resold. If an order is not
        collected within a reasonable time of being marked ready, the canteen may be unable to keep
        it, and a refund may not be available in that case. If you know you cannot collect an order,
        raise it through Support as early as possible so staff can decide what is possible.
      </p>
    ),
  },
  {
    id: 'charges',
    heading: 'Charges',
    body: (
      <p>
        You pay the canteen's own price for the items you ordered, plus any taxes the canteen
        applies. BiteSite adds no shipping, delivery, packaging or handling charge at checkout,
        because none of those apply to counter pickup. See our <Link to="/pricing">pricing page</Link>{' '}
        for how the platform is funded.
      </p>
    ),
  },
  {
    id: 'help',
    heading: 'If something goes wrong',
    body: (
      <>
        <p>
          If an order is not ready, not correct, or cannot be collected, raise it through Support from
          your account at <a href={portals.app}>app.bitesite.in</a> so it is tied to that order.
        </p>
        <p>
          For what happens to your money in those situations, see our{' '}
          <Link to="/refund-policy">refund and cancellation policy</Link>. Other contact routes,
          including our grievance officer, are on the <Link to="/contact">contact page</Link>.
        </p>
      </>
    ),
  },
];

export default function Shipping() {
  return (
    <PolicyPage
      title="Shipping and delivery policy"
      lede="BiteSite is counter pickup only. Nothing is shipped or delivered, so this page explains how orders are actually fulfilled and collected."
      description="BiteSite shipping and delivery policy: there is no shipping or delivery. Orders are collected in person at your own college canteen counter, with no shipping charges."
      path="/shipping-and-delivery"
      sections={sections}
    />
  );
}
