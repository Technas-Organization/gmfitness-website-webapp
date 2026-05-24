const SITE_ORIGIN = 'https://jonasvihoaleaniglo.github.io';
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');
const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;
const DEFAULT_OG = `${SITE_URL}/preview-image.jpg`;

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function setPageSeo({ title, description, image, path = '' }) {
  const url = path ? `${SITE_URL}/${path.replace(/^\//, '')}` : `${SITE_URL}/`;
  const ogImage = image || DEFAULT_OG;

  document.title = title;
  setMeta('name', 'title', title);
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:image', ogImage);
  setMeta('property', 'og:url', url);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', ogImage);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

export function injectJsonLd(id, data) {
  const scriptId = `jsonld-${id}`;
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function removeJsonLd(id) {
  document.getElementById(`jsonld-${id}`)?.remove();
}

export { SITE_URL, DEFAULT_OG };
