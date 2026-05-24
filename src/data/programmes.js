/** @typedef {{ number: number, focus: string, sessions: number, exercises: string[] }} ProgrammeWeek */

const HERO_IMAGES = {
  'perte-de-poids': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80&auto=format&fit=crop',
  'prise-de-masse': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop',
  'preparation-course': 'https://images.unsplash.com/photo-1476480862124-209bfaa8ecc8?w=1920&q=80&auto=format&fit=crop',
  'coaching-personnalise': 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80&auto=format&fit=crop',
};

function buildWeeks(specs) {
  return specs.map((w, i) => ({
    number: i + 1,
    focus: w.focus,
    sessions: w.sessions,
    exercises: w.exercises,
  }));
}

const perteDePoidsWeeks = buildWeeks([
  { focus: 'Bilan & activation métabolique', sessions: 3, exercises: ['Marche inclinée 20 min', 'Squats au poids du corps', 'Gainage planche 3×30 s'] },
  { focus: 'Endurance fondamentale', sessions: 3, exercises: ['Vélo ou rameur HIIT léger', 'Fentes marchées', 'Mountain climbers'] },
  { focus: 'Renforcement full body', sessions: 3, exercises: ['Goblet squat', 'Pompes inclinées', 'Hip thrust au sol'] },
  { focus: 'Circuit métabolique', sessions: 3, exercises: ['Burpees modifiés', 'Kettlebell swing léger', 'Corde à sauter 5×1 min'] },
  { focus: 'Core & posture', sessions: 3, exercises: ['Dead bug', 'Bird dog', 'Side plank'] },
  { focus: 'Intensification progressive', sessions: 3, exercises: ['Thruster léger', 'Box step-ups', 'Battle rope 30 s'] },
  { focus: 'Cardio structuré', sessions: 3, exercises: ['Intervalles 30/30', 'Walking lunges', 'Rowing 500 m × 3'] },
  { focus: 'Consolidation & mesures', sessions: 3, exercises: ['Test endurance', 'Circuit complet', 'Étirements actifs'] },
]);

const priseDeMasseWeeks = buildWeeks([
  { focus: 'Adaptation neuromusculaire', sessions: 4, exercises: ['Squat barre', 'Développé couché', 'Tractions assistées'] },
  { focus: 'Volume haut du corps', sessions: 4, exercises: ['Développé militaire', 'Rowing barre', 'Élévations latérales'] },
  { focus: 'Volume bas du corps', sessions: 4, exercises: ['Soulevé de terre roumain', 'Presse à cuisses', 'Fentes bulgares'] },
  { focus: 'Hypertrophie push', sessions: 4, exercises: ['Développé incliné haltères', 'Dips', 'Extensions triceps'] },
  { focus: 'Hypertrophie pull', sessions: 4, exercises: ['Tirage vertical', 'Curl biceps', 'Face pull'] },
  { focus: 'Jambes force', sessions: 4, exercises: ['Front squat', 'Leg curl', 'Mollets debout'] },
  { focus: 'Split haut / bas', sessions: 4, exercises: ['Développé couché pause', 'Hip thrust barre', 'Shrugs'] },
  { focus: 'Deload partiel', sessions: 3, exercises: ['Charges 70 %', 'Mobilité hanches', 'Gainage'] },
  { focus: 'Surcharge progressive', sessions: 4, exercises: ['Squat 5×5', 'Rowing T-bar', 'Développé haltères'] },
  { focus: 'Pic volume', sessions: 4, exercises: ['Soulevé de terre', 'Développé couché lourd', 'Leg press drop set'] },
  { focus: 'Technique & tempo', sessions: 4, exercises: ['Tempo 3-1-2 squat', 'Pompes lestées', 'Tirage poitrine'] },
  { focus: 'Bilan force & mensurations', sessions: 4, exercises: ['Tests 1RM estimés', 'Photos comparatives', 'Récupération active'] },
]);

