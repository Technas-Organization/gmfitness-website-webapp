import { useI18n } from '@/hooks/useI18n';

const Services = () => {
  const { t } = useI18n();

  const delayClass = ['', ' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3', ' reveal-delay-4'];

  const services = [
    {
      icon: '💪',
      titleKey: 'services.items.personal.title',
      descriptionKey: 'services.items.personal.description',
      featuresKeys: [
        'services.items.personal.features.custom',
        'services.items.personal.features.psychology',
        'services.items.personal.features.mobility',
        'services.items.personal.features.mindfulness',
      ],
      priceKey: 'services.items.personal.price',
    },
    {
      icon: '👥',
      titleKey: 'services.items.group.title',
      descriptionKey: 'services.items.group.description',
      featuresKeys: [
        'services.items.group.features.small',
        'services.items.group.features.quality',
        'services.items.group.features.affordable',
        'services.items.group.features.motivation',
      ],
      priceKey: 'services.items.group.price',
    },
    {
      icon: '🏠',
      titleKey: 'services.items.online.title',
      descriptionKey: 'services.items.online.description',
      featuresKeys: [
        'services.items.online.features.videos',
        'services.items.online.features.plans',
        'services.items.online.features.support',
        'services.items.online.features.flexible',
      ],
      priceKey: 'services.items.online.price',
    },
    {
      icon: '🏢',
      titleKey: 'services.items.corporate.title',
      descriptionKey: 'services.items.corporate.description',
      featuresKeys: [
        'services.items.corporate.features.corporate',
        'services.items.corporate.features.associations',
        'services.items.corporate.features.seniors',
        'services.items.corporate.features.wellbeing',
      ],
      priceKey: 'services.items.corporate.price',
    },
  ];

  return (
    <section id="services" className="section-padding section-surface" aria-labelledby="services-heading">
      <div className="container-max">
        <header className="section-header reveal">
          <p className="section-eyebrow">{t('services.eyebrow', 'Offres')}</p>
          <h2 id="services-heading" className="section-title">
            {t('services.title', 'Mes')}{' '}
            <span className="text-accent">{t('services.titleHighlight', 'Services')}</span>
          </h2>
          <p className="section-subtitle">
            {t(
              'services.subtitle',
              'Des solutions adaptées à tous les besoins pour vous accompagner vers vos objectifs de forme et de bien-être.'
            )}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.titleKey}
              className={`card p-8 reveal${delayClass[index + 1] || ''}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl" aria-hidden="true">{service.icon}</span>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-[var(--color-text)] m-0 mb-2">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed m-0">{t(service.descriptionKey)}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-8 list-none p-0 m-0">
                {service.featuresKeys.map((featureKey) => (
                  <li key={featureKey} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="text-accent shrink-0" aria-hidden="true">✓</span>
                    {t(featureKey)}
                  </li>
                ))}
              </ul>

              <footer className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="font-display text-3xl text-accent m-0">{t(service.priceKey)}</p>
                <a href="#booking" className="btn btn-primary sm:shrink-0">
                  {t('services.choose', 'Choisir ce service')}
                </a>
              </footer>
            </article>
          ))}
        </div>

        <aside className="card mt-12 p-8 text-center reveal">
          <h3 className="font-display text-2xl tracking-wide mb-3">
            {t('services.unsure.title', 'Pas sûr du service qui vous convient ?')}
          </h3>
          <p className="text-muted mb-6 max-w-xl mx-auto">
            {t('services.unsure.subtitle', "Discutons de vos objectifs lors d'un appel gratuit de 15 minutes.")}
          </p>
          <a href="#contact" className="btn btn-secondary">
            {t('services.unsure.cta', 'Appel gratuit')}
          </a>
        </aside>
      </div>
    </section>
  );
};

export default Services;
