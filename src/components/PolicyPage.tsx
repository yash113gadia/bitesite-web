import type { ReactNode } from 'react';
import { business } from '../config/business';
import Seo from './Seo';

export interface PolicySection {
  id: string;
  heading: string;
  body: ReactNode;
}

interface Props {
  title: string;
  lede: string;
  description: string;
  path: string;
  sections: PolicySection[];
}

/**
 * Shared layout for the long-form policy pages.
 *
 * The contents rail is generated from the sections themselves, so a heading can never
 * drift out of sync with its link — and every section gets a stable anchor, which matters
 * because gateway support teams and users both cite these by deep link.
 */
export default function PolicyPage({ title, lede, description, path, sections }: Props) {
  return (
    <>
      <Seo title={`${title} — BiteSite`} description={description} path={path} />

      <header className="pageHero">
        <div className="shell pageHero__inner">
          <p className="eyebrow">Legal</p>
          <h1 className="pageHero__title">{title}</h1>
          <p className="pageHero__lede">{lede}</p>
          <p className="pageHero__meta">
            {business.lastUpdated ? (
              <>Last updated {business.lastUpdated}.</>
            ) : (
              <span className="pending">Effective date to be published</span>
            )}
          </p>
        </div>
      </header>

      <div className="prose">
        <div className="shell prose__inner">
          <nav className="toc" aria-label="On this page">
            <h2 className="toc__title">On this page</h2>
            <ul className="toc__list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.heading}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="proseBody">
            {sections.map((s) => (
              <section key={s.id} id={s.id}>
                <h2>{s.heading}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
