import { CellContext, ColumnDef } from "@tanstack/react-table";
import { TData, TValue } from "./model";
import ToggleBillingFrequency from "@/features/toggle-billing-frequency/toggle-billing-frequency";
import InfoTooltip from "@/features/info-tooltip/info-tooltip";
import { useBillingFrequencyContext } from "@/features/toggle-billing-frequency/billing-frequency-context";
import { cards } from "../pricing-section/constants";
import { PricingCard } from "@/features/pricing-card/pricing-card";
import CheckIcon from "public/check-icon.svg";
import CrossIcon from "public/x-icon.svg";

const createFirstColumnHeader = () => (
  <div className="flex flex-col gap-4 w-min">
    <p className="text-left font-normal">Billing Frequency</p>
    <ToggleBillingFrequency />
  </div>
);

const createFirstColumnCell = ({ row }: CellContext<TData, TValue>) =>
  !row.original.isSectionTitle && (
    <div className="flex justify-between items-center">
      <span>{row.original.feature.name}</span>
      {row.original.feature.tooltip ? (
        <InfoTooltip content={row.original.feature.tooltip} />
      ) : null}
    </div>
  );

const createCell = ({ cell }: CellContext<TData, TValue>) => {
  const value = cell.getValue();

  if (value === true) {
    return <CheckIcon className="size-6 mb-[3px]" />;
  } else if (value === false) {
    return <CrossIcon className="size-6 mb-[3px]" />;
  }
  return value;
};

const HeaderCard = ({ title }: { title: string }) => {
  const { billingFrequency } = useBillingFrequencyContext();
  const card = cards.find(
    (card) => card.title.toLowerCase() === title.toLowerCase()
  );

  if (!card) return null;

  const costs = billingFrequency === "yearly" ? card.annually : card.monthly;
  return (
    <PricingCard key={card.title} accent={card.title === "Pro"}>
      <PricingCard.Title title={card.title} {...costs} />
      <PricingCard.CTA>{card.callToAction}</PricingCard.CTA>
    </PricingCard>
  );
};

export const columns: ColumnDef<TData, TValue>[] = [
  {
    header: createFirstColumnHeader,
    accessorKey: "feature.name",
    cell: createFirstColumnCell,
  },
  {
    header: () => <HeaderCard title="free" />,
    accessorKey: "free",
    cell: createCell,
  },
  {
    header: () => <HeaderCard title="basic" />,
    accessorKey: "basic",
    cell: createCell,
  },
  {
    header: () => <HeaderCard title="pro" />,
    accessorKey: "pro",
    cell: createCell,
  },
  {
    header: () => <HeaderCard title="enterprise" />,
    accessorKey: "enterprise",
    cell: createCell,
  },
];