const prepCourseWeeks = buildWeeks([
  { focus: 'Base aérobie & mobilité', sessions: 4, exercises: ['Footing zone 2 — 30 min', 'Mobilité chevilles', 'Gainage dynamique'] },
  { focus: 'Renforcement course', sessions: 4, exercises: ['Fentes alternées', 'Single-leg RDL', 'Montées de genoux'] },
  { focus: 'Fractionné court', sessions: 4, exercises: ['6×400 m', 'Gammes étirements', 'Squat sauté'] },
  { focus: 'Endurance musculaire', sessions: 4, exercises: ['Circuit poids du corps', 'Planche latérale', 'Step-ups explosifs'] },
  { focus: 'Seuil lactique', sessions: 4, exercises: ['Tempo 20 min', 'Fentes sautées', 'Corde à sauter'] },
  { focus: 'Renfo haut du corps course', sessions: 4, exercises: ['Pompes', 'Tractions', 'Farmer walk'] },
  { focus: 'Sortie longue', sessions: 4, exercises: ['45–60 min footing', 'Étirements post-course', 'Mollets debout'] },
  { focus: 'VMA courte', sessions: 4, exercises: ['10×30 s sprint', 'Récupération marche', 'Gainage'] },
  { focus: 'Simulation course', sessions: 4, exercises: ['Parcours terrain', 'Ravitaillement test', 'Renfo léger'] },
  { focus: 'Affûtage & récupération', sessions: 3, exercises: ['Footing léger', 'Yoga flow', 'Massage rouleau'] },
]);

const coachingPersoWeeks = buildWeeks([
  { focus: 'Entretien objectifs & bilan postural', sessions: 2, exercises: ['Tests mobilité', 'Analyse composition', 'Plan nutritionnel'] },
  { focus: 'Programme personnalisé phase 1', sessions: 2, exercises: ['Exercices sur mesure', 'Ajustement charges', 'Suivi WhatsApp'] },
  { focus: 'Ajustements mi-parcours', sessions: 2, exercises: ['Révision objectifs', 'Variantes exercices', 'Feedback vidéo'] },
  { focus: 'Optimisation & pérennisation', sessions: 2, exercises: ['Autonomie entraînement', 'Plan maintenance', 'Bilan final'] },
]);

