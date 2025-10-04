import { Link } from "react-router-dom";

const DetailButton = ({ movie }) => {
  return (
    <Link
      to={`/details/${movie.id}`}
      className="inline-block bg-[rgb(152,151,151)] p-0.5 w-[49%] rounded-sm text-center text-white"
    >
      상제페이지
    </Link>
  );
};

export default DetailButton;
