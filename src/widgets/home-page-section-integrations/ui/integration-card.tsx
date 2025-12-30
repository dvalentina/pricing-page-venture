import Button from "@/shared/ui/button/button";
import Card from "@/shared/ui/card/card";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

function IntegrationCard({ title, description, buttonText, imageSrc }: Props) {
  return (
    <Card className="px-0! pt-9! pb-0! overflow-clip">
      <div className="flex flex-col gap-3 items-center px-9">
        <h2 className="text-h3 text-content-dark-primary text-center">
          {title}
        </h2>
        <p className="text-body-xl text-content-dark-secondary font-normal text-center">
          {description}
        </p>
      </div>
      <Button className="self-center mx-9" size="lg">
        {buttonText}
      </Button>
      <Image src={imageSrc} alt="" width={616} height={293} />
    </Card>
  );
}

export default IntegrationCard;
