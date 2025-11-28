import Link from "next/link";
import Button from "../button/button";
import Image from "next/image";

function BannerSection() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="max-w-(--content-max-width) py-24 px-20 flex justify-center items-center w-full">
        <div className="relative bg-content-dark-primary rounded-lg w-full bg-[url(/pattern-waves.svg)] bg-cover overflow-hidden">
          <div className="py-24 pl-14 pr-3.5 flex flex-col gap-10">
            <div className="max-w-[568px] flex flex-col gap-4 ">
              <h2 className="text-h2 text-content-light-primary">
                Take Your Business to the Next Level
              </h2>
              <p className="text-body-xl text-content-light-primary">
                Dive into the advantages of our CRM platform and witness the
                impact on your business.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="secondary" size="xl">
                <Link href="/getstarted">Get Started</Link>
              </Button>
              <Button variant="link-inverted" size="xl" asChild>
                <Link href="/demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/dashboard-illustration.png"
            alt=""
            width={632}
            height={421}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
