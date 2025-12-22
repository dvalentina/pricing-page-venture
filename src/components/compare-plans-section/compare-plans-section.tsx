"use client";

import ComparisonTable from "./comparison-table";
import { motion } from "motion/react";

function ComparePlansSection() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-(--content-max-width) flex flex-col gap-16 justify-center items-center px-20 pt-24 pb-19">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1,
          }}
          className="text-h2 text-content-dark-primary"
        >
          Compare Plans
        </motion.h2>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1,
            delay: 0.2,
          }}
          className="w-full"
        >
          <ComparisonTable />
        </motion.div>
      </div>
    </section>
  );
}

export default ComparePlansSection;
