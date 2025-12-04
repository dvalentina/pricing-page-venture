import Button from "../button/button";
import Card from "../card/card";
import { Input } from "../input/input";

function SubscribeForm() {
  return (
    <Card className="rounded-sm max-w-[373px] gap-4!" asChild>
      <form>
        <p className="text-body-xl font-medium text-content-dark-primary">
          Subscribe to Our Newsletter to Get Free Demo for First One Month
        </p>
        <div className="w-full flex flex-col gap-3">
          <Input placeholder="Enter your email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </form>
    </Card>
  );
}

export default SubscribeForm;
