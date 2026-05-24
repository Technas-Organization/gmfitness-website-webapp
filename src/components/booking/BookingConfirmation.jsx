import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import { formatProgrammeDuration, formatProgrammePrice } from '@/data/programmes';

export default function BookingConfirmation({ programme, bookingDetails = {} }) {
  const { name, email, phone, message } = bookingDetails;

  return (
    <div className="booking-confirmation card max-w-lg mx-auto" role="status" aria-live="polite">
      <div className="booking-confirmation__icon" aria-hidden="true">
        <FiCheck className="w-10 h-10" strokeWidth={2.5} />
      </div>

      <h3 className="font-display text-3xl tracking-wide m-0 mb-3">
        Réservation confirmée
      </h3>
      <p className="text-lg text-[var(--color-text)] mb-6">
        Réservation confirmée pour{' '}
        <strong className="text-accent">{programme?.title ?? 'votre programme'}</strong>
      </p>

      <dl className="text-left text-sm space-y-2 mb-8 max-w-sm mx-auto">
        {name && (
          <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-2">
            <dt className="text-muted">Nom</dt>
            <dd className="font-medium m-0">{name}</dd>
          </div>
        )}
        {email && (
          <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-2">
            <dt className="text-muted">Email</dt>
            <dd className="font-medium m-0">{email}</dd>
          </div>
        )}
        {phone && (
          <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-2">
            <dt className="text-muted">Téléphone</dt>
            <dd className="font-medium m-0">{phone}</dd>
          </div>
        )}
        {programme && (
          <>
            <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-2">
              <dt className="text-muted">Durée</dt>
              <dd className="font-medium m-0">{formatProgrammeDuration(programme)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-[var(--color-border)] pb-2">
              <dt className="text-muted">Tarif programme</dt>
              <dd className="font-medium m-0 text-accent">{formatProgrammePrice(programme)}</dd>
            </div>
          </>
        )}
        {message && (
          <div className="pt-2">
            <dt className="text-muted mb-1">Message</dt>
            <dd className="font-medium m-0 text-[var(--color-text-muted)]">{message}</dd>
          </div>
        )}
      </dl>

      <p className="text-sm text-muted mb-8">
        Un email de confirmation vous a été envoyé. Gilson vous recontactera sous 24 h pour finaliser le créneau.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/" className="btn btn-primary">
          Retour accueil
        </Link>
        {programme?.id && (
          <Link to={`/programmes/${programme.id}`} className="btn btn-secondary">
            Voir le programme
          </Link>
        )}
      </div>
    </div>
  );
}
