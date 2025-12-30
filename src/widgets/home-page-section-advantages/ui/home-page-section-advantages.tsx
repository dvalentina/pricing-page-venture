"use client";

import { Pagination } from "@/features/pagination";
import { advantages } from "../constants";
import Advantage from "./advantage";

export function AdvantagesSection() {
  const advantagesBlock = (
    <div className="flex gap-5">
      {advantages.map((advantage) => (
        <Advantage key={advantage.title} {...advantage} />
      ))}
    </div>
  );

  const handleClickNext = () => {
    // TODO: add animation
  };

  const handleClickPrev = () => {
    // TODO: add animation
  };

  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full max-w-(--content-max-width) px-20 py-24 flex flex-col gap-12 items-start justify-center overflow-clip">
        <div className="relative w-full flex flex-col gap-4">
          <h2 className="text-h2 text-content-dark-primary">
            Advantage of Venture as Your <br />
            CRM Platform
          </h2>
          <p className="text-body-xl text-content-dark-secondary font-normal">
            Here are some reasons about why you should choose Venture as your
            CRM.
          </p>
          <Pagination
            hasNext={true}
            hasPrev={false}
            onClickNext={handleClickNext}
            onClickPrev={handleClickPrev}
            className="absolute bottom-0 right-0"
          />
        </div>
        <div className="flex gap-5">
          {advantagesBlock}
          {advantagesBlock}
        </div>
      </div>
    </section>
  );
}
