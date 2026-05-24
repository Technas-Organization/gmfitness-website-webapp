import React, { memo } from 'react';
import { useI18n } from '@/hooks/useI18n';

/**
 * Section simplifiée des témoignages
 */
const TestimonialsSection = memo(({
  className = '',
  showStats = true,
  maxTestimonials = 12
}) => {
  const { t } = useI18n();

  // Données de témoignages avec avis Google authentiques
  const testimonials = [
    // AVIS GOOGLE AUTHENTIQUES - VRAIS TÉMOIGNAGES
    {
      id: 1,
      type: 'google_review',
      client: {
        name: 'Pierre A.',
        location: 'Côte d\'Azur',
        photo: '💪',
        initials: 'PA'
      },
      rating: 5,
      content: 'Gilson est un super coach en plus d\'être quelqu\'un de très sympathique et attentionné. Très bon suivi et grande disponibilité, il m\'a fait progresser et dépasser mes objectifs. Je le recommande à 100 %.',
      date: '2024-10-15',
      verified: true,
      source: 'google',
      tags: ['sympathique', 'suivi', 'objectifs', 'recommande'],
      featured: true
    },
    {
      id: 2,
      type: 'google_review', 
      client: {
        name: 'Martine P.',
        location: 'Côte d\'Azur',
        photo: '🌟',
        initials: 'MP'
      },
      rating: 5,
      content: 'Gilson est très sympathique et sérieux. Prend bien son temps pour expliquer les mouvements et les adapte aux personnes.',
      date: '2024-11-15',
      verified: true,
      source: 'google',
      tags: ['sympathique', 'adaptation', 'explication'],
      featured: true
    },
    {
      id: 3,
      type: 'google_review',
      client: {
        name: 'Laetitia S.',
        location: 'Côte d\'Azur',
        photo: '🏃‍♀️',
        initials: 'LS'
      },
      rating: 5,
      content: 'Gilson est un coach très professionnel, sympathique, à l\'écoute. Ses cours sont dynamiques. Il s\'adapte aux personnes présentes. Il explique bien les exercices et corrige bien les postures. Je recommande.',
      date: '2023-11-15',
      verified: true,
      source: 'google',
      tags: ['professionnel', 'dynamique', 'adaptation', 'postures'],
      featured: true
    },
    {
      id: 4,
      type: 'google_review',
      client: {
        name: 'Karim C.',
        location: 'Côte d\'Azur',
        photo: '🎯',
        initials: 'KC'
      },
      rating: 5,
      content: 'Gilson est un coach très à l\'écoute de tes envies, de tes ressentis, qui adapte ses programmes en fonction de ce que tu recherches, un suivi régulier et complet.',
      date: '2023-08-15',
      verified: true,
      source: 'google',
      tags: ['écoute', 'adaptation', 'programmes', 'suivi'],
      featured: true
    },
    {
      id: 5,
      type: 'google_review',
      client: {
        name: 'Coralie J.',
        location: 'Côte d\'Azur',
        photo: '⭐',
        initials: 'CJ'
      },
      rating: 5,
      content: 'Gilson est un coach en or. Il est très professionnel, patient et à l\'écoute. Il surveille la bonne exécution des mouvements.',
      date: '2023-09-15',
      verified: true,
      source: 'google',
      tags: ['coach en or', 'patient', 'professionnel', 'technique'],
      featured: true
    },
    {
      id: 6,
      type: 'google_review',
      client: {
        name: 'Antoine T.',
        location: 'Côte d\'Azur',
        photo: '🚀',
        initials: 'AT'
      },
      rating: 5,
      content: 'Coach au top, compétent et serviable qui s\'adapte aux besoins de chacun. Grosse évolution pour ma part sur 6 mois d\'entraînement. Vous pouvez y aller les yeux fermés, c\'est du PRO !!',
      date: '2023-09-15',
      verified: true,
      source: 'google',
      tags: ['compétent', 'évolution', '6 mois', 'professionnel'],
      featured: true
    },
    {
      id: 7,
      type: 'google_review',
      client: {
        name: 'Carla A.',
        location: 'Côte d\'Azur',
        photo: '💖',
        initials: 'CA'
      },
      rating: 5,
      content: 'Coach à l\'écoute et toujours positif. Il s\'adapte à tout type de situation. Il me suit depuis 5 mois et je remarque de réels changements au niveau de mon corps.',
      date: '2023-12-15',
      verified: true,
      source: 'google',
      tags: ['positif', 'adaptation', '5 mois', 'changements'],
      featured: true
    },
    {
      id: 8,
      type: 'google_review',
      client: {
        name: 'Darel P.',
        location: 'Côte d\'Azur',
        photo: '🔥',
        initials: 'DP'
      },
      rating: 5,
      content: 'Très bon coach à l\'écoute, m\'a transformé en l\'espace de 6 mois. Je vous le conseille fortement !! 💪',
      date: '2023-12-15',
      verified: true,
      source: 'google',
      tags: ['transformation', '6 mois', 'écoute', 'conseille'],
      featured: true
    },
    // TÉMOIGNAGES DÉTAILLÉS  
    {
      id: 10,
      client: {
        name: 'Sarah Martin',
        age: 28,
        location: 'Paris',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c8?w=100&h=100&fit=crop&crop=face'
      },
      rating: 5,
      content: 'Guillaume a transformé ma vie ! En 3 mois, j\'ai perdu 12kg et retrouvé ma confiance en moi. Son approche personnalisée et ses conseils nutrition ont fait toute la différence.',
      program: 'Perte de poids',
      duration: '3 mois',
      date: '2024-01-15',
      tags: ['perte de poids', 'nutrition', 'confiance'],
      featured: false
    },
    {
      id: 5,
      client: {
        name: 'Thomas Dubois',
        age: 35,
        location: 'Lyon',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      rating: 5,
      content: 'Après une blessure au dos, Guillaume m\'a accompagné dans ma rééducation. Aujourd\'hui je suis plus fort qu\'avant ! Un vrai professionnel.',
      program: 'Rééducation',
      duration: '6 mois', 
      date: '2024-02-20',
      tags: ['rééducation', 'blessure', 'force'],
      featured: false
    },
    {
      id: 6,
      client: {
        name: 'Marie Leroy',
        age: 42,
        location: 'Mouans-Sartoux',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      },
      rating: 5,
      content: 'Grâce au programme de Guillaume, j\'ai terminé mon premier marathon ! Un rêve devenu réalité grâce à ses conseils experts.',
      program: 'Préparation marathon',
      duration: '4 mois',
      date: '2024-03-10',
      tags: ['marathon', 'endurance', 'objectif'],
      featured: false
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-amber-400' : 'text-[var(--color-border)]'} aria-hidden="true">
        ★
      </span>
    ));

  const ClientAvatar = ({ client }) => {
    const isUrl = typeof client.photo === 'string' && client.photo.startsWith('http');
    const initials = client.initials || client.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

    if (isUrl) {
      return (
        <img
          src={client.photo}
          alt={`Photo de ${client.name}`}
          width={48}
          height={48}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-border)]"
        />
      );
    }

    return (
      <div
        className="w-12 h-12 rounded-full bg-[var(--color-accent-muted)] border-2 border-[var(--color-border)] flex items-center justify-center font-semibold text-accent text-sm"
        aria-hidden="true"
      >
        {initials}
      </div>
    );
  };

  const TestimonialCard = ({ testimonial, variant = 'default' }) => (
    <article
      className={`card p-6 ${variant === 'featured' ? 'card-featured' : ''}`}
    >
      <div className="flex items-start gap-4 mb-4">
        <ClientAvatar client={testimonial.client} />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--color-text)] m-0">{testimonial.client.name}</h3>
          <p className="text-sm text-muted m-0">
            {testimonial.client.age ? `${testimonial.client.age} ans · ` : ''}
            {testimonial.client.location}
          </p>
          <div className="flex mt-1" aria-label={`${testimonial.rating} étoiles sur 5`}>
            {renderStars(testimonial.rating)}
          </div>
        </div>
        {variant === 'featured' && testimonial.verified && (
          <span className="badge badge-primary shrink-0">Google</span>
        )}
      </div>

      <blockquote className="text-muted mb-4 leading-relaxed m-0">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Tags */}
      {testimonial.tags && testimonial.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {testimonial.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer avec date et programme */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-600 pt-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            🏋️‍♀️ {testimonial.program}
          </span>
          <span className="flex items-center">
            ⏱️ {testimonial.duration}
          </span>
        </div>
        
        <time>{new Date(testimonial.date).toLocaleDateString()}</time>
      </div>
    </article>
  );

  return (
    <section id="testimonials" className={`section-padding section-muted ${className}`} aria-labelledby="testimonials-heading">
      <div className="container-max">
        <header className="section-header reveal">
          <p className="section-eyebrow">Avis clients</p>
          <h2 id="testimonials-heading" className="section-title">
            Témoignages <span className="text-accent">clients</span>
          </h2>
          <p className="section-subtitle">
            Retours authentiques Google et transformations réelles sur la Côte d&apos;Azur.
          </p>
        </header>

        {showStats && (
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 card p-8 mb-12 reveal">
            {[
              ['200+', 'Clients satisfaits'],
              ['4.9', 'Note moyenne'],
              ['85%', 'Objectifs atteints'],
              ['8+', "Années d'expérience"],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="font-display text-3xl text-accent m-0 mt-1">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        <h3 className="font-display text-2xl tracking-wide text-center mb-8 reveal">Avis Google vérifiés</h3>
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {featuredTestimonials.map((testimonial, i) => (
            <div key={testimonial.id} className={`reveal${i % 2 ? ' reveal-delay-1' : ''}`}>
              <TestimonialCard testimonial={testimonial} variant="featured" />
            </div>
          ))}
        </div>

        <h3 className="font-display text-2xl tracking-wide text-center mb-8 reveal">Plus de retours</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, maxTestimonials).map((testimonial, i) => (
            <div key={testimonial.id} className={`reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`}>
              <TestimonialCard testimonial={testimonial} variant="default" />
            </div>
          ))}
        </div>

        <aside className="section-dark rounded-xl p-8 mt-12 text-center reveal">
          <h3 className="font-display text-2xl tracking-wide mb-3">Prêt à commencer votre transformation ?</h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Rejoignez plus de 200 clients satisfaits et atteignez vos objectifs de forme.
          </p>
          <a href="#booking" className="btn btn-primary">
            Réserver ma séance gratuite
          </a>
        </aside>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;