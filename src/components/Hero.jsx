import { useI18n } from '@/hooks/useI18n';

const HERO_IMAGE = `${import.meta.env.BASE_URL}images/coach-conseil.jpg`;

const Hero = () => {
  const { t } = useI18n();

  return (
    <section id="accueil" className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <img
          src={HERO_IMAGE}
          alt="Gilson Mendes, coach sportif, conseillant deux clients en salle"
          width={1680}
          height={1120}
          fetchPriority="high"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content container-max">
        <p className="section-eyebrow text-white/80 reveal">
          {t('hero.eyebrow', 'Coach sportif à domicile · Services à la personne')}
        </p>

        <h1 id="hero-heading" className="hero__title reveal reveal-delay-1">
          {t('hero.title', 'Corps · Esprit ·')}{' '}
          <span className="hero__highlight">{t('hero.titleHighlight', 'Équilibre')}</span>
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
          <a href="#tarifs" className="btn btn-ghost-light">
            {t('hero.cta.secondary', 'Voir le programme')}
          </a>
        </div>

        <dl className="hero__stats reveal reveal-delay-4">
          <div>
            <dt className="hero__stat-label">{t('hero.stats.tax', 'Avantage fiscal')}</dt>
            <dd className="hero__stat-value m-0">50%</dd>
          </div>
          <div>
            <dt className="hero__stat-label">{t('hero.stats.price', 'Dès / séance')}</dt>
            <dd className="hero__stat-value m-0">35 €</dd>
          </div>
          <div>
            <dt className="hero__stat-label">{t('hero.stats.experience', "Années d'expérience")}</dt>
            <dd className="hero__stat-value m-0">8+</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Hero;
