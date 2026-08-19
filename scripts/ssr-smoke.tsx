/**
 * Render-crash smoke test.
 *
 * The site ships as a client-rendered SPA, so a build that type-checks can still throw at
 * runtime and leave a blank page — the worst failure mode for a site a payment gateway is
 * about to review. This renders every route to static markup in Node and fails loudly if
 * any of them throws or comes back suspiciously empty.
 *
 * Run: npx vite build --ssr scripts/ssr-smoke.tsx --outDir dist-ssr && node dist-ssr/ssr-smoke.js
 */
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../src/App';

const ROUTES = [
  '/',
  '/how-it-works',
  '/for-canteens',
  '/pricing',
  '/about',
  '/contact',
  '/terms',
  '/privacy-policy',
  '/refund-policy',
  '/shipping-and-delivery',
  '/definitely-not-a-real-page',
];

let failed = 0;

for (const route of ROUTES) {
  try {
    const html = renderToStaticMarkup(
      <StaticRouter location={route}>
        <App />
      </StaticRouter>,
    );
    // A route that renders almost nothing is a bug even if it does not throw.
    if (html.length < 1500) {
      console.error(`FAIL  ${route} — rendered only ${html.length} chars`);
      failed++;
    } else {
      console.log(`ok    ${route.padEnd(28)} ${html.length} chars`);
    }
  } catch (err) {
    console.error(`THROW ${route} — ${(err as Error).message}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\n${failed} route(s) failed to render.`);
  process.exit(1);
}
console.log('\nAll routes rendered.');
