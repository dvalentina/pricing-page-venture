"use client";

import { motion, MotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export const Counter = ({
  value,
  height,
}: {
  value: number;
  height: number;
}) => {
  return (
    <div className="flex overflow-hidden">
      <Digit place={100} value={value} height={height} />
      <Digit place={10} value={value} height={height} />
      <Digit place={1} value={value} height={height} />
    </div>
  );
};

const Digit = ({
  place,
  value,
  height,
}: {
  place: number;
  value: number;
  height: number;
}) => {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace, { bounce: 0 });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  if (!(value === 0 && place === 1) && valueRoundedToPlace < 1) return null;

  return (
    <div className="relative w-[1ch] h-full tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
};

const Number = ({
  mv,
  number,
  height,
}: {
  mv: MotionValue;
  number: number;
  height: number;
}) => {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;

    let memo = -offset * height;
    if (offset > 5) {
      memo += 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
};
