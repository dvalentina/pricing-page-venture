export type TValue = string | boolean;

export type PricingInfo = {
  feature: {
    name: string;
    tooltip: string | null;
  };
  free: TValue;
  basic: TValue;
  pro: TValue;
  enterprise: TValue;
};

export type TData =
  | {
      isSectionTitle: false;
      feature: {
        name: string;
        tooltip: string | null;
      };
      free: TValue;
      basic: TValue;
      pro: TValue;
      enterprise: TValue;
    }
  | {
      isSectionTitle: true;
      title: string;
    };
