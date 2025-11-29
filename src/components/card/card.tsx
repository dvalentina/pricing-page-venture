import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import React from "react";

export interface Props {
  accent?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

function Card({ accent = false, asChild = false, children }: Props) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={clsx(
        "group flex flex-col gap-6 p-6 rounded-lg w-full border border-border-primary",
        accent
          ? "bg-content-dark-primary text-content-light-primary"
          : "bg-bg-primary text-content-dark-primary"
      )}
      data-accent={accent}
    >
      {children}
    </Comp>
  );
}

export default Card;
