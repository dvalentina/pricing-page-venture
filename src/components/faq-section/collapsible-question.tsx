import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import CaretUp from "public/caret-up.svg";
import CaretDown from "public/caret-down.svg";

function CollapsibleQuestion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <Collapsible className="group w-full bg-bg-primary hover:bg-bg-secondary border border-border-primary rounded-lg  data-[state=open]:border-border-tertiary overflow-hidden">
      <CollapsibleTrigger className="w-full h-full px-8 py-6 cursor-pointer text-h5 text-content-dark-primary text-left flex justify-between items-center">
        {question}
        <div>
          <CaretDown className="block group-data-[state=open]:hidden" />
          <CaretUp className="hidden group-data-[state=open]:block" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-8 data-[state=open]:pb-6 data-[state=open]:-mt-2 text-body-xl text-content-dark-secondary font-normal data-[state=open]:animate-collapsible-slide-down data-[state=closed]:animate-collapsible-slide-up">
        {answer}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default CollapsibleQuestion;
