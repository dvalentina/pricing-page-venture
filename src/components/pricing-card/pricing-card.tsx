import clsx from "clsx";
import Button from "../button/button";
import Card, { Props as CardProps } from "../card/card";
import CheckIcon from "public/check-icon.svg";

export const PricingCard = ({ children, ...props }: CardProps) => {
  return (
    <Card asChild {...props}>
      <article className="text-left">{children}</article>
    </Card>
  );
};

const PricingCardTitle = ({
  title,
  cost,
  discount,
  description,
}: {
  title: string;
  cost: string;
  discount: string | null;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-h5">{title}</h2>
      <div className="flex gap-2 items-center">
        <p className="text-h3">{cost}</p>
        {discount && (
          <div
            className={clsx(
              "text-body-sm font-medium text-content-dark-primary rounded-md px-2 py-1 bg-neutral-30 group-data-[accent=true]:bg-neutral-90 group-data-[accent=true]:text-content-light-primary"
            )}
          >
            {discount}
          </div>
        )}
      </div>
      <p className="text-body-sm font-medium group-data-[accent=true]:text-content-dark-tertiary">
        {description}
      </p>
    </div>
  );
};

const ListMarker = () => {
  return (
    <div className="w-5 h-5 rounded-sm flex items-center justify-center bg-neutral-30 group-data-[accent=true]:bg-neutral-90">
      <CheckIcon
        className="text-neutral-70 group-data-[accent=true]:text-neutral-0 size-4"
        strokeWidth={1.6}
      />
    </div>
  );
};

const PricingCardContent = ({
  title,
  list,
}: {
  title: string;
  list: string[];
}) => {
  if (!title || !list) return null;
  return (
    <div className="flex flex-col gap-3">
      <p className="text-body-md font-medium text-content-dark-primary group-data-[accent=true]:text-content-light-primary">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {list.map((item) => (
          <li key={item} className="text-body-md flex gap-3 items-center">
            <ListMarker />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingCardCTA = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant="secondary-border" asChild className="mt-auto">
      {children}
    </Button>
  );
};

PricingCard.Title = PricingCardTitle;
PricingCard.Content = PricingCardContent;
PricingCard.CTA = PricingCardCTA;
