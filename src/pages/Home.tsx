import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portals } from '../config/business';
import { useReveal } from '../hooks/useReveal';
import Seo from '../components/Seo';

const STEPS = [
  {
    title: 'Pick your college',
    body: 'Your account belongs to one campus, so you only ever see your own canteens and their menus.',
    art: '/food/food_dosa.png',
  },
  {
    title: 'Order before you leave class',
    body: 'Browse the live menu, check what is actually available today, and build your order in a few taps.',
    art: '/food/food_wrap.png',
  },
  {
    title: 'Pay online',
    body: 'Payment is confirmed through Razorpay before the kitchen starts. Nothing is cooked against an unpaid order.',
    art: '/food/food_paratha.png',
  },
  {
    title: 'Collect at the counter',
    body: 'You get a notification the moment it is ready. Walk up, show your order, and get on with your break.',
    art: '/food/food_chai.png',
  },
];

/**
 * The canteen categories the platform actually carries. Deliberately excludes the
 * delivery-scooter artwork from the app: BiteSite is counter pickup only, and our own
 * shipping policy says so, so a rider on this page would contradict it.
 */
const DISHES = [
  { img: '/food/food_wrap.png', name: 'Rolls & wraps' },
  { img: '/food/food_paratha.png', name: 'Stuffed parathas' },
  { img: '/food/food_dosa.png', name: 'Dosa & sambar' },
  { img: '/food/food_maggi.png', name: 'Maggi & noodles' },
  { img: '/food/food_puff.png', name: 'Puffs & samosas' },
  { img: '/food/food_sandwich.png', name: 'Grilled sandwiches' },
  { img: '/food/food_chai.png', name: 'Kulhad chai' },
  { img: '/food/food_shake.png', name: 'Cold coffee & shakes' },
  { img: '/food/food_burger.png', name: 'Burgers & fries' },
  { img: '/food/food_spaghetti.png', name: 'Pasta' },
  { img: '/food/food_ramen.png', name: 'Ramen & soups' },
  { img: '/food/food_chicken.png', name: 'Chicken plates' },
];

const TRUST = [
  {
    icon: '₹',
    title: 'Paid before it is cooked',
    body: 'Every order is paid in full through Razorpay before it reaches the kitchen queue, so there are no unpaid orders and no arguments at the counter.',
  },
  {
    icon: '🔒',
    title: 'We never see your card',
    body: 'Card, UPI and bank details go straight to Razorpay. BiteSite stores only the amount, the payment reference, and whether it succeeded.',
  },
  {
    icon: '↩',
    title: 'Refunds are issued first',
    body: 'If a canteen has to cancel a paid order, the refund goes back to your original payment method before the cancellation is even recorded.',
  },
  {
    icon: '🛡',
    title: 'Your data stays yours',
    body: 'Passwords and verification codes are stored only as hashes, each college is isolated from every other, and you can delete your account from the app at any time.',
  },
];

const FAQ = [
  {
    q: 'Do I have to pay in advance?',
    a: 'Yes. BiteSite is prepaid only — there is no pay-at-the-counter option. An order is only sent to the kitchen once payment has been confirmed, which is what makes it possible to have your food ready before you arrive.',
  },
  {
    q: 'What happens if the canteen runs out of something?',
    a: 'Canteen staff can cancel the order from their queue. Cancelling a paid order always issues a full refund to your original payment method through Razorpay, and the refund is processed before the cancellation is recorded.',
  },
  {
    q: 'Can I cancel an order myself?',
    a: 'You can walk away from an order that has not been paid for — it simply expires and you are never charged. Once an order has been paid for and the kitchen has started preparing it, you cannot self-cancel, because the ingredients and effort are already committed. Raise it through in-app Support and staff can review and refund it.',
  },
  {
    q: 'Does BiteSite deliver food?',
    a: 'No. BiteSite is in-person counter pickup only. There is no delivery, no courier, and no shipping of any kind. You collect your order yourself from your own college canteen counter.',
  },
  {
    q: 'Is my payment information safe?',
    a: 'Payments are handled entirely by Razorpay, a PCI-DSS compliant payment gateway. Your card, UPI or bank credentials are entered on Razorpay’s checkout and are never sent to or stored by BiteSite.',
  },
  {
    q: 'How do I get my college canteen on BiteSite?',
    a: 'Get in touch through the contact page. Onboarding a college means setting up its outlets, staff accounts and menu, and each college runs in its own isolated space on the platform.',
  },
];

