import { LuExternalLink, LuCheck } from 'react-icons/lu';

const URSSAF_LOGO = `${import.meta.env.BASE_URL}images/urssaf-logo.jpg`;

const LINKS = [
  {
    href: 'https://particulier.urssaf.fr',
    label: 'Mon espace particulier.urssaf.fr',
    hint: 'Activer mon compte, valider mes demandes de paiement',
  },
  {
    href: 'https://www.urssaf.fr/accueil/services/services-particuliers/service-avance-immediate.html',
    label: "L'Avance immédiate sur urssaf.fr",
    hint: 'Présentation officielle du service',
  },
  {
    href: 'https://www.urssaf.fr/accueil/services/services-particuliers/service-avance-immediate/comment-activer-service-aici.html',
    label: 'Comment activer le service ?',
    hint: 'Le guide pas à pas de l’Urssaf',
  },
  {
    href: 'https://www.servicesalapersonne.gouv.fr/actualites/beneficier-des-sap/avantages-fiscaux-et-sociaux-pour-particuliers/service-avance-immediate-de-l-urssaf-pour-beneficier-du-credit-d-impot',
    label: 'servicesalapersonne.gouv.fr',
    hint: 'Le site officiel des services à la personne',
  },
  {
    href: 'https://www.impots.gouv.fr/portail/particulier/emploi-domicile',
    label: 'Plafonds du crédit d’impôt',
    hint: 'La page officielle sur impots.gouv.fr',
  },
];

const STEPS = [
  {
    title: 'Je vous inscris',
    text: 'Avec votre accord, je crée votre compte Avance immédiate auprès de l’Urssaf.',
  },
  {
    title: 'Vous activez votre compte',
    text: 'Vous recevez un e-mail pour activer votre compte sur le site dédié www.particulier.urssaf.fr.',
  },
  {
    title: 'Je vous envoie la demande de paiement',
    text: 'Après vos séances, vous recevez la demande de paiement sur votre compte particulier.urssaf.fr, crédit d’impôt de 50 % déjà déduit.',
  },
  {
    title: 'Vous validez en 48 h',
    text: 'Vous avez 48 h pour valider ou contester la demande. Sans réponse, elle est validée automatiquement.',
  },
  {
    title: 'Vous ne payez que la moitié',
    text: 'À J+2, l’Urssaf prélève uniquement votre reste à payer. Votre déclaration de revenus est pré-remplie.',
  },
];

