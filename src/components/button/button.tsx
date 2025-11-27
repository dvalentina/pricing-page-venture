import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex justify-center items-center whitespace-nowrap rounded-sm gap-2 text-body-md font-medium hover:cursor-pointer disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-action-primary-base text-content-light-primary hover:bg-action-primary-hover disabled:bg-action-primary-disabled disabled:text-content-light-disabled",
        secondary:
          "bg-action-secondary-base2 text-content-dark-primary hover:bg-action-secondary-hover disabled:bg-action-secondary-disabled disabled:text-content-dark-disabled",
        // "secondary-border": "",
        // tertiary: "",
        link: "bg-transparent text-content-dark-primary underline decoration-2 underline-offset-3 hover:text-action-primary-hover disabled:text-action-primary-disabled",
        "link-inverted":
          "bg-transparent text-content-light-primary underline decoration-2 underline-offset-3 hover:text-action-secondary-hover disabled:text-action-primary-disabled",
        // destructive: "",
      },
      size: {
        sm: "px-3 py-2 text-body-sm",
        md: "px-3 py-2 text-body-md",
        lg: "px-4.5 py-2 text-body-lg",
        xl: "px-4.5 py-2 text-body-xl",
      },
      iconOnly: {
        true: "rounded-full!",
        false: null,
      },
    },
    compoundVariants: [
      { iconOnly: true, size: "sm", className: "p-[9px]!" },
      { iconOnly: true, size: "md", className: "p-[10px]!" },
      { iconOnly: true, size: "lg", className: "p-[10px]!" },
      { iconOnly: true, size: "xl", className: "p-[12px]!" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, variant, size, iconOnly, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={clsx(buttonVariants({ variant, size, iconOnly, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
