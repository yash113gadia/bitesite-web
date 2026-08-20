import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Detail from '../components/Detail';
import { business, hasAddress, hasGstin, operatorFullName, portals } from '../config/business';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  useReveal();

  return (
    <>
      <Seo
        title="Contact BiteSite"
        description="Contact BiteSite: support email and phone, help with an order, and our grievance officer as required under Indian law."
        path="/contact"
      />

      <header className="pageHero">
        <div className="shell pageHero__inner">
          <p className="eyebrow">Contact us</p>
          <h1 className="pageHero__title">
            Talk to a person, <span className="say">not a form.</span>
          </h1>
          <p className="pageHero__lede">
            For anything about a specific order, in-app Support is fastest because your message
            arrives attached to that order. For everything else, use the details below.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell">
          <div className="contactGrid reveal" data-reveal>
            <div className="contactCard">
              <p className="contactCard__label">Email us</p>
              <p className="contactCard__value">
                {business.email ? (
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                ) : (
                  <Detail value="" label="Support email" />
                )}
              </p>
              <p className="contactCard__note">
                We aim to reply within two working days. Please include your order reference if your
                question is about an order.
              </p>
            </div>

            <div className="contactCard">
              <p className="contactCard__label">Call us</p>
              <p className="contactCard__value">
                {business.phone ? (
                  <a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phone}</a>
                ) : (
                  <Detail value="" label="Support phone" />
                )}
              </p>
              <p className="contactCard__note">
                Available during working hours, Monday to Saturday. Outside those hours, email
                reaches us faster.
              </p>
            </div>

            <div className="contactCard">
              <p className="contactCard__label">
                {hasAddress() ? 'Registered address' : 'Business details'}
              </p>
              <address className="contactCard__value">
                {operatorFullName()}
                {hasAddress() && (
                  <>
                    <br />
                    {business.address}
                  </>
                )}
              </address>
              <p className="contactCard__note">
                {business.entityType}
                {hasGstin() && <> · GSTIN: {business.gstin}</>}
              </p>
            </div>
          </div>

          <div className="rowList reveal" data-reveal>
            <article className="row">
              <h2 className="row__title">A problem with an order</h2>
              <div className="row__body">
                <p>
                  Use <strong>Support</strong> inside your account at{' '}
                  <a href={portals.app}>app.bitesite.in</a>. A grievance raised there is linked to the
                  specific order, so canteen and administration staff can see the order, its payment
                  and its full status history alongside your message. That is almost always the
                  quickest route to a refund or a correction.
                </p>
                <p>
                  What happens to your money in each situation is set out in our{' '}
                  <Link to="/refund-policy">refund and cancellation policy</Link>.
                </p>
              </div>
            </article>

            <article className="row">
              <h2 className="row__title">Bringing BiteSite to your college</h2>
              <div className="row__body">
                <p>
                  If you run a canteen, or you are a college administrator, get in touch by email
                  with your campus, the number of outlets you operate, and roughly how many students
                  you serve at peak. Onboarding covers setting up your outlets, staff accounts and
                  menu.
                </p>
                <p>
                  There is more detail on <Link to="/for-canteens">the canteens page</Link> and on{' '}
                  <Link to="/pricing">pricing</Link>.
                </p>
              </div>
            </article>

            <article className="row" id="grievance">
              <h2 className="row__title">Grievance officer</h2>
              <div className="row__body">
                <p>
                  As required under India's information technology rules and the Digital Personal
                  Data Protection Act, we publish a grievance officer responsible for complaints
                  about your data, your orders, or your use of the platform.
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
                  We acknowledge grievances within a reasonable period and work to resolve them
                  within the timeframes required under applicable Indian law. Please escalate here
                  only after in-app Support has been tried, unless the complaint is about how your
                  personal data has been handled.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
