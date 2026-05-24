import { useEffect, useRef, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  getProgrammeById,
  formatProgrammeDuration,
  formatProgrammePrice,
} from '@/data/programmes';
import { setPageSeo, injectJsonLd, removeJsonLd, SITE_URL } from '@/utils/seo';
import { rescanScrollReveal } from '@/utils/scrollReveal';
import ProgrammeBookingForm from '@/components/booking/ProgrammeBookingForm';
import BookingConfirmation from '@/components/booking/BookingConfirmation';

const TABS = [
  { id: 'presentation', label: 'Présentation' },
  { id: 'programme', label: 'Programme semaine par semaine' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'reservation', label: 'Réservation' },
];

const FILLOUT_URL = 'https://forms.fillout.com/t/c24LK1RZ97us';

export default function ProgrammeDetail() {
  const { id } = useParams();
  const programme = getProgrammeById(id);
  const [activeTab, setActiveTab] = useState('presentation');
  const [bookingSuccess, setBookingSuccess] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    if (!programme) return;

    setPageSeo({
      title: `${programme.title} — Programme coaching | GML Fitness`,
      description: programme.seoDescription,
      image: programme.ogImage,
      path: `programmes/${programme.id}`,
    });

    injectJsonLd(`programme-${programme.id}`, {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: programme.title,
      description: programme.seoDescription,
      provider: {
        '@type': 'Person',
        name: 'Gilson Mendes',
      },
      offers: {
        '@type': 'Offer',
        price: programme.priceEur ?? undefined,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
      image: programme.ogImage,
      url: `${SITE_URL}/programmes/${programme.id}`,
    });

    window.scrollTo(0, 0);
    const t = setTimeout(() => rescanScrollReveal(), 200);

    return () => {
      clearTimeout(t);
      removeJsonLd(`programme-${programme.id}`);
    };
  }, [programme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveTab(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    );

    TABS.forEach(({ id: tabId }) => {
      const el = sectionRefs.current[tabId];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [programme]);

  if (!programme) {
    return <Navigate to="/#programmes" replace />;
  }

  const scrollToTab = (tabId) => {
    setActiveTab(tabId);
    sectionRefs.current[tabId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <article className="programme-detail">
      <div className="programme-hero">
        <div className="programme-hero__media" aria-hidden="true">
          <img src={programme.heroImage} alt="" width={1920} height={1080} />
        </div>
        <div className="programme-hero__overlay" aria-hidden="true" />
        <div className="programme-hero__content container-max">
          <Link
            to="/#programmes"
            className="inline-block text-sm text-white/80 hover:text-white mb-4"
          >
            ← Tous les programmes
          </Link>
          <p className="section-eyebrow text-white/80 m-0 mb-2">{programme.level}</p>
          <h1 className="font-display text-hero text-white m-0 mb-2">{programme.title}</h1>
          <p className="text-lg text-white/85 max-w-2xl m-0">{programme.subtitle}</p>
          <div className="flex flex-wrap gap-3 mt-6 text-sm text-white/90">
            <span className="badge badge-primary bg-white/10 text-white border border-white/20">
              {formatProgrammeDuration(programme)}
            </span>
            <span className="badge badge-primary bg-white/10 text-white border border-white/20">
              {programme.sessionsPerWeek} séances / sem.
            </span>
            <span className="badge badge-primary bg-white/10 text-white border border-white/20">
              {formatProgrammePrice(programme)}
            </span>
          </div>
        </div>
      </div>

      <nav className="programme-tabs" aria-label="Sections du programme">
        <div className="container-max">
          <ul className="programme-tabs__list" role="tablist">
            {TABS.map((tab) => (
              <li key={tab.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`programme-tabs__btn${activeTab === tab.id ? ' is-active' : ''}`}
                  onClick={() => scrollToTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section
        id="presentation"
        ref={(el) => { sectionRefs.current.presentation = el; }}
        className="section-padding scroll-mt-[calc(var(--header-height)+3.5rem)]"
        aria-labelledby="presentation-heading"
      >
        <div className="container-max max-w-3xl">
          <h2 id="presentation-heading" className="section-title text-left mb-8 reveal">
            Présentation
          </h2>
          <div className="space-y-4 text-[var(--color-text-muted)] reveal">
            {programme.description.map((para, i) => (
              <p key={i} className="m-0 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <h3 className="font-display text-2xl mt-10 mb-4 reveal">Ce qui est inclus</h3>
          <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 m-0 reveal">
            {programme.included.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-[var(--color-text-muted)] before:content-['✓'] before:text-accent before:font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="programme"
        ref={(el) => { sectionRefs.current.programme = el; }}
        className="section-padding section-muted scroll-mt-[calc(var(--header-height)+3.5rem)]"
        aria-labelledby="weeks-heading"
      >
        <div className="container-max">
          <header className="section-header text-left max-w-none mb-10 reveal">
            <h2 id="weeks-heading" className="section-title">
              Programme <span className="text-accent">semaine par semaine</span>
            </h2>
            <p className="section-subtitle text-left">
              {programme.weeks.length} phases détaillées — exemples d&apos;exercices par semaine.
            </p>
          </header>
          <div className="space-y-6">
            {programme.weeks.map((week, index) => (
              <div
                key={week.number}
                className={`card p-6 programme-week-card reveal${index % 3 === 1 ? ' reveal-delay-1' : index % 3 === 2 ? ' reveal-delay-2' : ''}`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-display text-xl m-0">
                    Semaine {week.number} — {week.focus}
                  </h3>
                  <span className="text-sm text-muted">{week.sessions} séances</span>
                </div>
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {week.exercises.map((ex) => (
                    <li
                      key={ex}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--color-bg-muted)] text-[var(--color-text-muted)]"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tarifs"
        ref={(el) => { sectionRefs.current.tarifs = el; }}
        className="section-padding scroll-mt-[calc(var(--header-height)+3.5rem)]"
        aria-labelledby="tarifs-heading"
      >
        <div className="container-max max-w-xl">
          <h2 id="tarifs-heading" className="section-title text-left mb-6 reveal">
            Tarifs
          </h2>
          <div className="card card-featured p-8 text-center reveal">
            <p className="section-eyebrow mb-2">Forfait programme complet</p>
            <p className="font-display text-5xl text-accent m-0 mb-2">
              {formatProgrammePrice(programme)}
            </p>
            <p className="text-muted text-sm m-0 mb-6">
              {formatProgrammeDuration(programme)} · {programme.sessionsPerWeek} séances / semaine
            </p>
            <ul className="text-left text-sm text-muted space-y-2 list-none p-0 m-0 mb-8">
              <li>✓ Coaching en présentiel ou visio</li>
              <li>✓ Suivi nutritionnel inclus</li>
              <li>✓ Séance découverte gratuite avant engagement</li>
            </ul>
            <button type="button" className="btn btn-primary" onClick={() => scrollToTab('reservation')}>
              Réserver ce programme
            </button>
          </div>
        </div>
      </section>

      <section
        id="reservation"
        ref={(el) => { sectionRefs.current.reservation = el; }}
        className="section-padding section-surface scroll-mt-[calc(var(--header-height)+3.5rem)]"
        aria-labelledby="reservation-heading"
      >
        <div className="container-max">
          <h2 id="reservation-heading" className="section-title text-left mb-8 reveal">
            Réservation
          </h2>

          {bookingSuccess ? (
            <BookingConfirmation programme={programme} bookingDetails={bookingSuccess} />
          ) : (
            <>
              <p className="text-muted max-w-2xl mb-8 reveal">
                Complétez le formulaire ci-dessous ou utilisez le calendrier Fillout pour choisir votre créneau.
              </p>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="reveal">
                  <h3 className="font-semibold mb-4">Demande rapide</h3>
                  <ProgrammeBookingForm
                    programme={programme}
                    onSuccess={(details) => setBookingSuccess(details)}
                  />
                </div>
                <div className="card overflow-hidden reveal reveal-delay-1">
                  <div className="bg-[var(--color-bg-inverse)] text-white px-5 py-4">
                    <h3 className="font-display text-xl m-0 mb-1">Calendrier en ligne</h3>
                    <p className="text-sm text-white/75 m-0">Fillout — choix du créneau</p>
                  </div>
                  <iframe
                    src={FILLOUT_URL}
                    className="w-full border-0"
                    style={{ minHeight: '720px' }}
                    title={`Réservation ${programme.title}`}
                    loading="lazy"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </article>
  );
}
