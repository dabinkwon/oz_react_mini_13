import { Link } from "react-router-dom";
import { imgUrl } from "../api/imgUrl";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useLikeStore } from "../store/LikeMovie";

export default function MovieCard({ movie }) {
  const { likeMovie, toggleLike } = useLikeStore();
  const isLike = likeMovie.includes(movie.id);
  console.log(likeMovie);

  const handleLike = (e) => {
    e.stopPropagation();
    toggleLike(movie.id);
  };
  return (
    <div className="relative flex flex-col text-center gap-1.5 w-[220px]  border-2 border-gray-400 rounded-2xl p-2 ">
      <Link to={`/details/${movie.id}`}>
        <img
          className="rounded-2xl h-[300px] object-cover"
          src={`${imgUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <p className="absolute top-2 right-2 rounded-full px-2 py-1 bg-amber-100 text-gray-900 font-bold text-[12px]">
          {movie.vote_average}
        </p>
      </Link>
      <button className="" onClick={handleLike}>
        {isLike ? <FaHeart className="text-red-600" /> : <CiHeart />}
      </button>
    </div>
  );
}
