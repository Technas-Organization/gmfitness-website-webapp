import { LuHeartPulse, LuDumbbell, LuSalad, LuFlower2 } from 'react-icons/lu';
import { GrYoga } from 'react-icons/gr';
import { useI18n } from '@/hooks/useI18n';

const SERVICES_IMAGE = `${import.meta.env.BASE_URL}images/yoga-triangle.jpg`;

const Services = () => {
  const { t } = useI18n();

  const delayClass = ['', ' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3', ' reveal-delay-4'];

  const services = [
    {
      Icon: LuHeartPulse,
      key: 'fitness',
      title: 'Remise en forme',
      description: 'Retrouvez énergie, souffle et vitalité grâce à un programme progressif adapté à votre niveau.',
    },
    {
      Icon: GrYoga,
      key: 'pilates',
      title: 'Pilates',
      description: 'Renforcez votre sangle abdominale, améliorez votre posture et gagnez en mobilité en douceur.',
    },
    {
      Icon: LuFlower2,
      key: 'yoga',
      title: 'Yoga',
      description: "Postures, respiration et relaxation pour relâcher les tensions et retrouver l'équilibre corps-esprit.",
    },
    {
      Icon: LuDumbbell,
      key: 'strength',
      title: 'Renforcement musculaire',
      description: 'Tonifiez et renforcez votre corps en toute sécurité, avec ou sans matériel, à domicile ou en extérieur.',
    },
    {
      Icon: LuSalad,
      key: 'nutrition',
      title: 'Rééquilibrage alimentaire',
      description: 'Des conseils simples et durables pour mieux manger au quotidien, sans frustration.',
    },
  ];

  return (
    <section id="services" className="section-padding section-surface" aria-labelledby="services-heading">
      <div className="container-max">
        <header className="section-header reveal">
          <p className="section-eyebrow">{t('services.eyebrow', 'Cours à domicile · Services à la personne')}</p>
          <h2 id="services-heading" className="section-title">
            {t('services.title', 'Mes')}{' '}
            <span className="text-accent">{t('services.titleHighlight', 'Services')}</span>
          </h2>
          <p className="section-subtitle">
            {t(
              'services.subtitle',
              'Des séances individuelles, chez vous, pour prendre soin de votre corps et de votre bien-être.'
            )}
          </p>
        </header>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">
          <ul className="services-list list-none m-0 p-0">
            {services.map(({ Icon, key, title, description }, index) => (
              <li key={key} className={`services-list__item card reveal${delayClass[index] || ''}`}>
                <span className="services-list__icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <h3 className="services-list__title">{t(`services.list.${key}.title`, title)}</h3>
                  <p className="text-muted text-sm leading-relaxed m-0">
                    {t(`services.list.${key}.description`, description)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="services-photo reveal reveal-delay-2">
            <img
              src={SERVICES_IMAGE}
              alt="Gilson Mendes en séance de yoga individuelle en extérieur avec une cliente"
              width={533}
              height={800}
              loading="lazy"
            />
            <figcaption>
              <span className="services-photo__badge">{t('services.photo.badge', 'Gilson Mendes')}</span>
              {t('services.photo.caption', 'Séances individuelles à votre domicile')}
            </figcaption>
          </figure>
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