const AvanceImmediate = () => (
  <section
    id="avance-immediate"
    className="section-padding section-sea scroll-mt-[var(--header-height)]"
    aria-labelledby="avance-heading"
  >
    <div className="container-max">
      <header className="section-header reveal">
        <p className="section-eyebrow">Crédit d&apos;impôt immédiat</p>
        <h2 id="avance-heading" className="section-title">
          L&apos;Avance <span className="text-sea">immédiate</span>
        </h2>
        <p className="section-subtitle">
          Vos séances à domicile ouvrent droit à un crédit d&apos;impôt de 50 %. Avec l&apos;Avance
          immédiate, il est déduit <strong>tout de suite</strong> : plus besoin d&apos;attendre l&apos;année
          suivante.
        </p>
      </header>

      {/* Comparaison avant / après */}
      <div className="avance-compare reveal">
        <article className="avance-compare__card">
          <h3 className="avance-compare__label">Sans Avance immédiate</h3>
          <p className="avance-compare__amount">60 €</p>
          <p className="avance-compare__detail">
            payés par séance, puis 30 € remboursés par les impôts… l&apos;année suivante.
          </p>
        </article>
        <span className="avance-compare__arrow" aria-hidden="true">→</span>
        <article className="avance-compare__card avance-compare__card--good">
          <h3 className="avance-compare__label">Avec l&apos;Avance immédiate</h3>
          <p className="avance-compare__amount">30 €</p>
          <p className="avance-compare__detail">
            payés par séance, et c&apos;est tout. Le crédit d&apos;impôt est déduit immédiatement.
          </p>
        </article>
      </div>
      <p className="text-center text-sm text-muted mt-4 mb-12">
        Exemple pour une séance à 60 € (formule 20 séances). Service optionnel et gratuit.
      </p>

      {/* Étapes */}
      <h3 className="avance-subtitle reveal">Comment ça marche ?</h3>
      <ol className="avance-steps list-none m-0 p-0">
        {STEPS.map((step, index) => (
          <li key={step.title} className={`avance-steps__item reveal${index ? ` reveal-delay-${Math.min(index, 4)}` : ''}`}>
            <span className="avance-steps__num" aria-hidden="true">{index + 1}</span>
            <h4 className="avance-steps__title">{step.title}</h4>
            <p className="avance-steps__text">{step.text}</p>
          </li>
        ))}
      </ol>

      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {/* Conditions & bon à savoir */}
        <article className="card p-6 sm:p-8 reveal">
          <h3 className="avance-card-title">Qui peut en bénéficier ?</h3>
          <ul className="avance-checklist">
            <li><LuCheck aria-hidden="true" /> Avoir un compte bancaire domicilié en France</li>
            <li><LuCheck aria-hidden="true" /> Avoir un numéro fiscal associé à votre état civil</li>
            <li><LuCheck aria-hidden="true" /> Avoir déjà fait au moins une déclaration de revenus</li>
          </ul>
          <h3 className="avance-card-title mt-6">Bon à savoir</h3>
          <ul className="avance-checklist">
            <li><LuCheck aria-hidden="true" /> Crédit d&apos;impôt de 50 %, dans la limite de 12 000 € de dépenses par an (plafond majoré dans certains cas, par exemple en situation de handicap)</li>
            <li><LuCheck aria-hidden="true" /> Vous suivez votre crédit d&apos;impôt consommé et disponible sur particulier.urssaf.fr</li>
            <li><LuCheck aria-hidden="true" /> Vous recevez chaque année votre attestation fiscale</li>
            <li><LuCheck aria-hidden="true" /> En cas de question, votre interlocuteur reste Gilson Mendes, votre organisme de services à la personne</li>
            <li><LuCheck aria-hidden="true" /> Plafonds du crédit d&apos;impôt :{' '}<a href="https://www.impots.gouv.fr/portail/particulier/emploi-domicile" target="_blank" rel="noopener noreferrer" className="underline">impots.gouv.fr/portail/particulier/emploi-domicile</a></li>
          </ul>
        </article>

        {/* Liens utiles */}
        <article className="card p-6 sm:p-8 reveal reveal-delay-1">
          <h3 className="avance-card-title">Liens utiles</h3>
          <ul className="avance-links list-none m-0 p-0">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="avance-links__link">
                  <span>
                    <strong>{link.label}</strong>
                    <small>{link.hint}</small>
                  </span>
                  <LuExternalLink aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/33617043599?text=Bonjour Gilson, je souhaite bénéficier de l'Avance immédiate pour mes séances à domicile."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full mt-6"
          >
            Je veux en profiter
          </a>
        </article>
      </div>

      {/* Mention obligatoire + logo Urssaf */}
      <aside className="avance-urssaf reveal">
        <img src={URSSAF_LOGO} alt="Urssaf — Au service de notre protection sociale" width={900} height={260} loading="lazy" />
        <p>
          <strong>L&apos;Avance immédiate, un service proposé par l&apos;Urssaf.</strong>
          <br />
          Service mis en place par l&apos;Urssaf et la Direction générale des Finances publiques. Ce service est gratuit et non obligatoire.
          <br />
          <small>Gilson Mendes, organisme de services à la personne déclaré sous le n° SAP919560623 · SIRET 919 560 623 00010</small>
        </p>
      </aside>
    </div>
  </section>
);

export default AvanceImmediate;
