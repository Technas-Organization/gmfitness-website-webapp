import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';

/**
 * Tarifs (formules services à la personne) et réservation directe
 */
// Prix facturés ; le client paie la moitié après crédit d'impôt (services à la personne)
const FORMULES = [
  { id: 'unite', label: "Séance à l'unité", sessions: 1, perSession: 90 },
  { id: 'forfait-5', label: 'Forfait 5 séances', sessions: 5, perSession: 80 },
  { id: 'forfait-10', label: 'Forfait 10 séances', sessions: 10, perSession: 70, featured: true },
];

const ZONES = [
  {
    name: 'Zone 1',
    supplement: 'Sans supplément',
    towns: 'Mouans-Sartoux, Mougins, Grasse, Cannes, Le Cannet, Antibes, Juan-les-Pins, Valbonne',
  },
  {
    name: 'Zone 2',
    supplement: '+10 € / séance (5 € après crédit d’impôt)',
    towns: 'Villeneuve-Loubet, Biot, Cagnes-sur-Mer',
  },
  {
    name: 'Zone 3',
    supplement: '+20 € / séance (10 € après crédit d’impôt)',
    towns: 'Saint-Laurent-du-Var, Nice — uniquement en forfaits',
  },
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
            Des cours individuels à domicile, éligibles aux services à la personne.
          </p>
        </header>

        {/* Formules — Services à la personne */}
        <div className="formules mb-10">
          <h3 className="formules__title reveal">Mes formules</h3>
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {FORMULES.map((formule, index) => (
              <article
                key={formule.id}
                className={`formule-card reveal${index ? ` reveal-delay-${index}` : ''}${formule.featured ? ' formule-card--featured' : ''}`}
              >
                <header className="formule-card__head">{formule.label}</header>
                {formule.featured && <p className="formule-card__badge">Le plus avantageux</p>}
                <p className="formule-card__price">
                  {euros(formule.perSession / 2)}
                  <span className="formule-card__unit">/ séance*</span>
                </p>
                <p className="formule-card__total">
                  au lieu de {euros(formule.perSession)} / séance
                  {formule.sessions > 1 && (
                    <>
                      <br />
                      Forfait : {euros(formule.sessions * formule.perSession)}, soit{' '}
                      {euros((formule.sessions * formule.perSession) / 2)} après crédit d&apos;impôt
                    </>
                  )}
                </p>
              </article>
            ))}
          </div>
          <p className="formules__note">
            * Prix après crédit d&apos;impôt de 50 % (services à la personne), sous réserve des conditions d&apos;éligibilité.
            Remboursé par les impôts, ou déduit tout de suite avec l&apos;
            <a href="#avance-immediate" className="link">Avance immédiate</a> (bientôt disponible).
          </p>

          <div className="zones reveal" aria-labelledby="zones-heading">
            <h4 id="zones-heading" className="zones__title">Zones de déplacement</h4>
            <p className="zones__intro">
              Je me déplace chez vous depuis Mouans-Sartoux. Le supplément de déplacement est lui aussi éligible au crédit
              d&apos;impôt.
            </p>
            <ul className="zones__list">
              {ZONES.map((zone) => (
                <li key={zone.name} className="zones__item">
                  <p className="zones__name">{zone.name}</p>
                  <p className="zones__supplement">{zone.supplement}</p>
                  <p className="zones__towns">{zone.towns}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="sap-banner reveal" aria-label="Avantage fiscal services à la personne">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-sap.jpg`}
              alt="Logo Services à la personne"
              width={1626}
              height={1373}
              loading="lazy"
              className="sap-banner__logo"
            />
            <p className="sap-banner__pct" aria-hidden="true">50%</p>
            <p className="sap-banner__text">
              Des prestations éligibles aux dispositifs de <strong>services à la personne</strong> avec un{' '}
              <strong className="text-accent">avantage fiscal de 50 %</strong> sur vos dépenses, bientôt déduit immédiatement
              grâce à l&apos;<a href="#avance-immediate" className="link">Avance immédiate</a>.
            </p>
          </aside>
        </div>

        {/* Réservation directe — WhatsApp ou téléphone */}
        <aside className="booking-cta reveal" aria-labelledby="booking-cta-heading">
          <h3 id="booking-cta-heading" className="booking-cta__title">Réservez votre séance à domicile</h3>
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