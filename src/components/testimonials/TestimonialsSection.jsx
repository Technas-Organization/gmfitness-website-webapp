import React, { memo } from 'react';

/**
 * Section simplifiée des témoignages
 */
const TestimonialsSection = memo(({
  className = '',
  showStats = true,
  maxTestimonials = 12
}) => {

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
    }
  ];

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-amber-400' : 'text-[var(--color-border)]'} aria-hidden="true">
        ★
      </span>
    ));

  const reviews = testimonials.slice(0, maxTestimonials);

  return (
    <section id="testimonials" className={`section-padding-sm section-muted ${className}`} aria-labelledby="testimonials-heading">
      <div className="container-max">
        <header className="reviews-header reveal">
          <div>
            <p className="section-eyebrow">Avis clients</p>
            <h2 id="testimonials-heading" className="reviews-header__title">
              Ils m&apos;ont fait <span className="text-accent">confiance</span>
            </h2>
          </div>
          {showStats && (
            <p className="reviews-header__score">
              <span className="text-amber-400" aria-hidden="true">★★★★★</span>{' '}
              <strong>5/5</strong> · {testimonials.length} avis Google
            </p>
          )}
        </header>

        <ul className="reviews-strip list-none m-0 p-0" aria-label="Avis Google">
          {reviews.map((review) => (
            <li key={review.id} className="reviews-strip__item card">
              <div className="flex items-center gap-3 mb-3">
                <span className="reviews-strip__avatar" aria-hidden="true">{review.client.initials}</span>
                <div>
                  <p className="font-semibold text-[var(--color-text)] m-0 text-sm">{review.client.name}</p>
                  <p className="m-0 text-xs" aria-label={`${review.rating} étoiles sur 5`}>
                    {renderStars(review.rating)}
                  </p>
                </div>
              </div>
              <blockquote className="text-muted text-sm leading-relaxed m-0">
                &ldquo;{review.content}&rdquo;
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;