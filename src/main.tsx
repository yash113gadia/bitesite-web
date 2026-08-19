import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './styles/tokens.css';
import './styles/base.css';
import './styles/chrome.css';
import './styles/home.css';
import './styles/page.css';

const root = document.getElementById('root')!;

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Every route is pre-rendered at build time (scripts/prerender.tsx), so in production the
// root already holds real markup and we hydrate it. The 404 shell — and `vite dev` — ship
// an empty root, so fall back to a fresh client render there.
if (root.hasChildNodes()) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
