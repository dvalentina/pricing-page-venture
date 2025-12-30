import Card from "@/shared/ui/card/card";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}

function Advantage({ title, description, imageSrc }: Props) {
  return (
    <Card className="bg-bg-secondary w-[515px]!">
      <Image
        src={imageSrc}
        alt=""
        width={467}
        height={320}
        className="shadow-2xl shadow-border-primary/30"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-h6 text-content-dark-primary">{title}</h3>
        <p className="text-body-md text-content-dark-secondary font-normal">
          {description}
        </p>
      </div>
    </Card>
  );
}

export default Advantage;
