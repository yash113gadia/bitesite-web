import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { portals } from '../config/business';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found — BiteSite"
        description="That page does not exist on the BiteSite website."
        path="/404"
      />
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="shell">
          <img
            src="/mascot/bito-lost.png"
            alt=""
            aria-hidden="true"
            style={{ width: 150, margin: '0 auto var(--gap-md)' }}
          />
          <p className="eyebrow">404</p>
          <h1 style={{ marginTop: 'var(--gap-sm)' }}>
            That page is <span className="say">not on the menu.</span>
          </h1>
          <p
            className="pageHero__lede"
            style={{ marginInline: 'auto' }}
          >
            The link may be out of date, or the page may have moved. Everything about BiteSite is
            reachable from the homepage.
          </p>
          <div className="cta__actions" style={{ justifyContent: 'center' }}>
            <Link className="btn btn--orange" to="/">
              Back to the homepage
            </Link>
            <a className="btn btn--ghost" href={portals.app}>
              Open the student app
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
