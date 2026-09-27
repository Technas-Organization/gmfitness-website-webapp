import { useI18n } from '@/hooks/useI18n';

const IMG = `${import.meta.env.BASE_URL}images/`;
const COACH_PORTRAIT = `${IMG}coach-sourire.jpg`;

const GALLERY = [
  { src: `${IMG}yoga-arbre.jpg`, alt: "Séance de yoga en extérieur, posture de l'arbre" },
  { src: `${IMG}yoga-chien.jpg`, alt: 'Séance de yoga en extérieur, posture du chien tête en bas' },
];

const About = () => {
  const { t } = useI18n();

  const achievements = [
    {
      icon: '🏆',
      titleKey: 'about.achievements.certifications.title',
      itemsKeys: [
        'about.achievements.certifications.items.0',
        'about.achievements.certifications.items.1',
        'about.achievements.certifications.items.2',
      ],
    },
    {
      icon: '🎯',
      titleKey: 'about.achievements.specializations.title',
      itemsKeys: [
        'about.achievements.specializations.items.0',
        'about.achievements.specializations.items.1',
        'about.achievements.specializations.items.2',
        'about.achievements.specializations.items.3',
      ],
    },
    {
      icon: '💪',
      titleKey: 'about.achievements.philosophy.title',
      itemsKeys: [
        'about.achievements.philosophy.items.0',
        'about.achievements.philosophy.items.1',
        'about.achievements.philosophy.items.2',
      ],
    },
  ];

  return (
    <section id="about" className="section-padding section-muted" aria-labelledby="about-heading">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <header className="mb-8">
              <p className="section-eyebrow">{t('about.eyebrow', 'Votre coach')}</p>
              <h2 id="about-heading" className="section-title text-left">
                {t('about.title', 'À propos de')}{' '}
                <span className="text-accent">{t('about.titleHighlight', 'Gilson')}</span>
              </h2>
            </header>

            <div className="space-y-5 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                {t(
                  'about.bio.p1',
                  "Passionné de sport depuis toujours, j'ai fait de ma passion mon métier il y a 8 ans. Diplômé BPJEPS et certifié en nutrition sportive, j'accompagne mes clients avec une approche personnalisée et bienveillante."
                )}
              </p>
              <p>
                {t('about.bio.p2', 'Ma philosophie ? ')}
                <strong className="text-[var(--color-text)]">
                  {t('about.bio.unique', 'Chaque personne est unique')}
                </strong>{' '}
                {t(
                  'about.bio.p2_continue',
                  'et mérite un accompagnement sur-mesure. Que vous souhaitiez perdre du poids, gagner en muscle ou simplement vous sentir mieux, nous trouverons ensemble la méthode qui vous convient.'
                )}
              </p>
              <p>
                {t(
                  'about.bio.p3',
                  "Au-delà des séances, je vous accompagne dans votre changement de vie : nutrition, motivation, habitudes… pour des résultats durables."
                )}
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-3 mt-8">
              <div className="card p-4 text-center">
                <dt className="text-xs text-muted uppercase tracking-wide">{t('about.role', 'Coach')}</dt>
                <dd className="font-display text-xl text-accent m-0 mt-1">{t('about.name', 'Gilson Mendes')}</dd>
              </div>
              <div className="card p-4 text-center">
                <dt className="text-xs text-muted uppercase tracking-wide">{t('about.location', 'Zone')}</dt>
                <dd className="font-display text-xl text-accent m-0 mt-1">{t('about.location_short', "Côte d'Azur")}</dd>
              </div>
              <div className="card p-4 text-center">
                <dt className="text-xs text-muted uppercase tracking-wide">{t('about.hours', 'Disponibilité')}</dt>
                <dd className="font-display text-xl text-accent m-0 mt-1">{t('about.availability', '7j/7')}</dd>
              </div>
            </dl>

            <a href="#contact" className="btn btn-primary inline-flex mt-8">
              {t('about.cta', 'Commençons ensemble')}
            </a>
          </div>

          <div className="space-y-6">
            <figure className="reveal overflow-hidden rounded-xl border border-[var(--color-border)] shadow-card">
              <img
                src={COACH_PORTRAIT}
                alt="Gilson Mendes, coach sportif et bien-être, souriant en salle de sport"
                width={1500}
                height={2000}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover object-[center_25%]"
              />
              <figcaption className="sr-only">Gilson Mendes — coach sportif & bien-être</figcaption>
            </figure>

            {achievements.map((achievement, index) => (
              <article
                key={achievement.titleKey}
                className={`card p-6 reveal${index === 1 ? ' reveal-delay-1' : index === 2 ? ' reveal-delay-2' : ''}`}
              >
                <div className="flex gap-4">
                  <span className="text-3xl shrink-0" aria-hidden="true">{achievement.icon}</span>
                  <div>
                    <h3 className="font-display text-xl tracking-wide mb-3 m-0">
                      {t(achievement.titleKey)}
                    </h3>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {achievement.itemsKeys.map((itemKey) => (
                        <li key={itemKey} className="flex gap-2 text-sm text-muted">
                          <span className="text-accent" aria-hidden="true">✓</span>
                          {t(itemKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <ul className="about-gallery list-none p-0 m-0 mt-12" aria-label="Séances de yoga individuelles">
          {GALLERY.map((photo, index) => (
            <li key={photo.src} className={`reveal${index ? ` reveal-delay-${index}` : ''}`}>
              <img src={photo.src} alt={photo.alt} width={533} height={800} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
