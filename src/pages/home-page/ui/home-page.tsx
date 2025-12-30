import { AdvantagesSection } from "@/widgets/home-page-section-advantages";
import { FeaturesSection } from "@/widgets/home-page-section-features";
import { HeroSection } from "@/widgets/home-page-section-hero";
import { SocialProofSection } from "@/widgets/home-page-section-social-proof";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <AdvantagesSection />
    </>
  );
}
