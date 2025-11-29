"use client";

import { PricingCard } from "../pricing-card/pricing-card";
import { useBillingFrequencyContext } from "../toggle-billing-frequency/billing-frequency-context";
import ToggleBillingFrequency from "../toggle-billing-frequency/toggle-billing-frequency";
import { cards } from "./constants";

function PricingSection() {
  const { billingFrequency } = useBillingFrequencyContext();

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-(--content-max-width) flex flex-col gap-16 justify-center items-center px-20">
        <ToggleBillingFrequency />
        <div className="w-full flex gap-8">
          {cards.map((card) => {
            const costs =
              billingFrequency === "yearly" ? card.annually : card.monthly;
            return (
              <PricingCard key={card.title} accent={card.title === "Pro"}>
                <PricingCard.Title title={card.title} {...costs} />
                <PricingCard.Content {...card.content} />
                <PricingCard.CTA>{card.callToAction}</PricingCard.CTA>
              </PricingCard>
            );
          })}
        </div>
        <div>carousel</div>
      </div>
    </section>
  );
}

export default PricingSection;
