import clsx from "clsx";

const gradientClassName =
  "absolute w-full h-24 right-0 left-0 z-1 from-bg-primary to-transparent";

function TitleSection() {
  return (
    <section className="relative w-full flex justify-center items-center ">
      <div className={clsx(gradientClassName, "top-0 bg-linear-to-b")} />
      <div className="w-full max-w-(--content-max-width) justify-center items-center py-24 gap-5 bg-[url(/pattern-dotted-lines.svg)] bg-cover">
        <h1 className="text-h1 text-center">From Startup to Enterprise.</h1>
        <p className="text-h6 text-content-dark-secondary text-center">
          Perfectly tailored for every stage of your growth.
          <br />
          Get started today, no credit card needed.
        </p>
      </div>
      <div className={clsx(gradientClassName, "bottom-0 bg-linear-to-t")} />
    </section>
  );
}

export default TitleSection;
