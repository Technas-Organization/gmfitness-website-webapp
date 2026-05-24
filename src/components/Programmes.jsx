import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  programmes,
  formatProgrammeDuration,
  formatProgrammePrice,
} from '@/data/programmes';
import { injectJsonLd, removeJsonLd, SITE_URL } from '@/utils/seo';

export default function Programmes() {
  useEffect(() => {
    injectJsonLd('programmes-itemlist', {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Programmes coaching GML Fitness',
      description: 'Programmes de coaching sportif personnalisés sur la Côte d\'Azur',
      numberOfItems: programmes.length,
      itemListElement: programmes.map((p, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/gmfitness-website/programmes/${p.id}`,
        name: p.title,
        description: p.subtitle,
      })),
    });

    return () => removeJsonLd('programmes-itemlist');
  }, []);

  return (
    <section
      id="programmes"
      className="section-padding section-surface scroll-mt-[var(--header-height)]"
      aria-labelledby="programmes-heading"
    >
      <div className="container-max">
        <header className="section-header reveal">
          <p className="section-eyebrow">Programmes</p>
          <h2 id="programmes-heading" className="section-title">
            Choisissez votre <span className="text-accent">parcours</span>
          </h2>
          <p className="section-subtitle">
            Des programmes structurés pour chaque objectif — du débutant au confirmé, sur la Côte d&apos;Azur ou en visio.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-6">
          {programmes.map((programme, index) => (
            <Link
              key={programme.id}
              to={`/programmes/${programme.id}`}
              className={`card overflow-hidden group reveal${index % 2 === 1 ? ' reveal-delay-1' : ''}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-muted)]">
                <img
                  src={programme.heroImage}
                  alt={programme.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-wide text-white/80 m-0 mb-1">
                    {programme.level}
                  </p>
                  <h3 className="font-display text-2xl text-white m-0">{programme.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted mb-4 line-clamp-2">{programme.subtitle}</p>
                <dl className="grid grid-cols-3 gap-2 text-center text-xs m-0">
                  <div>
                    <dt className="text-subtle m-0">Durée</dt>
                    <dd className="font-semibold m-0 mt-1">{formatProgrammeDuration(programme)}</dd>
                  </div>
                  <div>
                    <dt className="text-subtle m-0">Fréquence</dt>
                    <dd className="font-semibold m-0 mt-1">{programme.sessionsPerWeek}/sem.</dd>
                  </div>
                  <div>
                    <dt className="text-subtle m-0">À partir de</dt>
                    <dd className="font-semibold m-0 mt-1 text-accent">
                      {formatProgrammePrice(programme)}
                    </dd>
                  </div>
                </dl>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-accent group-hover:underline">
                  Voir le programme →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
