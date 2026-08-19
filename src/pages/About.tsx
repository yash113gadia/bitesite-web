import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Detail from '../components/Detail';
import { business, hasGstin, portals } from '../config/business';
import { useReveal } from '../hooks/useReveal';

const ROWS = [
  {
    title: 'The problem we started from',
    body: [
      'A college break is short and fixed. The canteen rush is short and fixed too, and it lands at exactly the same time for everyone. The result is a queue that can take a third of the break, followed by eating in a hurry.',
      'The canteen has the mirror-image version of the same problem: a crush of people all arriving at once, orders taken verbally under time pressure, cash handled at the counter, and no way to know what to prepare until someone is standing in front of you asking for it.',
    ],
  },
  {
    title: 'What we built',
    body: [
      'BiteSite moves the ordering and the paying off the counter and into the phone, before the break starts. The student picks from their canteen’s live menu, pays online, and gets a notification when the food is ready. The only thing left at the counter is handing the food over.',
      'For the canteen, that turns an unpredictable rush into a queue of paid orders it can see and work through, with the money already collected before anything is cooked.',
    ],
  },
  {
    title: 'One platform, many colleges',
    body: [
      'BiteSite is multi-tenant. Every college that joins gets its own isolated space on the platform: its own outlets, its own staff accounts, its own menu and pricing, and its own orders. A student account belongs to exactly one college and can never see another college’s data.',
      'That isolation is enforced in the software rather than by convention, and it is covered by automated tests, because it is the thing that has to hold for a shared platform to be trustworthy.',
    ],
  },
  {
    title: 'How we think about money',
    body: [
      'Prepayment only works if the refund path is at least as reliable as the payment path. So a paid order that gets cancelled is refunded through the gateway before the cancellation is recorded, rather than after, and staff cannot mark an order paid without a real payment behind it.',
      'We never see your card, UPI or bank credentials. Those go to Razorpay, our payment gateway, and we keep only the amount, the reference, and whether it worked.',
    ],
  },
];

export default function About() {
  useReveal();

  return (
    <>
      <Seo
        title="About BiteSite"
        description="BiteSite is a multi-tenant canteen pre-ordering platform for Indian colleges. Who operates it, what it does, and how orders, payments and refunds are handled."
        path="/about"
      />

      <header className="pageHero">
        <div className="shell pageHero__inner">
          <p className="eyebrow">About us</p>
          <h1 className="pageHero__title">A queue is a bad use of a 30-minute break.</h1>
          <p className="pageHero__lede">
            BiteSite is a canteen pre-ordering platform for Indian colleges. Students order and pay
            ahead; canteens cook against orders that are already paid for; nobody stands in line.
          </p>
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

      <section className="section trust grain">
        <div className="shell">
          <div className="sectionHead reveal" data-reveal>
            <p className="eyebrow">Business details</p>
            <h2 className="sectionHead__title">Who operates BiteSite</h2>
            <p className="sectionHead__lede">
              BiteSite is operated by the entity below, which is also the entity behind the payment
              account used to collect payments on the platform.
            </p>
          </div>

          <div className="contactGrid reveal" data-reveal>
            <div className="contactCard">
              <p className="contactCard__label">Legal entity</p>
              <p className="contactCard__value">
                <Detail value={business.legalName} label="Legal name" />
              </p>
              <p className="contactCard__note">
                <Detail value={business.entityType} label="Entity type" />
              </p>
            </div>
            <div className="contactCard">
              <p className="contactCard__label">Registered address</p>
              <address className="contactCard__value">
                <Detail value={business.address} label="Registered address" />
              </address>
            </div>
            <div className="contactCard">
              <p className="contactCard__label">Contact</p>
              <p className="contactCard__value">
                {business.email ? (
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                ) : (
                  <Detail value="" label="Support email" />
                )}
                <br />
                {business.phone ? (
                  <a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phone}</a>
                ) : (
                  <Detail value="" label="Support phone" />
                )}
              </p>
            </div>
            {hasGstin() && (
              <div className="contactCard">
                <p className="contactCard__label">GSTIN</p>
                <p className="contactCard__value">{business.gstin}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="shell cta__inner">
          <p className="eyebrow eyebrow--onDark">Get in touch</p>
          <h2 className="cta__title">Want BiteSite at your college?</h2>
          <p className="cta__lede">
            Onboarding a college means setting up its outlets, staff accounts and menu. Tell us about
            your campus and we will take it from there.
          </p>
          <div className="cta__actions">
            <Link className="btn btn--onDark" to="/contact">
              Contact us
            </Link>
            <a className="btn btn--ghostOnDark" href={portals.app}>
              Open the student app
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
