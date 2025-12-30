import Card from "@/shared/ui/card/card";
import Stars from "@/shared/ui/stars/stars";
import { Testimonial } from "../model";
import User from "./user";

function TestimonialCard({ rating, text, user }: Testimonial) {
  return (
    <Card className="w-[410px]! p-10! gap-5!">
      <Stars rating={rating} />
      <p className="line-clamp-3">{text}</p>
      <User {...user} />
    </Card>
  );
}

export default TestimonialCard;
