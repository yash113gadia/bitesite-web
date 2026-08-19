import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { portals } from '../config/business';
import { useReveal } from '../hooks/useReveal';

const STAGES = [
  {
    title: 'Create an account for your campus',
    body: [
      'You register once, choosing your college. Your account belongs to that campus, so from then on you only see its canteens, its menus and its prices.',
      'We verify you with a one-time code sent to your email, and to your phone as well if you give us a number. Codes are valid for ten minutes. Verification exists so that an order — and any refund on it — is always attached to a real, reachable person.',
    ],
  },
  {
    title: 'Browse a live menu',
    body: [
      'The menu you see is the one canteen staff maintain themselves: current prices, current discounts, and whether an item is actually available today. You can search it and filter by category rather than reading a board from across a crowded room.',
    ],
  },
  {
    title: 'Pay before the kitchen starts',
    body: [
      'Checkout goes through Razorpay, so you can pay by UPI, card or net banking. Your payment credentials are entered on Razorpay’s checkout and never reach BiteSite.',
      'The total is always recalculated on our servers from the canteen’s current prices, so what you are charged matches what the canteen actually charges. Your order only enters the kitchen queue once payment is confirmed — there is no pay-at-the-counter option, and nothing is cooked against an unpaid order.',
    ],
  },
  {
    title: 'Watch it move',
    body: [
      'The order page shows the real state of your order rather than a guess: awaiting payment, paid, preparing, ready for pickup, completed. If you opt in to notifications, your phone tells you the moment it is ready.',
    ],
  },
  {
    title: 'Collect and go',
    body: [
      'Walk to the counter, show your order reference, and take your food. Staff mark it collected. There is no delivery and nothing is shipped — see our shipping and delivery policy for exactly how fulfilment works.',
    ],
  },
  {
    title: 'If something goes wrong',
    body: [
      'If the canteen cannot fulfil a paid order, staff cancel it and a full refund is issued to your original payment method before the cancellation is even recorded. If an order has already started preparation, raise it through in-app Support and staff can review and refund it.',
    ],
  },
];

export default function HowItWorks() {
  useReveal();

  return (
    <>
      <Seo
        title="How BiteSite works"
        description="How ordering on BiteSite works end to end: campus account, OTP verification, live menu, prepayment through Razorpay, live order status, and counter pickup."
        path="/how-it-works"
      />

      <header className="pageHero">
        <div className="shell pageHero__inner">
          <p className="eyebrow eyebrow--saffron">How it works</p>
          <h1 className="pageHero__title">From your desk to the counter, without the queue.</h1>
          <p className="pageHero__lede">
            The whole transaction — choosing, ordering, paying — happens before you walk over. All
            that is left at the counter is picking the food up.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell">
          <div className="rowList">
            {STAGES.map((s, i) => (
              <article className="row reveal" data-reveal key={s.title}>
                <div>
                  <span className="step__n">{i + 1}</span>
                  <h2 className="row__title" style={{ marginTop: 'var(--gap-xs)' }}>
                    {s.title}
                  </h2>
                </div>
                <div className="row__body">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="shell cta__inner">
          <p className="eyebrow eyebrow--onDark">Try it</p>
          <h2 className="cta__title">Your canteen might already be on here.</h2>
          <p className="cta__lede">
            Create an account, pick your college, and see. If it is not listed yet, tell us and we
            will talk to them.
          </p>
          <div className="cta__actions">
            <a className="btn btn--onDark" href={portals.app}>
              Open the student app
            </a>
            <Link className="btn btn--ghostOnDark" to="/contact">
              Suggest my college
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
