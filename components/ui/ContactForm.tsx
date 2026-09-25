'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string) || '';
    const email = (data.get('email') as string) || '';
    const message = (data.get('message') as string) || '';

    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = t('required');
    if (!email.trim()) newErrors.email = t('required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = t('invalidEmail');
    if (!message.trim()) newErrors.message = t('required');

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    // Simulamos el envío
    await new Promise((r) => setTimeout(r, 1200));

    setStatus('success');
    form.reset();

    setTimeout(() => setStatus('idle'), 4000);
  }

  const inputBase =
    'w-full bg-terra-deep/60 border border-terra-lime/20 rounded-xl px-4 py-3 text-terra-cream placeholder-terra-cream/40 focus:outline-none focus:border-terra-lime transition';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('name')} *
          </label>
          <input
            type="text"
            name="name"
            className={inputBase}
            placeholder="Juan Pérez"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t('email')} *
          </label>
          <input
            type="email"
            name="email"
            className={inputBase}
            placeholder="juan@empresa.com"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">{t('company')}</label>
        <input
          type="text"
          name="company"
          className={inputBase}
          placeholder="Acme Corp"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">{t('subject')}</label>
        <select name="subject" className={inputBase}>
          <option value="general">{t('subjectGeneral')}</option>
          <option value="projects">{t('subjectProjects')}</option>
          <option value="careers">{t('subjectCareers')}</option>
          <option value="press">{t('subjectPress')}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          {t('message')} *
        </label>
        <textarea
          name="message"
          rows={6}
          className={inputBase + ' resize-none'}
          placeholder="Contanos en qué podemos ayudarte..."
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-terra-lime text-terra-deep px-8 py-4 rounded-full font-semibold hover:bg-terra-cream transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>

      {status === 'success' && (
        <p className="text-terra-lime text-sm text-center bg-terra-lime/10 rounded-xl py-3">
          {t('success')}
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center bg-red-400/10 rounded-xl py-3">
          {t('error')}
        </p>
      )}
    </form>
  );
}