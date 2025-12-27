"use client";
import React, { useState } from "react";

export type BillingFrequency = "monthly" | "yearly";

export interface BillingFrequencyContextProps {
  billingFrequency: BillingFrequency;
  setBillingFrequency?: (value: BillingFrequency) => void;
}

export const BillingFrequencyContext =
  React.createContext<BillingFrequencyContextProps>({
    billingFrequency: "yearly",
    setBillingFrequency: undefined,
  });

export function useBillingFrequencyContext() {
  const context = React.useContext(BillingFrequencyContext);
  if (!context) {
    throw new Error(
      "BillingFrequency context cannot be used outside the BillingFrequency context provider"
    );
  }
  return context;
}

export const BillingFrequencyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [billingFrequency, setBillingFrequency] =
    useState<BillingFrequency>("yearly");
  return (
    <BillingFrequencyContext.Provider
      value={{ billingFrequency, setBillingFrequency }}
    >
      {children}
    </BillingFrequencyContext.Provider>
  );
};
