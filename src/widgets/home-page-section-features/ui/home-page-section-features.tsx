import clsx from "clsx";
import { features } from "../constants";
import Feature from "./feature";

const gradientClassName =
  "absolute w-full h-60 right-0 left-0 z-1 from-bg-primary to-transparent";

export function FeaturesSection() {
  return (
    <section className="relative w-full flex justify-center items-center bg-bg-secondary">
      <div className={clsx(gradientClassName, "top-0 bg-linear-to-b")} />
      <div className="w-full max-w-(--content-max-width) flex flex-col gap-19 items-center justify-center px-20 py-37">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
      <div className={clsx(gradientClassName, "bottom-0 bg-linear-to-t")} />
    </section>
  );
}
