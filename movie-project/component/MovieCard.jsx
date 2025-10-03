import { Link } from "react-router-dom";
import { imgUrl } from "../api/imgUrl";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useLikeStore } from "../store/LikeMovie";

export default function MovieCard({
  movie,
  className = "",
  imgClassName = "",
}) {
  const { likeMovie, toggleLike } = useLikeStore();
  const isLike = likeMovie.includes(movie.id);

  const handleLike = (e) => {
    e.stopPropagation();
    toggleLike(movie.id);
  };
  return (
    <div className={`relative flex flex-col gap-1.5${className}`}>
      <Link to={`/details/${movie.id}`}>
        <img
          className={`object-fit ${imgClassName} w-full`}
          src={`${imgUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <p className="absolute top-2 right-2 rounded-full px-2 py-1 bg-amber-100 text-gray-900 font-bold text-[12px]">
          {movie.vote_average}
        </p>
      </Link>
      <button
        className="absolute bottom-3 right-2 flex justify-center items-center bg-white w-8 h-8  rounded-[50%]"
        onClick={handleLike}
      >
        {isLike ? (
          <FaHeart className="text-red-600 size-5" />
        ) : (
          <CiHeart className="size-4 text-black" />
        )}
      </button>
    </div>
  );
}
