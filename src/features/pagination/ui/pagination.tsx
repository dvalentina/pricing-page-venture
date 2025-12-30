import Button from "@/shared/ui/button/button";
import clsx from "clsx";
import CaretLeft from "public/caret-left.svg";
import CaretRight from "public/caret-right.svg";

interface Props {
  onClickNext: () => void;
  onClickPrev: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  className?: string;
}

export function Pagination({
  hasNext = true,
  hasPrev = true,
  onClickNext,
  onClickPrev,
  className,
}: Props) {
  return (
    <div className={clsx("flex gap-4", className)}>
      <Button
        onClick={onClickPrev}
        disabled={!hasPrev}
        variant="secondary-border"
        iconOnly
      >
        <CaretLeft />
      </Button>
      <Button
        onClick={onClickNext}
        disabled={!hasNext}
        variant="secondary-border"
        iconOnly
      >
        <CaretRight />
      </Button>
    </div>
  );
}