/** @type {import('./programmes.js').Programme[]} */
export const programmes = [
  {
    id: 'perte-de-poids',
    slug: 'perte-de-poids',
    title: 'Perte de poids',
    subtitle: 'Rééquilibrage métabolique et remise en forme durable',
    durationWeeks: 8,
    sessionsPerWeek: 3,
    level: 'Débutant → Intermédiaire',
    priceEur: 890,
    heroImage: HERO_IMAGES['perte-de-poids'],
    ogImage: HERO_IMAGES['perte-de-poids'],
    seoDescription:
      'Programme perte de poids 8 semaines sur la Côte d\'Azur : 3 séances/semaine, coaching nutrition et suivi personnalisé avec Gilson Mendes.',
    description: [
      'Ce programme de 8 semaines combine entraînement fonctionnel, cardio intelligent et conseils nutritionnels pour une perte de graisse durable sans effet yo-yo.',
      'Chaque séance est adaptée à votre niveau (débutant à intermédiaire) avec une progression hebdomadaire mesurée pour protéger vos articulations et maintenir votre motivation.',
      'Vous bénéficiez d\'un suivi hebdomadaire (mensurations, photos, ajustements) pour rester accountable et célébrer chaque victoire, sur la Côte d\'Azur ou en visio.',
    ],
    included: [
      'Bilan initial complet (posture, composition, objectifs)',
      '3 séances coaching / semaine pendant 8 semaines',
      'Plan nutritionnel personnalisé et ajustements',
      'Suivi WhatsApp entre les séances',
      'Accès vidéos d\'échauffement et étirements',
      'Mesures et photos de progression (semaines 1, 4, 8)',
      'Séance découverte offerte avant engagement',
    ],
    weeks: perteDePoidsWeeks,
  },
  {
    id: 'prise-de-masse',
    slug: 'prise-de-masse',
    title: 'Prise de masse',
    subtitle: 'Hypertrophie structurée et progression de force',
    durationWeeks: 12,
    sessionsPerWeek: 4,
    level: 'Intermédiaire → Avancé',
    priceEur: 1490,
    heroImage: HERO_IMAGES['prise-de-masse'],
    ogImage: HERO_IMAGES['prise-de-masse'],
    seoDescription:
      'Programme prise de masse 12 semaines : 4 séances/semaine, split hypertrophie et suivi nutrition avec coach sportif Gilson Mendes.',
    description: [
      'Un cycle de 12 semaines pensé pour développer la masse musculaire grâce à un split progressif, des charges maîtrisées et une nutrition orientée surplus contrôlé.',
      'Réservé aux pratiquants intermédiaires à avancés, le programme alterne phases de volume, deload et tests de force pour maximiser les gains tout en limitant le surentraînement.',
      'Coaching en présentiel (domicile, extérieur, salle partenaire) avec corrections techniques en temps réel et programme ajusté selon votre récupération.',
    ],
    included: [
      'Évaluation force et mobilité initiale',
      '4 séances coaching / semaine pendant 12 semaines',
      'Programme musculation détaillé (exercices, séries, repos)',
      'Recommandations nutrition prise de masse',
      'Semaine de deload intégrée (semaine 8)',
      'Suivi hebdomadaire charge / sensations',
      'Accès groupe motivation clients GML Fitness',
    ],
    weeks: priseDeMasseWeeks,
  },
  {
    id: 'preparation-course',
    slug: 'preparation-course',
    title: 'Préparation course',
    subtitle: 'Cardio, renforcement et affûtage pour vos objectifs running',
    durationWeeks: 10,
    sessionsPerWeek: 4,
    level: 'Intermédiaire',
    priceEur: 1190,
    heroImage: HERO_IMAGES['preparation-course'],
    ogImage: HERO_IMAGES['preparation-course'],
    seoDescription:
      'Préparation course à pied 10 semaines : cardio, renforcement musculaire et plan d\'entraînement personnalisé avec coach Gilson Mendes.',
    description: [
      'Préparez votre 5 km, 10 km ou semi-marathon avec un plan mêlant footings, fractionné, renforcement spécifique course et récupération active.',
      'Le programme équilibre volume cardio et prévention des blessures grâce au renforcement des chaînes postérieures, chevilles et core.',
      'Idéal pour les coureurs intermédiaires souhaitant structurer leur saison avec un coach diplômé sur la Côte d\'Azur.',
    ],
    included: [
      'Analyse de foulée et tests VMA estimés',
      '4 séances / semaine (course + renfo)',
      'Plan running téléchargeable (semaine par semaine)',
      'Exercices prévention blessures (IT band, mollets)',
      'Conseils hydratation et nutrition course',
      'Simulation course avant l\'objectif',
      'Support le jour J (selon disponibilité)',
    ],
    weeks: prepCourseWeeks,
  },
  {
    id: 'coaching-personnalise',
    slug: 'coaching-personnalise',
    title: 'Coaching personnalisé',
    subtitle: '100 % sur mesure — objectifs, rythme et lieu à votre convenance',
    durationWeeks: null,
    durationLabel: 'Sur mesure',
    sessionsPerWeek: '1 à 3',
    level: 'Tous niveaux',
    priceEur: null,
    priceLabel: 'Sur devis',
    heroImage: HERO_IMAGES['coaching-personnalise'],
    ogImage: HERO_IMAGES['coaching-personnalise'],
    seoDescription:
      'Coaching sportif personnalisé sur la Côte d\'Azur : programme sur mesure, 1 à 3 séances/semaine, tous niveaux avec Gilson Mendes.',
    description: [
      'Le format le plus flexible : nous définissons ensemble la durée, la fréquence et les priorités (remise en forme, reprise post-blessure, performance sportive, bien-être).',
      'Chaque séance est construite autour de vos contraintes (emploi du temps, matériel disponible, préférences indoor/outdoor).',
      'Parfait si vous cherchez un accompagnement premium sans cadre de programme fixe — à domicile, en extérieur ou en visio.',
    ],
    included: [
      'Consultation initiale approfondie (60 min)',
      'Programme évolutif sans durée imposée',
      '1 à 3 séances / semaine selon vos besoins',
      'Nutrition et récupération au fil de l\'eau',
      'Disponibilité WhatsApp prioritaire',
      'Séances à domicile ou extérieur (Côte d\'Azur)',
      'Révision mensuelle des objectifs',
    ],
    weeks: coachingPersoWeeks,
  },
];

export function getProgrammeById(id) {
  return programmes.find((p) => p.id === id || p.slug === id);
}

export function formatProgrammePrice(programme) {
  if (programme.priceLabel) return programme.priceLabel;
  if (programme.priceEur == null) return 'Sur devis';
  return `${programme.priceEur.toLocaleString('fr-FR')} €`;
}

export function formatProgrammeDuration(programme) {
  if (programme.durationLabel) return programme.durationLabel;
  if (!programme.durationWeeks) return 'Sur mesure';
  return `${programme.durationWeeks} semaines`;
}
