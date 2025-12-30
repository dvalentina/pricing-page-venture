import Card from "@/shared/ui/card/card";
import Stars, { Rating } from "@/shared/ui/stars/stars";

export interface Props {
  rating: Rating;
  text: string;
  user: {
    name: string;
    avatar: string;
    ocupation: string;
  };
}

function TestimonialCard({ rating, text, user }: Props) {
  return (
    <Card className="w-[410px]!">
      <Stars rating={rating} />
      <p>{text}</p>
      <div>{user.name}</div>
    </Card>
  );
}

export default TestimonialCard;
