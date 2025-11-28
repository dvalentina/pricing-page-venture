"use client";

import { ToggleGroup, ToggleGroupItem } from "../toggle-group/toggle-group";
import {
  BillingFrequency,
  useBillingFrequencyContext,
} from "./billing-frequency-context";

function ToggleBillingFrequency() {
  const { billingFrequency, setBillingFrequency } =
    useBillingFrequencyContext();

  return (
    <ToggleGroup
      type="single"
      value={billingFrequency}
      onValueChange={(value: BillingFrequency) => {
        if (setBillingFrequency) setBillingFrequency(value);
      }}
    >
      <ToggleGroupItem value="monthly">Billed Monthly</ToggleGroupItem>
      <ToggleGroupItem value="yearly">Billed Annually</ToggleGroupItem>
    </ToggleGroup>
  );
}

export default ToggleBillingFrequency;
