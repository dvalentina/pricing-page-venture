import { AdvantagesSection } from "@/widgets/home-page-section-advantages";
import { FeaturesSection } from "@/widgets/home-page-section-features";
import { HeroSection } from "@/widgets/home-page-section-hero";
import { IntegrationsSection } from "@/widgets/home-page-section-integrations";
import { SocialProofSection } from "@/widgets/home-page-section-social-proof";
import { TestimonialSection } from "@/widgets/home-page-section-testimonial";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <AdvantagesSection />
      <IntegrationsSection />
      <TestimonialSection />
    </>
  );
}
