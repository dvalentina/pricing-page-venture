import CollapsibleQuestion from "./collapsible-question";
import { questionsList } from "./constants";

function FAQSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full flex flex-col gap-16 justify-center items-center max-w-(--content-max-width) px-20 py-19">
        <h2 className="text-h2 text-content-dark-primary">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4 w-263">
          {questionsList.map((item) => (
            <CollapsibleQuestion key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
