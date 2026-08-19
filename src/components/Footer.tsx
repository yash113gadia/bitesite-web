import { Link } from 'react-router-dom';
import {
  business,
  hasAddress,
  hasEmail,
  hasGrievanceOfficer,
  hasGstin,
  hasIdentity,
  hasPhone,
  missingBusinessFields,
  portals,
} from '../config/business';

const YEAR = new Date().getFullYear();

export default function Footer() {
  const missing = missingBusinessFields();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__mark">
              <span className="nav__markDot" aria-hidden="true">
                B
              </span>
              BiteSite
            </Link>
            <p className="footer__blurb">
              Order ahead from your college canteen, pay online, and collect it at the counter
              without standing in the queue.
            </p>
          </div>

          <div>
            <h2 className="footer__colTitle">Product</h2>
            <ul className="footer__list">
              <li>
                <Link to="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link to="/for-canteens">For canteens</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <a href={portals.app}>Student app</a>
              </li>
              <li>
                <a href={portals.outlet}>Canteen portal</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer__colTitle">Company</h2>
            <ul className="footer__list">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/contact#grievance">Grievance officer</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer__colTitle">Legal</h2>
            <ul className="footer__list">
              <li>
                <Link to="/terms">Terms of service</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/refund-policy">Refund &amp; cancellation</Link>
              </li>
              <li>
                <Link to="/shipping-and-delivery">Shipping &amp; delivery</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Merchant identity. Rendered only once real values exist — an invented
            company name or address here is worse than an incomplete page. */}
        {hasIdentity() && (
          <div className="footer__identity">
            <div className="footer__idItem">
              <span className="footer__idLabel">Operated by</span>
              <span className="footer__idValue">
                {business.legalName}
                {business.entityType && <> ({business.entityType})</>}
              </span>
            </div>
            {hasAddress() && (
              <div className="footer__idItem">
                <span className="footer__idLabel">Registered address</span>
                <address className="footer__idValue">{business.address}</address>
              </div>
            )}
            {(hasEmail() || hasPhone()) && (
              <div className="footer__idItem">
                <span className="footer__idLabel">Contact</span>
                <span className="footer__idValue">
                  {hasEmail() && <a href={`mailto:${business.email}`}>{business.email}</a>}
                  {hasEmail() && hasPhone() && <br />}
                  {hasPhone() && <a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phone}</a>}
                </span>
              </div>
            )}
            {hasGstin() && (
              <div className="footer__idItem">
                <span className="footer__idLabel">GSTIN</span>
                <span className="footer__idValue">{business.gstin}</span>
              </div>
            )}
            {hasGrievanceOfficer() && (
              <div className="footer__idItem">
                <span className="footer__idLabel">Grievance officer</span>
                <span className="footer__idValue">
                  {business.grievanceOfficerName}
                  <br />
                  <a href={`mailto:${business.grievanceOfficerEmail}`}>
                    {business.grievanceOfficerEmail}
                  </a>
                </span>
              </div>
            )}
          </div>
        )}

        <div className="footer__bottom">
          <span>© {YEAR} BiteSite. All rights reserved.</span>
          <span className="footer__pay">
            Payments secured by
            <span className="footer__payChip">Razorpay</span>
            <span className="footer__payChip">UPI</span>
            <span className="footer__payChip">Cards</span>
            <span className="footer__payChip">Net banking</span>
          </span>
        </div>

        {/* Developer aid only. A public "setup incomplete" banner would undermine the very
            review this site exists to pass; the unfilled values still show as visible
            pending markers on the pages that carry them. */}
        {import.meta.env.DEV && missing.length > 0 && (
          <p className="footer__setupNotice">
            <strong>Setup incomplete.</strong> {missing.length} business detail
            {missing.length === 1 ? '' : 's'} still unset in <code>src/config/business.ts</code>:{' '}
            {missing.join(', ')}. These are required before a payment gateway will approve the
            merchant account. This notice is not shown once they are filled in.
          </p>
        )}
      </div>
    </footer>
  );
}
