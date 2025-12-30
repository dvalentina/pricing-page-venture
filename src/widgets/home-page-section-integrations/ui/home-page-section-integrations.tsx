import { integrationCards } from "../constants";
import IntegrationCard from "./integration-card";

export function IntegrationsSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full max-w-(--content-max-width) flex items-center justify-center px-20 py-12 gap-12">
        {integrationCards.map((card) => (
          <IntegrationCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
