import StarFullIcon from "public/star-full-icon.svg";
import StarHalfIcon from "public/star-half-icon.svg";

export type Rating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

function Stars({ rating }: { rating: Rating }) {
  const icons = [...Array(5)].map((_, index) => {
    if (rating >= index + 1) {
      return (
        <StarFullIcon
          key={index}
          className="size-6 text-content-dark-primary"
        />
      );
    } else if (rating - index === 0.5) {
      return <StarHalfIcon key={index} />;
    } else {
      return (
        <StarFullIcon
          key={index}
          className="size-6 text-content-dark-disabled"
        />
      );
    }
  });

  return <div className="flex gap-1">{icons}</div>;
}

export default Stars;
