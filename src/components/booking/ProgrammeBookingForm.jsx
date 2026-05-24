import { useState } from 'react';
import { EmailService } from '@/services/EmailService';

const initialForm = { name: '', email: '', phone: '', message: '' };

export default function ProgrammeBookingForm({ programme, onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Requis';
    if (!form.email.trim()) next.email = 'Requis';
    else if (!/\S+@\S+\.\S+/.test(form.email)) next.email = 'Email invalide';
    if (!form.phone.trim()) next.phone = 'Requis';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const emailService = EmailService.getInstance();
      const result = await emailService.sendContactEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: `Réservation — ${programme?.title ?? 'Programme'}`,
        message: [
          `Programme : ${programme?.title ?? '—'}`,
          `Durée : ${programme?.durationWeeks ? `${programme.durationWeeks} sem.` : 'Sur mesure'}`,
          `Niveau : ${programme?.level ?? '—'}`,
          '',
          form.message || 'Demande de réservation via le site.',
        ].join('\n'),
      });

      if (result.success) {
        onSuccess?.({ ...form, programme });
        setForm(initialForm);
        setStatus('idle');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-medium mb-1">
            Nom complet *
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
            autoComplete="name"
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="booking-phone" className="block text-sm font-medium mb-1">
            Téléphone *
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
            autoComplete="tel"
          />
          {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="booking-email" className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          id="booking-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
          autoComplete="email"
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="booking-message" className="block text-sm font-medium mb-1">
          Message (optionnel)
        </label>
        <textarea
          id="booking-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Créneaux préférés, objectifs précis…"
          className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] resize-y"
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          Envoi impossible. Réessayez ou contactez-nous par WhatsApp.
        </p>
      )}
      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Envoi en cours…' : 'Confirmer ma demande'}
      </button>
    </form>
  );
}
