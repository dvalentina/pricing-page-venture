import Button from "@/shared/ui/button/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  url: string;
  imageSrc: string;
}

function Feature({ title, description, url, imageSrc }: Props) {
  return (
    <div className="flex gap-12 items-center justify-between even:flex-row-reverse">
      <Image src={imageSrc} width={624} height={436} alt="" />
      <div className="flex flex-col gap-4 max-w-[608px]">
        <h2 className="text-h2 text-content-dark-primary">{title}</h2>
        <p className="text-body-xl text-content-dark-secondary font-normal">
          {description}
        </p>
        <Link href={url}>
          <Button variant="secondary-border" size="lg">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Feature;
