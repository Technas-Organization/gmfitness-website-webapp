/**
 * Scroll-triggered fade-in via IntersectionObserver.
 * Adds `.is-visible` to elements with class `.reveal`.
 */

const REVEAL_SELECTOR = '.reveal';
const ROOT_MARGIN = '0px 0px -8% 0px';
const THRESHOLD = 0.12;

const observed = new WeakSet();

export function initScrollReveal() {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll(REVEAL_SELECTOR);
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
  );

  elements.forEach((el) => {
    if (!observed.has(el)) {
      observed.add(el);
      observer.observe(el);
    }
  });

  return () => observer.disconnect();
}

/** Re-scan after lazy-loaded sections mount */
export function rescanScrollReveal() {
  initScrollReveal();
}
