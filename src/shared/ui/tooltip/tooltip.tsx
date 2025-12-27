import {
  Tooltip as TooltipPrimitive,
  TooltipTrigger,
  TooltipContent,
  TooltipContentProps,
  TooltipProvider as TooltipProviderPrimitive,
  TooltipProviderProps,
} from "@radix-ui/react-tooltip";

export function Tooltip({ children, content, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive>
      <TooltipTrigger asChild className="cursor-pointer">
        {children}
      </TooltipTrigger>
      <TooltipContent
        side="top"
        align="center"
        sideOffset={5}
        className="border border-border-primary bg-bg-secondary rounded-md px-3 py-2 text-body-sm font-regular text-content-dark-secondary max-w-60 data-[state=delayed-open]:data-[side=top]:animate-tooltip-slide-down data-[state=delayed-open]:data-[side=left]:animate-tooltip-slide-right data-[state=delayed-open]:data-[side=bottom]:animate-tooltip-slide-up data-[state=delayed-open]:data-[side=right]:animate-tooltip-slide-left"
        {...props}
      >
        {content}
      </TooltipContent>
    </TooltipPrimitive>
  );
}

export const TooltipProvider = (props: TooltipProviderProps) => (
  <TooltipProviderPrimitive
    delayDuration={600}
    skipDelayDuration={500}
    {...props}
  />
);
