import ToggleBillingFrequency from "../toggle-billing-frequency/toggle-billing-frequency";

function PricingSection() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-(--content-max-width) flex flex-col gap-16 justify-center items-center px-20">
        <ToggleBillingFrequency />
        <div>cards</div>
        <div>carousel</div>
      </div>
    </section>
  );
}

export default PricingSection;
