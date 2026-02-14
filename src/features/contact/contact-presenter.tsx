'use client';

import { useMemo, useState } from 'react';
import type { ContactLink } from '@/domain/entities/portfolio';
import { contactSchema, type ContactInput } from '@/lib/validators/contact';

function ContactIcon({ contact }: { contact: ContactLink }) {
  const label = contact.label.toLowerCase();
  const href = contact.href.toLowerCase();
  const baseClass = 'h-4 w-4';

  if (label.includes('mail')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path
          d="M3 6h18v12H3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m4 7 8 6 8-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (label.includes('telefone') || href.includes('wa.me')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path
          d="M7.5 4h3L12 8l-2 2c1 2 3 4 5 5l2-2 4 1.5v3c0 .8-.7 1.5-1.5 1.5C11 19 5 13 5 5.5 5 4.7 5.7 4 6.5 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (href.includes('github')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path
          d="M12 3a9 9 0 0 0-2.8 17.6c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.4-1-.9-1.3-.9-1.3-.8-.6 0-.6 0-.6 1 .1 1.5 1 1.5 1 .8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2.3-.2-4.6-1.1-4.6-5A4 4 0 0 1 6.8 8c-.2-.3-.5-1.2 0-2.5 0 0 .8-.2 2.6 1A9 9 0 0 1 12 6c.9 0 1.8.1 2.6.5 1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.2 0 2.5a4 4 0 0 1 1 2.8c0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v2.3c0 .3.2.6.7.5A9 9 0 0 0 12 3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (href.includes('linkedin')) {
    return (
      <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
        <path
          d="M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm4 5h4v1.6h.1c.6-1 1.8-2 3.8-2 4.1 0 4.9 2.6 4.9 6.1V20h-4v-4.9c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7V20h-4z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={baseClass} aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="currentColor" />
    </svg>
  );
}

export function ContactPresenter({ contacts }: { contacts: ContactLink[] }) {
  const [form, setForm] = useState<ContactInput>({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const email = useMemo(
    () => contacts.find((contact) => contact.label === 'E-mail')?.value ?? '',
    [contacts]
  );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(form);

    if (!parsed.success) {
      setError(
        parsed.error.issues[0]?.message ?? 'Revise os dados do formulario'
      );
      return;
    }

    setError('');
    setStatus('loading');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data)
    });

    if (response.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      return;
    }

    setStatus('idle');
    setError('Nao foi possivel enviar sua mensagem agora.');
  };

  const copyEmail = async () => {
    if (!email) {
      return;
    }
    await navigator.clipboard.writeText(email);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="bg-panel/85 rounded-2xl border border-slate-300/80 p-5 shadow-soft backdrop-blur dark:border-slate-700/80">
        <h3 className="mb-3 text-lg font-extrabold">Redes e contato direto</h3>
        <ul className="space-y-2 text-sm text-muted">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                className="hover:border-accent/70 group flex items-center gap-2 rounded-lg border border-slate-300/60 px-2 py-2 transition hover:text-accent dark:border-slate-700/60"
                aria-label={`Abrir ${contact.label}`}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="group-hover:border-accent/70 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700/70">
                  <ContactIcon contact={contact} />
                </span>
                <span className="min-w-0 break-all">
                  <span className="font-semibold">{contact.label}:</span>{' '}
                  {contact.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={copyEmail}
          className="mt-4 rounded-md border border-slate-400 px-3 py-2 text-sm font-semibold"
          aria-label="Copiar e-mail"
        >
          Copiar e-mail
        </button>
      </div>

      <form
        onSubmit={onSubmit}
        className="bg-panel/85 rounded-2xl border border-slate-300/80 p-5 shadow-soft backdrop-blur dark:border-slate-700/80"
        noValidate
      >
        <h3 className="mb-3 text-lg font-extrabold">Enviar mensagem</h3>
        <div className="space-y-3">
          <label className="block text-sm font-semibold">
            Nome
            <input
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-1 w-full rounded-md border border-slate-400 bg-transparent px-3 py-2"
              aria-label="Nome"
            />
          </label>
          <label className="block text-sm font-semibold">
            E-mail
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              className="mt-1 w-full rounded-md border border-slate-400 bg-transparent px-3 py-2"
              aria-label="E-mail"
            />
          </label>
          <label className="block text-sm font-semibold">
            Mensagem
            <textarea
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              className="mt-1 min-h-32 w-full rounded-md border border-slate-400 bg-transparent px-3 py-2"
              aria-label="Mensagem"
            />
          </label>
        </div>
        {error ? (
          <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>
        ) : null}
        {status === 'success' ? (
          <p className="mt-3 text-sm font-semibold text-emerald-600">
            Mensagem enviada com sucesso (mock).
          </p>
        ) : null}
        <button
          type="submit"
          className="mt-4 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}
