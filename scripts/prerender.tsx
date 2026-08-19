/**
 * Static pre-rendering.
 *
 * GitHub Pages has no SPA rewrite. Serving every deep link through 404.html works in a
 * browser but returns an HTTP 404, which is wrong for /terms and /privacy-policy — exactly
 * the URLs a payment gateway and a crawler follow. So each route is rendered to its own
 * dist/<route>/index.html and served as a real 200 with real content in the HTML.
 *
 * React 19 hoists <title>/<meta>/<link> to <head> in the browser, but server rendering
 * emits them inline. They are lifted out of the body markup here and spliced into <head>,
 * replacing the template's defaults, so each page ships correct metadata even before JS.
 *
 * Run via `npm run build`.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import App from '../src/App';

const DIST = join(process.cwd(), 'dist');

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
];

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

/** Pull head-bound tags out of rendered body markup. */
function extractHead(markup: string): { head: string; body: string } {
  const head: string[] = [];
  let body = markup;

  const patterns = [
    /<title>[\s\S]*?<\/title>/g,
    /<meta\b[^>]*\/?>/g,
    /<link\b[^>]*rel="canonical"[^>]*\/?>/g,
  ];

  for (const re of patterns) {
    body = body.replace(re, (match) => {
      head.push(match);
      return '';
    });
  }
  return { head: head.join('\n    '), body };
}

let count = 0;

for (const route of ROUTES) {
  const markup = renderToString(
    <StaticRouter location={route}>
      <App />
    </StaticRouter>,
  );

  const { head, body } = extractHead(markup);

  if (body.length < 1500) {
    console.error(`FAIL ${route} rendered only ${body.length} chars`);
    process.exit(1);
  }

  const html = template
    // Drop the template's placeholder title/description; each page supplies its own.
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, '')
    .replace('</head>', `  ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const outPath = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`  ${route.padEnd(26)} -> ${outPath.replace(DIST, 'dist')} (${body.length} chars)`);
  count++;
}

// Unknown paths still fall back to the SPA shell, which renders the 404 page.
writeFileSync(join(DIST, '404.html'), template);

console.log(`\nPre-rendered ${count} routes.`);
