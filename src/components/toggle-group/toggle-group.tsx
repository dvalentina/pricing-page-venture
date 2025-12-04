"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ToggleGroupItemProps,
  ToggleGroup as ToggleGroupPrimitive,
  ToggleGroupSingleProps,
  ToggleGroupItem as ToggleGroupItemPrimitive,
} from "@radix-ui/react-toggle-group";
import clsx from "clsx";
import Button from "../button/button";

interface ContextProps {
  setItemUnderlineOffset?: (value: number) => void;
  setItemUnderlineWidth?: (value: number) => void;
  setItemUnderlineHeight?: (value: number) => void;
  activeItem?: string | null;
  setActiveItem?: (value: string) => void;
}

const ToggleContext = React.createContext<ContextProps>({});

function useToggleContext() {
  const context = React.useContext(ToggleContext);
  if (!context) {
    throw new Error(
      "Toggle compound components cannot be rendered outside the ToggleGroup component"
    );
  }
  return context;
}

export const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  ToggleGroupSingleProps
>(({ className, children, value, ...props }, ref) => {
  const [activeItem, setActiveItem] = useState<string | undefined>(value);
  const [itemUnderlineWidth, setItemUnderlineWidth] = useState(0);
  const [itemUnderlineOffset, setItemUnderlineOffset] = useState(0);
  const [itemUnderlineHeight, setItemUnderlineHeight] = useState(0);

  const contextValue = {
    setItemUnderlineOffset,
    setItemUnderlineWidth,
    setItemUnderlineHeight,
    activeItem,
    setActiveItem,
  };

  useEffect(() => {
    setActiveItem(value);
  }, [value]);

  const underline = (
    <Button asChild>
      <span
        className="absolute transition-all duration-300 pointer-events-none"
        style={{
          left: itemUnderlineOffset,
          width: itemUnderlineWidth,
          height: itemUnderlineHeight,
        }}
      />
    </Button>
  );

  return (
    <ToggleContext.Provider value={contextValue}>
      <ToggleGroupPrimitive
        ref={ref}
        className={clsx(
          "relative rounded-lg bg-bg-primary p-2 border border-border-primary flex gap-3",
          className
        )}
        value={value}
        {...props}
      >
        {children}
        {activeItem && itemUnderlineWidth && itemUnderlineHeight
          ? underline
          : null}
      </ToggleGroupPrimitive>
    </ToggleContext.Provider>
  );
});
ToggleGroup.displayName = "ToggleGroup";

export const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  ToggleGroupItemProps
>(({ className, value, ...props }, ref) => {
  const rectRef = useRef<HTMLDivElement>(null);
  const {
    setItemUnderlineOffset,
    setItemUnderlineWidth,
    setItemUnderlineHeight,
    activeItem,
  } = useToggleContext();

  useEffect(() => {
    if (
      value === activeItem &&
      setItemUnderlineWidth &&
      setItemUnderlineOffset &&
      setItemUnderlineHeight
    ) {
      setItemUnderlineWidth(rectRef?.current?.clientWidth ?? 0);
      setItemUnderlineHeight(rectRef?.current?.clientHeight ?? 0);
      setItemUnderlineOffset(rectRef?.current?.offsetLeft ?? 0);
    }
  }, [
    activeItem,
    value,
    setItemUnderlineWidth,
    setItemUnderlineOffset,
    setItemUnderlineHeight,
  ]);

  return (
    <div ref={rectRef}>
      <Button asChild variant="tertiary">
        <ToggleGroupItemPrimitive
          ref={ref}
          className={clsx(
            "text-body-md text-content-dark-primary data-[state=on]:text-content-light-primary cursor-pointer z-2 relative data-[state=on]:pointer-events-none transition-colors duration-300",
            className
          )}
          value={value}
          {...props}
        />
      </Button>
    </div>
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";
