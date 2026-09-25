import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import SustainabilitySection from '@/components/sections/SustainabilitySection';
import FinalCta from '@/components/sections/FinalCta';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <SustainabilitySection />
      <FinalCta />
    </main>
  );
}