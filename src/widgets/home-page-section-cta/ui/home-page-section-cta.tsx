import Button from "@/shared/ui/button/button";
import clsx from "clsx";
import Link from "next/link";

const gradientClassName =
  "absolute h-full w-40 top-0 bottom-0 z-1 from-content-dark-primary to-transparent";

export function CTASection() {
  return (
    <section className="w-full flex items-center justify-center bg-content-dark-primary ">
      <div className="relative max-w-(--content-max-width) flex flex-col gap-10 py-20 justify-center items-center w-full bg-[url(/home-page-pattern-perspective.svg)] bg-no-repeat bg-center">
        <div className={clsx(gradientClassName, "-left-5 bg-linear-to-r")} />
        <div className="flex flex-col gap-4 ">
          <h2 className="text-h2 text-content-light-primary text-center">
            Take Your Business to the Next Level
          </h2>
          <p className="text-body-lg text-content-light-primary text-center font-normal">
            Dive into the advantages of our CRM platform and witness the impact
            on your business.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="secondary-border" size="xl">
            <Link href="/getstarted">Get Started</Link>
          </Button>
          <Button variant="link-inverted" size="xl" asChild>
            <Link href="/demo">Request a Demo</Link>
          </Button>
        </div>
        <div className={clsx(gradientClassName, "-right-5 bg-linear-to-l")} />
      </div>
    </section>
  );
}
