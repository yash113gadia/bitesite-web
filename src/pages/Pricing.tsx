import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Detail from '../components/Detail';
import { business, portals } from '../config/business';
import { useReveal } from '../hooks/useReveal';

export default function Pricing() {
  useReveal();

  return (
    <>
      <Seo
        title="Pricing — BiteSite"
        description="What students pay on BiteSite (the canteen's own menu price, with no markup at checkout) and how colleges and canteens are charged for the platform."
        path="/pricing"
      />

      <header className="pageHero">
        <div className="shell pageHero__inner">
          <p className="eyebrow">Pricing</p>
          <h1 className="pageHero__title">Students pay for food. Canteens pay for the platform.</h1>
          <p className="pageHero__lede">
            No hidden charges at checkout and no surprise fees. Here is exactly who pays what, and
            for what.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell">
          <div className="priceGrid reveal" data-reveal>
            <article className="priceCard">
              <h2 className="priceCard__title">For students</h2>
              <p className="priceCard__figure">The menu price</p>
              <p className="priceCard__body">
                You pay your canteen's own price for the items you order, plus any taxes that canteen
                applies. BiteSite does not add a markup, a convenience fee, a platform fee, or a
                delivery charge at checkout.
              </p>
              <ul className="priceCard__list">
                {[
                  'No signup or subscription cost',
                  'No delivery or packaging charge — collection is at the counter',
                  'Discounts set by your canteen are applied automatically',
                  'Full refund to your original payment method if a paid order is cancelled',
                ].map((t) => (
                  <li key={t}>
                    <span className="panel__tick" aria-hidden="true" style={{ background: 'var(--terracotta-tint)', color: 'var(--terracotta-deep)' }}>
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a className="btn btn--primary priceCard__cta" href={portals.app}>
                Start ordering
              </a>
            </article>

            <article className="priceCard priceCard--lead">
              <h2 className="priceCard__title">For colleges and canteens</h2>
              <p className="priceCard__figure">
                {business.pricingDetail ? (
                  business.pricingDetail
                ) : (
                  <Detail value="" label="Commercial terms" />
                )}
              </p>
              <p className="priceCard__body">
                The platform is funded by the college or the canteen operator, not by charging
                students at checkout. Exact commercial terms depend on the number of outlets you run
                and the volume you serve, so they are agreed per campus.
              </p>
              <ul className="priceCard__list">
                {[
                  'Your own isolated space: outlets, staff accounts, menu and orders',
                  'Live order queue with payment already collected',
                  'Menu, pricing, discount and availability management',
                  'Cancellation with automatic refund when you cannot fulfil',
                  'Audit log of price and order changes',
                ].map((t) => (
                  <li key={t}>
                    <span className="panel__tick" aria-hidden="true">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link className="btn btn--onDark priceCard__cta" to="/contact">
                Request a quote
              </Link>
            </article>
          </div>

          <div className="rowList reveal" data-reveal style={{ marginTop: 'var(--gap-2xl)' }}>
            <article className="row">
              <h2 className="row__title">Taxes</h2>
              <div className="row__body">
                <p>
                  Taxes on food are set and charged by the canteen that sells it, in line with its
                  own registration and applicable rates. The total shown at checkout is the total you
                  pay.
                </p>
              </div>
            </article>
            <article className="row">
              <h2 className="row__title">Payment charges</h2>
              <div className="row__body">
                <p>
                  Payments are processed by Razorpay. Gateway charges are borne on the merchant side
                  and are not added to your order total at checkout.
                </p>
              </div>
            </article>
            <article className="row">
              <h2 className="row__title">Refunds</h2>
              <div className="row__body">
                <p>
                  Refunds are always for the full amount paid and always go back to the original
                  payment method. There is no cancellation charge and no restocking fee. See the{' '}
                  <Link to="/refund-policy">refund and cancellation policy</Link>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
