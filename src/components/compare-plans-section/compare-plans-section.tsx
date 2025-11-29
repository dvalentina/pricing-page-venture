import ComparisonTable from "./comparison-table";

function ComparePlansSection() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-(--content-max-width) flex flex-col gap-16 justify-center items-center px-20 pt-24 pb-19">
        <h2 className="text-h2 text-content-dark-primary">Compare Plans</h2>
        <ComparisonTable />
      </div>
    </section>
  );
}

export default ComparePlansSection;
