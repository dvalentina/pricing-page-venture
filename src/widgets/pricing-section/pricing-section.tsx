"use client";

import { PricingCard } from "@/features/pricing-card/pricing-card";
import { useBillingFrequencyContext } from "@/features/toggle-billing-frequency/billing-frequency-context";
import ToggleBillingFrequency from "@/features/toggle-billing-frequency/toggle-billing-frequency";
import { cards } from "./constants";
import MarqueeLogos from "./marquee-logos";
import { motion } from "motion/react";

function PricingSection() {
  const { billingFrequency } = useBillingFrequencyContext();

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-(--content-max-width) flex flex-col gap-16 justify-center items-center px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 0.6,
            delay: 0.6,
          }}
        >
          <ToggleBillingFrequency />
        </motion.div>
        <div className="w-full flex gap-8">
          {cards.map((card, index) => {
            const costs =
              billingFrequency === "yearly" ? card.annually : card.monthly;
            return (
              <motion.div
                key={card.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.6,
                  delay: index * 0.1 + 0.6,
                }}
                className="flex w-full"
              >
                <PricingCard accent={card.title === "Pro"}>
                  <PricingCard.Title title={card.title} {...costs} />
                  <PricingCard.Content {...card.content} />
                  <PricingCard.CTA>{card.callToAction}</PricingCard.CTA>
                </PricingCard>
              </motion.div>
            );
          })}
        </div>
        <MarqueeLogos />
      </div>
    </section>
  );
}

export default PricingSection;
