import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { portals } from '../config/business';
import { useReveal } from '../hooks/useReveal';

const ROWS = [
  {
    title: 'Cook against paid orders',
    body: [
      'Every order that reaches your queue has already been paid for in full. There is no cash to reconcile at the counter, no order abandoned after it was cooked, and no argument about what was ordered.',
      'Staff cannot mark an order as paid without a real payment behind it. The system will not let them.',
    ],
  },
  {
    title: 'One live queue',
    body: [
      'Orders appear as they are paid for and update as you work through them: start preparing, mark ready, mark collected. The screen refreshes on its own and only redraws when something has actually changed, so it does not flicker while you are using it.',
    ],
  },
  {
    title: 'Your menu, under your control',
    body: [
      'Items, categories, prices, per-item discounts, photographs and availability are all managed by your own staff. If you sell out of something at 12:40, you mark it unavailable and no student can order it at 12:41.',
    ],
  },
  {
    title: 'Cancel without the awkward part',
    body: [
      'If you cannot fulfil an order, cancelling it issues the student a full refund to their original payment method through Razorpay, automatically, before the cancellation is recorded. You do not handle the refund and the student does not have to chase it.',
    ],
  },
  {
    title: 'Separate from every other college',
    body: [
      'Your campus runs in its own isolated space. Your outlets, your staff accounts, your menu, your prices and your orders are not visible to any other college on the platform, and that isolation is enforced in the software and covered by automated tests.',
    ],
  },
  {
    title: 'A record of what changed',
    body: [
      'Price changes, order status changes, staff actions and grievance resolutions are written to an audit log with who did it and when. It is there for accountability and for working out what happened when something is disputed.',
    ],
  },
];

export default function ForCanteens() {
  useReveal();

  return (
    <>
      <Seo
        title="BiteSite for canteens and colleges"
        description="Run your college canteen on BiteSite: a live queue of prepaid orders, your own menu and pricing control, automatic refunds on cancellation, and an isolated space per college."
        path="/for-canteens"
      />

      <header className="pageHero">
        <div className="shell pageHero__inner">
          <p className="eyebrow">For canteens and colleges</p>
          <h1 className="pageHero__title">
            Turn the lunch rush into a queue <span className="say">you can see.</span>
          </h1>
          <p className="pageHero__lede">
            Instead of a crowd arriving at once with orders you cannot predict, you get a list of
            paid orders you can work through, with the money already collected.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--orange" to="/contact">
              Talk to us about your campus
            </Link>
            <a className="btn btn--ghost" href={portals.outlet}>
              Canteen portal sign-in
            </a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="shell">
          <div className="rowList">
            {ROWS.map((r) => (
              <article className="row reveal" data-reveal key={r.title}>
                <h2 className="row__title">{r.title}</h2>
                <div className="row__body">
                  {r.body.map((p) => (
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
          <p className="eyebrow eyebrow--onDark">Next step</p>
          <h2 className="cta__title">
            Tell us about <span className="say">your canteen.</span>
          </h2>
          <p className="cta__lede">
            Let us know your campus, how many outlets you run, and roughly how many students you
            serve at peak, and we will walk you through what onboarding involves.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--onDark" to="/contact">
              Get in touch
            </Link>
            <Link className="btn btn--ghostOnDark" to="/pricing">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
