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
    <Collapsible className="group w-full bg-bg-primary border border-border-primary rounded-lg px-8 py-6 data-[state=open]:border-border-tertiary overflow-hidden">
      <CollapsibleTrigger className="w-full cursor-pointer text-h5 text-content-dark-primary text-left flex justify-between items-center">
        {question}
        <div>
          <CaretDown className="block group-data-[state=open]:hidden" />
          <CaretUp className="hidden group-data-[state=open]:block" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="text-body-xl text-content-dark-secondary font-normal data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up data-[state=open]:mt-4">
        {answer}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default CollapsibleQuestion;
