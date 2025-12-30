import Image from "next/image";
import { Testimonial } from "../model";

function User({ avatar, name, occupation }: Testimonial["user"]) {
  return (
    <div className="flex gap-3 items-center">
      <Image
        src={avatar}
        width={40}
        height={40}
        alt=""
        className="rounded-full"
      />
      <div className="flex flex-col gap-[3px]">
        <p className="text-body-lg font-medium text-content-dark-primary">
          {name}
        </p>
        <p className="text-body-md font-normal text-content-dark-tertiary">
          {occupation}
        </p>
      </div>
    </div>
  );
}

export default User;
