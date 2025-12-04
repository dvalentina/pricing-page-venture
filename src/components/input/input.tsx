import clsx from "clsx";
import React from "react";
import { InputHTMLAttributes } from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={clsx(
      "px-3 py-2.5 border border-action-outline-base rounded-sm text-body-md font-normal text-content-dark-primary placeholder:text-content-dark-tertiary  hover:border-action-outline-hover active:border-action-outline-active active:outline-none focus:border-action-outline-active focus:outline-none",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
