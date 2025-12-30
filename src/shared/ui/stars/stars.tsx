export type Rating = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

function Stars({ rating }: { rating: Rating }) {
  return <div>{rating}</div>;
}

export default Stars;
