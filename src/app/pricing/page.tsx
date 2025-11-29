import BannerSection from "@/components/banner-section/banner-section";
import ComparePlansSection from "@/components/compare-plans-section/compare-plans-section";
import FAQSection from "@/components/faq-section/faq-section";
import PricingSection from "@/components/pricing-section/pricing-section";
import TitleSection from "@/components/title-section/title-section";
import { BillingFrequencyContextProvider } from "@/components/toggle-billing-frequency/billing-frequency-context";

function PricingPage() {
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

export default PricingPage;
