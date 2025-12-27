"use client";

import CollapsibleQuestion from "./collapsible-question";
import { questionsList } from "./constants";
import { motion } from "motion/react";

function FAQSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full flex flex-col gap-16 justify-center items-center max-w-(--content-max-width) px-20 py-19">
        <motion.h2
          className="text-h2 text-content-dark-primary"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1,
          }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="flex flex-col gap-4 w-263">
          {questionsList.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: `${index * 92}px` }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: index * 0.2 + 0.1,
              }}
            >
              <CollapsibleQuestion {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
