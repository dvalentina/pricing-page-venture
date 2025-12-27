import BannerSection from "@/widgets/banner-section/banner-section";
import ComparePlansSection from "@/widgets/compare-plans-section/compare-plans-section";
import FAQSection from "@/widgets/faq-section/faq-section";
import PricingSection from "@/widgets/pricing-section/pricing-section";
import TitleSection from "@/widgets/title-section/title-section";
import { BillingFrequencyContextProvider } from "@/features/toggle-billing-frequency/billing-frequency-context";

export function PricingPage() {
  return (
    <BillingFrequencyContextProvider>
      <div className="flex flex-col w-full">
        <TitleSection />
        <PricingSection />
        <ComparePlansSection />
        <FAQSection />
        <BannerSection />
      </div>
    </BillingFrequencyContextProvider>
  );
}