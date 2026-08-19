const SITE = 'https://www.bitesite.in';

interface Props {
  title: string;
  description: string;
  path: string;
}

/**
 * Per-page document metadata.
 *
 * React 19 hoists `<title>`, `<meta>` and `<link>` rendered anywhere in the tree into
 * `<head>`, so this needs no helmet library. A canonical URL matters here beyond SEO:
 * a payment gateway reviewing the merchant site should find one unambiguous address
 * for each policy page.
 */
export default function Seo({ title, description, path }: Props) {
  const url = `${SITE}${path}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BiteSite" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}/icon-512.png`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
