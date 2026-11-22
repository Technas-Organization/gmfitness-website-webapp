import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';

/**
 * Tarifs du coaching à domicile et réservation directe
 */
const FORMULES = [
  { id: 'unite', label: "Séance à l'unité", sessions: 1, perSession: 70 },
  { id: 'forfait-5', label: 'Forfait 5 séances', sessions: 5, perSession: 60 },
  { id: 'forfait-10', label: 'Forfait 10 séances', sessions: 10, perSession: 50, featured: true },
];

// Cours collectifs au cabinet de kinésithérapie du Cannet
const COURS_GROUPE = [
  { day: 'Mardi', slots: ['17h00 · Renforcement musculaire', '18h00 · Pilates', '19h10 · Yoga'] },
  { day: 'Samedi matin', slots: ['09h30 · Renforcement musculaire', '10h30 · Pilates', '11h30 · Yoga'] },
];

const TARIFS_GROUPE = [
  { label: '1 cours', price: 20 },
  { label: '5 cours', price: 90 },
  { label: '10 cours', price: 170 },
];

const euros = (n) => `${n.toLocaleString('fr-FR')} €`;

export default function BookingForm() {
  return (
    <section
      id="tarifs"
      className="section-padding section-surface scroll-mt-[var(--header-height)]"
      aria-labelledby="tarifs-heading"
    >
      <div className="container-max" id="booking">
        <header className="section-header reveal">
          <p className="section-eyebrow">Tarifs & réservation</p>
          <h2 id="tarifs-heading" className="section-title">
            Réservez votre <span className="text-accent">séance</span>
          </h2>
          <p className="section-subtitle">
            Coaching individuel à domicile partout sur la Côte d&apos;Azur, ou cours en petit groupe au Cannet.
          </p>
        </header>

        {/* Formules */}
        <div className="formules mb-10">
          <h3 className="formules__title reveal">Coaching à domicile</h3>
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {FORMULES.map((formule, index) => (
              <article
                key={formule.id}
                className={`formule-card reveal${index ? ` reveal-delay-${index}` : ''}${formule.featured ? ' formule-card--featured' : ''}`}
              >
                <header className="formule-card__head">{formule.label}</header>
                {formule.featured && <p className="formule-card__badge">Le plus avantageux</p>}
                <p className="formule-card__price">
                  {euros(formule.perSession)}
                  <span className="formule-card__unit">/ séance</span>
                </p>
                <p className="formule-card__total">
                  {formule.sessions > 1
                    ? `${euros(formule.sessions * formule.perSession)} les ${formule.sessions} séances`
                    : 'Séance individuelle d’1 heure'}
                </p>
              </article>
            ))}
          </div>
          <p className="formules__note">Séances d&apos;1 heure à votre domicile ou en extérieur.</p>
        </div>

        {/* Cours en petit groupe */}
        <div id="cours-groupe" className="formules mb-10 scroll-mt-[var(--header-height)]">
          <h3 className="formules__title reveal">Cours en petit groupe</h3>
          <div className="groupe reveal">
            <div className="groupe__info">
              <p className="groupe__lead">
                Pilates, yoga et renforcement musculaire en petit groupe de 3 à 5 personnes, tous niveaux, au cabinet
                de kinésithérapie du Cannet.
              </p>
              <p className="groupe__address">📍 631 avenue du Général de Gaulle, 06110 Le Cannet</p>
              <div className="groupe__planning">
                {COURS_GROUPE.map((jour) => (
                  <div key={jour.day} className="groupe__day">
                    <p className="groupe__day-name">{jour.day}</p>
                    <ul className="groupe__slots">
                      {jour.slots.map((slot) => (
                        <li key={slot}>{slot}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="groupe__prices">
              {TARIFS_GROUPE.map((tarif) => (
                <p key={tarif.label} className="groupe__price">
                  <span>{tarif.label}</span>
                  <strong>{euros(tarif.price)}</strong>
                </p>
              ))}
              <p className="groupe__note">Séance d&apos;essai gratuite · Places limitées</p>
              <a
                href="https://wa.me/33617043599?text=Bonjour Gilson, je souhaite réserver une place pour un cours en groupe au Cannet."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                Réserver ma place
              </a>
            </div>
          </div>
        </div>

        {/* Réservation directe — WhatsApp ou téléphone */}
        <aside className="booking-cta reveal" aria-labelledby="booking-cta-heading">
          <h3 id="booking-cta-heading" className="booking-cta__title">Réservez votre séance</h3>
          <p className="booking-cta__text">
            Envoyez-moi un message ou appelez-moi : nous choisissons ensemble votre formule et vos créneaux,
            et je me déplace chez vous.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://wa.me/33617043599?text=Bonjour Gilson, je souhaite réserver des séances de coaching à domicile."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp aria-hidden="true" /> Réserver sur WhatsApp
            </a>
            <a href="tel:+33617043599" className="btn btn-primary">
              <LuPhone aria-hidden="true" /> Appeler le 06 17 04 35 99
            </a>
          </div>
        </aside>

        {/* Questions fréquentes */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Questions fréquentes ? Contactez-moi en 1 clic ! 💬
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cliquez sur votre question pour m'envoyer un message pré-rédigé via WhatsApp ou Email
            </p>
          </div>

          {/* Questions grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Tarifs */}
            <motion.div
              className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3 mb-4">
                <span className="text-2xl">💰</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Quels sont vos tarifs ?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Tarifs séances individuelles, forfaits, réductions...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/33617043599?text=Bonjour Gilson ! J'aimerais connaître vos tarifs pour les séances de coaching individuel. Avez-vous des forfaits avantageux ? Merci !"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📱 WhatsApp
                </a>
                <a
                  href="mailto:gilson.mendes-landim@hotmail.com?subject=Demande de tarifs&body=Bonjour Gilson,%0D%0A%0D%0AJ'aimerais connaître vos tarifs pour les séances de coaching individuel.%0D%0A%0D%0AAvez-vous des forfaits avantageux ?%0D%0A%0D%0AMerci !%0D%0A"
                  className="flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  ✉️ Email
                </a>
                <a
                  href="tel:+33617043599"
                  className="flex items-center px-3 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📞 Appeler
                </a>
              </div>
            </motion.div>

            {/* Disponibilités */}
            <motion.div
              className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3 mb-4">
                <span className="text-2xl">📅</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Quelles sont vos disponibilités ?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Créneaux libres, horaires, planning...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/33617043599?text=Bonjour ! J'aimerais connaître vos créneaux disponibles pour des séances de coaching. Je suis plutôt libre le matin/midi/soir. Merci !"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📱 WhatsApp
                </a>
                <a
                  href="mailto:gilson.mendes-landim@hotmail.com?subject=Demande de disponibilités&body=Bonjour Gilson,%0D%0A%0D%0AJ'aimerais connaître vos créneaux disponibles pour des séances de coaching.%0D%0A%0D%0AJe suis plutôt libre le matin/midi/soir.%0D%0A%0D%0AMerci !%0D%0A"
                  className="flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  ✉️ Email
                </a>
                <a
                  href="tel:+33617043599"
                  className="flex items-center px-3 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📞 Appeler
                </a>
              </div>
            </motion.div>

            {/* Séances à domicile */}
            <motion.div
              className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3 mb-4">
                <span className="text-2xl">🏠</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Séances à domicile possibles ?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Zone de déplacement, équipements, tarifs...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/33617043599?text=Bonjour ! Je souhaiterais des séances de coaching à mon domicile. Vous déplacez-vous dans ma zone ? Je suis à [votre ville]. Merci !"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📱 WhatsApp
                </a>
                <a
                  href="mailto:gilson.mendes-landim@hotmail.com?subject=Séances à domicile&body=Bonjour Gilson,%0D%0A%0D%0AJe souhaiterais des séances de coaching à mon domicile.%0D%0A%0D%0AVous déplacez-vous dans ma zone ? Je suis à [votre ville].%0D%0A%0D%0AMerci !%0D%0A"
                  className="flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  ✉️ Email
                </a>
                <a
                  href="tel:+33617043599"
                  className="flex items-center px-3 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📞 Appeler
                </a>
              </div>
            </motion.div>

            {/* Programme personnalisé */}
            <motion.div
              className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3 mb-4">
                <span className="text-2xl">📋</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Programme personnalisé ?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Objectifs, durée, fréquence des séances...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/33617043599?text=Bonjour ! Je souhaiterais obtenir plus d'informations sur vos programmes personnalisés de coaching. Mes objectifs : [perte de poids / prise de muscle / remise en forme]. Mon niveau : [débutant / intermédiaire / confirmé]. Merci !"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📱 WhatsApp
                </a>
                <a
                  href="mailto:gilson.mendes-landim@hotmail.com?subject=Demande de programme personnalisé&body=Bonjour Gilson,%0D%0A%0D%0AJe souhaiterais obtenir plus d'informations sur vos programmes personnalisés de coaching.%0D%0A%0D%0AMes objectifs : [perte de poids / prise de muscle / remise en forme / autre]%0D%0AMon niveau actuel : [débutant / intermédiaire / confirmé]%0D%0AMa disponibilité : [nombre de séances par semaine souhaitées]%0D%0A%0D%0APourriez-vous me proposer un programme adapté ?%0D%0A%0D%0AMerci !%0D%0A"
                  className="flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  ✉️ Email
                </a>
                <a
                  href="tel:+33617043599"
                  className="flex items-center px-3 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📞 Appeler
                </a>
              </div>
            </motion.div>

            {/* Première séance */}
            <motion.div
              className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3 mb-4">
                <span className="text-2xl">🎁</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Comment marche la séance gratuite ?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Déroulement, durée, lieu, à apporter...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/33617043599?text=Bonjour ! Je suis intéressé(e) par votre séance découverte GRATUITE. Comment ça se passe concrètement ? Quand pourrait-on faire ça ? 😊"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📱 WhatsApp
                </a>
                <a
                  href="mailto:gilson.mendes-landim@hotmail.com?subject=Séance découverte gratuite&body=Bonjour Gilson,%0D%0A%0D%0AJe suis intéressé(e) par votre séance découverte GRATUITE.%0D%0A%0D%0AComment ça se passe concrètement ? Quand pourrait-on faire ça ?%0D%0A%0D%0AMerci ! 😊%0D%0A"
                  className="flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  ✉️ Email
                </a>
                <a
                  href="tel:+33617043599"
                  className="flex items-center px-3 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📞 Appeler
                </a>
              </div>
            </motion.div>

            {/* Équipements */}
            <motion.div
              className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3 mb-4">
                <span className="text-2xl">🏋️</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Équipements fournis ?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Matériel inclus, à prévoir, transport...
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/33617043599?text=Bonjour ! J'ai une question concernant les équipements pour les séances de coaching. Fournissez-vous tout le matériel nécessaire ? Que dois-je prévoir de mon côté ? Merci !"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📱 WhatsApp
                </a>
                <a
                  href="mailto:gilson.mendes-landim@hotmail.com?subject=Question sur les équipements&body=Bonjour Gilson,%0D%0A%0D%0AJ'ai une question concernant les équipements pour les séances de coaching :%0D%0A%0D%0A- Fournissez-vous tout le matériel nécessaire ?%0D%0A- Que dois-je prévoir de mon côté ?%0D%0A- Pour les séances à domicile, amenez-vous tout ?%0D%0A%0D%0AMerci pour ces précisions !%0D%0A"
                  className="flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  ✉️ Email
                </a>
                <a
                  href="tel:+33617043599"
                  className="flex items-center px-3 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-lg text-xs font-medium transition-colors"
                >
                  📞 Appeler
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}