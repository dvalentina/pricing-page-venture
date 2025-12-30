import { Rating } from "@/shared/ui/stars/stars";

export interface Testimonial {
  rating: Rating;
  text: string;
  user: {
    name: string;
    avatar: string;
    occupation: string;
  };
}
