import Button from "@/shared/ui/button/button";
import clsx from "clsx";
import Image from "next/image";
import GlobeIcon from "public/globe.svg";

const gradientClassName =
  "absolute w-full h-30 right-0 left-0 z-1 from-bg-primary to-transparent";

export function HeroSection() {
  return (
    <section className="relative w-full flex justify-center items-center min-h-[680px] overflow-y-clip overflow-x-visible">
      <div className={clsx(gradientClassName, "top-0 bg-linear-to-b")} />
      <div className="max-w-(--content-max-width) py-24 px-20 flex justify-start items-center w-full h-full bg-[url(/home-page-pattern-dotted-lines.svg)] bg-cover relative overflow-x-visible">
        <div className="max-w-[624px] flex flex-col gap-9 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-content-dark-primary text-display">
              Revolutionize Customer Relationship
            </h1>
            <p className="text-content-dark-secondary text-h6">
              Streamline Operations, Boost Efficiency, and Drive Growth
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <Button size="xl">Get Started</Button>
              <Button size="xl" variant="secondary-border">
                Learn More
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-content-dark-secondary font-medium text-body-md">
                Used by and helping over more{" "}
                <span className="text-content-dark-primary">
                  200+ Companies
                </span>
              </p>
              <GlobeIcon className="size-4" />
            </div>
          </div>
        </div>
        <Image
          src="/home-page-hero-illustration.png"
          alt="dashboard illustration"
          height="625"
          width="895"
          className="absolute top-16 left-[750px]"
          priority
        />
      </div>
      <div className={clsx(gradientClassName, "bottom-0 bg-linear-to-t")} />
    </section>
  );
}
