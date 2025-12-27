"use client";

import clsx from "clsx";
import { motion } from "motion/react";

const gradientClassName =
  "absolute w-full h-24 right-0 left-0 z-1 from-bg-primary to-transparent";

function TitleSection() {
  return (
    <section className="relative w-full flex justify-center items-center ">
      <div className={clsx(gradientClassName, "top-0 bg-linear-to-b")} />
      <div className="w-full max-w-(--content-max-width) justify-center items-center py-24 gap-5 bg-[url(/pricing-page-pattern-dotted-lines.svg)] bg-cover">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1,
          }}
          className="text-h1 text-center"
        >
          From Startup to Enterprise.
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 1,
            delay: 0.3,
          }}
          className="text-h6 text-content-dark-secondary text-center"
        >
          Perfectly tailored for every stage of your growth.
          <br />
          Get started today, no credit card needed.
        </motion.p>
      </div>
      <div className={clsx(gradientClassName, "bottom-0 bg-linear-to-t")} />
    </section>
  );
}

export default TitleSection;
