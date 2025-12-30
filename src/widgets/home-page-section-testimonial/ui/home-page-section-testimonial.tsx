import { testimonials } from "../constants";
import TestimonialCard from "./testimonial-card";

export function TestimonialSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full max-w-(--content-max-width) flex flex-col items-center justify-center gap-12 px-20 py-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-h2 text-center text-content-dark-primary">
            Used by more than 10K+ Business
          </h2>
          <p className="text-body-xl text-content-dark-secondary text-center font-normal">
            Hear what they say about Venture and why you should choose Venture
          </p>
        </div>
        <div className="flex gap-6 flex-wrap">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.user.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
