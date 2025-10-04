import { Link } from "react-router-dom";
import { originImgUrl } from "../api/imgUrl";
import LikeButton from "./LikeButton";
import DetailButton from "./DetailButton";

export default function MovieCard({
  movie,
  className = "",
  imgClassName = "",
  likeButton,
  detailButton,
}) {
  return (
    <div className={`relative flex flex-col gap-1 ${className}`}>
      <Link to={`/details/${movie.id}`}>
        <img
          className={`object-fit ${imgClassName} w-full`}
          src={`${originImgUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <p className="absolute top-2 right-2 rounded-full px-2 py-1 bg-amber-100 text-gray-900 font-bold text-[12px]">
          {movie.vote_average}
        </p>
      </Link>
      <div className="flex justify-between">
        {likeButton}
        {detailButton}
      </div>
    </div>
  );
}
