import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { TechnologySection } from '@/components/sections/technology';
import { SolutionsSection } from '@/components/sections/solutions';
import { FinancingSection } from '@/components/sections/financing';
import { GovernmentSection } from '@/components/sections/government';
import { PartnersSection } from '@/components/sections/partners';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <SolutionsSection />
      <FinancingSection />
      <GovernmentSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
}
