'use client';

import { useTranslations } from 'next-intl';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function StatsSection() {
  const t = useTranslations('home.stats');

  const stats = [
    { label: t('capacity'), value: 1510, suffix: ' ' + t('capacityUnit') },
    { label: t('co2Avoided'), value: 848, suffix: ' ' + t('co2AvoidedUnit') },
    { label: t('countries'), value: 8, suffix: '' },
    { label: t('projects'), value: 24, suffix: '' }
  ];

  return (
    <section className="bg-terra-cream text-terra-ink py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-terra-deep mb-2">
              <AnimatedCounter end={s.value} suffix={s.suffix} />
            </div>
            <p className="text-sm uppercase tracking-wider text-terra-ink/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}