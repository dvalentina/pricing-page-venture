"use client";

import { motion } from "motion/react";

function Marquee({ children }: { children: React.ReactNode }) {
  const block = (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex shrink-0"
    >
      {children}
    </motion.div>
  );

  return (
    <div className="w-full overflow-hidden select-none">
      <div className="flex w-full">
        {block}
        {block}
      </div>
    </div>
  );
}
export default Marquee;