function BreakClock() {
  return (
    <div className="clock reveal" data-reveal>
      <p className="clock__title">A 30-minute break, before and after</p>
      <p className="clock__sub">Illustrative. Real queue times vary by campus and by hour.</p>

      <div className="clock__row">
        <div className="clock__label">
          <span className="clock__labelWho">Without BiteSite</span>
          <span>12 min to eat</span>
        </div>
        <div className="clock__bar">
          <div className="clock__seg clock__seg--queue" style={{ ['--w' as string]: '60%' }}>
            18 min queueing
          </div>
          <div className="clock__seg clock__seg--eat" style={{ ['--w' as string]: '40%' }}>
            12 min
          </div>
        </div>
      </div>

      <div className="clock__row clock__row--after">
        <div className="clock__label">
          <span className="clock__labelWho">With BiteSite</span>
          <span>28 min to eat</span>
        </div>
        <div className="clock__bar">
          <div className="clock__seg clock__seg--pickup" style={{ ['--w' as string]: '7%' }}>
            2
          </div>
          <div className="clock__seg clock__seg--eat" style={{ ['--w' as string]: '93%' }}>
            28 min actually eating
          </div>
        </div>
      </div>

      <p className="clock__verdict">
        <span className="clock__verdictNum">+16</span>
        <span>minutes of your own break, handed back to you.</span>
      </p>

      <img className="clock__mascot" src="/mascot/bito-celebrate.png" alt="" aria-hidden="true" />
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="faq__item" key={item.q}>
            <h3>
              <button
                type="button"
                className="faq__q"
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.q}
                <span className="faq__sign" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div className="faq__a" id={`faq-a-${i}`} data-open={isOpen} role="region">
              <div className="faq__aInner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  useReveal();

  return (
    <>
      <Seo
        title="BiteSite — order ahead from your college canteen"
        description="BiteSite lets students order from their college canteen ahead of time, pay online, and collect at the counter without queueing. Prepaid, refundable, counter pickup only."
        path="/"
      />

      {/* ── Hero ── */}
      <section className="hero grain">
        <div className="shell hero__inner">
          <div>
            <p className="eyebrow">College canteen pre-ordering</p>
            <h1 className="hero__title">
              Your lunch break is 30 minutes. The queue eats <em>half of it.</em>
            </h1>
            <p className="hero__lede">
              BiteSite lets you order from your own college canteen before you get there, pay
              online, and walk straight to the counter when it is ready.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={portals.app}>
                Order from your canteen
              </a>
              <Link className="btn btn--ghost" to="/how-it-works">
                See how it works
              </Link>
            </div>
            <p className="hero__note">
              <span className="hero__noteDot" aria-hidden="true" />
              Live for students at app.bitesite.in · Payments secured by Razorpay
            </p>
          </div>

          <BreakClock />
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section" id="how">
        <div className="shell">
          <div className="sectionHead sectionHead--wide reveal" data-reveal>
            <div>
              <p className="eyebrow eyebrow--saffron">How it works</p>
              <h2 className="sectionHead__title">Four steps, and none of them is standing in line.</h2>
            </div>
            <p className="sectionHead__lede">
              The whole point is that the transaction is finished before you walk over. All that is
              left at the counter is picking the food up.
            </p>
          </div>

          <ol className="steps reveal" data-reveal>
            {STEPS.map((s, i) => (
              <li className="step" key={s.title}>
                <span className="step__n">{i + 1}</span>
                <img className="step__art" src={s.art} alt="" aria-hidden="true" loading="lazy" />
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── What's on the counter ── */}
      <section className="menuBand" id="menu">
        <div className="shell menuBand__head">
          <p className="eyebrow eyebrow--onDark">On the counter</p>
          <h2 className="menuBand__title">The food your canteen already makes.</h2>
          <p className="menuBand__lede">
            BiteSite does not change the menu — your canteen sets its own items, prices and
            availability. It only changes how you get hold of them.
          </p>
        </div>
        <div className="marquee">
          {/* Rendered twice so the loop is seamless; the copy is hidden from assistive tech. */}
          {[0, 1].map((pass) =>
            DISHES.map((d) => (
              <figure
                className="dish"
                key={`${pass}-${d.name}`}
                aria-hidden={pass === 1 ? true : undefined}
              >
                <img className="dish__img" src={d.img} alt="" loading="lazy" />
                <figcaption className="dish__name">{d.name}</figcaption>
              </figure>
            )),
          )}
        </div>
      </section>

      {/* ── Two audiences ── */}
      <section className="section" id="who">
        <div className="shell">
          <div className="sectionHead reveal" data-reveal>
            <p className="eyebrow">Two sides of the counter</p>
            <h2 className="sectionHead__title">Built for the students queueing and the staff serving.</h2>
          </div>

          <div className="split reveal" data-reveal>
            <article className="panel panel--students">
              <p className="eyebrow eyebrow--onDark">For students</p>
              <h3 className="panel__title">Get your break back</h3>
              <ul className="panel__list">
                {[
                  'No queue at peak hours — the food is made while you are still in class',
                  'A live menu that shows what is actually available today',
                  'Pay by UPI, card, or net banking through Razorpay',
                  'A notification the moment your order is ready to collect',
                  'A full refund, automatically, if the canteen has to cancel',
                ].map((t) => (
                  <li key={t}>
                    <span className="panel__tick" aria-hidden="true">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a className="btn btn--onDark panel__cta" href={portals.app}>
                Open the student app
              </a>
            </article>

            <article className="panel panel--canteens">
              <p className="eyebrow eyebrow--onDark">For canteens and colleges</p>
              <h3 className="panel__title">Cook against paid orders</h3>
              <ul className="panel__list">
                {[
                  'Every paid order in one live queue, updating as it comes in',
                  'The money is collected before anything is cooked',
                  'Manage your own menu, prices, discounts and availability',
                  'Cancel an order you cannot fulfil and the refund is issued for you',
                  'Your college runs in its own isolated space on the platform',
                ].map((t) => (
                  <li key={t}>
                    <span className="panel__tick" aria-hidden="true">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link className="btn btn--ghostOnDark panel__cta" to="/for-canteens">
                Bring BiteSite to your campus
              </Link>
              <img className="panel__mascot" src="/mascot/bito-cooking.png" alt="" aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      {/* ── Trust and payments ── */}
      <section className="section trust grain" id="trust">
        <div className="shell">
          <div className="sectionHead sectionHead--wide reveal" data-reveal>
            <div>
              <p className="eyebrow eyebrow--moss">Payments and safety</p>
              <h2 className="sectionHead__title">Money and data, handled carefully.</h2>
            </div>
            <p className="sectionHead__lede">
              Prepayment only works if refunds work. Here is exactly how both are handled, and what
              BiteSite does and does not store.
            </p>
          </div>

          <div className="trustGrid reveal" data-reveal>
            {TRUST.map((t) => (
              <article className="trustCard" key={t.title}>
                <div className="trustCard__icon" aria-hidden="true">
                  {t.icon}
                </div>
                <h3 className="trustCard__title">{t.title}</h3>
                <p className="trustCard__body">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" id="faq">
        <div className="shell">
          <div className="sectionHead reveal" data-reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="sectionHead__title">The things people ask before their first order.</h2>
          </div>
          <div className="reveal" data-reveal>
            <Faq />
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="section cta">
        <div className="shell cta__inner">
          <p className="eyebrow eyebrow--onDark">Ready when you are</p>
          <h2 className="cta__title">Order now, eat sooner.</h2>
          <p className="cta__lede">
            If your college is already on BiteSite, you can create an account and place your first
            order in a couple of minutes. If it is not, tell us and we will talk to your canteen.
          </p>
          <div className="cta__actions">
            <a className="btn btn--onDark" href={portals.app}>
              Create a student account
            </a>
            <Link className="btn btn--ghostOnDark" to="/contact">
              Get your college on BiteSite
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
