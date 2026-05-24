import { useI18n } from '@/hooks/useI18n';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80&auto=format&fit=crop';

const Hero = () => {
  const { t } = useI18n();

  return (
    <section id="accueil" className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <img
          src={HERO_IMAGE}
          alt="Coach sportif en séance d'entraînement en salle de fitness"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content container-max">
        <p className="section-eyebrow text-white/80 reveal">Coach sportif · Côte d&apos;Azur</p>

        <h1 id="hero-heading" className="hero__title reveal reveal-delay-1">
          {t('hero.title', 'Transformez votre')}{' '}
          <span className="text-accent">{t('hero.titleHighlight', 'corps')}</span>
        </h1>

        <p className="hero__subtitle reveal reveal-delay-2">
          {t(
            'hero.subtitle',
            "Coach sportif diplômé avec 8+ ans d'expérience. Programmes sur-mesure, suivi nutritionnel et accompagnement holistique pour des résultats durables."
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
          <a href="#booking" className="btn btn-primary">
            {t('hero.cta.primary', 'Réserver une séance')}
          </a>
          <a href="#programmes" className="btn btn-ghost-light">
            {t('hero.cta.secondary', 'Voir le programme')}
          </a>
        </div>

        <dl className="hero__stats reveal reveal-delay-4">
          <div>
            <dt className="hero__stat-label">{t('hero.stats.clients', 'Clients transformés')}</dt>
            <dd className="hero__stat-value m-0">200+</dd>
          </div>
          <div>
            <dt className="hero__stat-label">{t('hero.stats.experience', "Années d'expérience")}</dt>
            <dd className="hero__stat-value m-0">8+</dd>
          </div>
          <div>
            <dt className="hero__stat-label">{t('hero.stats.success', 'Taux de réussite')}</dt>
            <dd className="hero__stat-value m-0">95%</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Hero;
