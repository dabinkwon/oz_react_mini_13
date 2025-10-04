import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useLikeStore } from "../store/LikeMovie";

const LikeButton = ({ movie }) => {
  const { likeMovie, toggleLike } = useLikeStore();
  const isLike = likeMovie.includes(movie.id);

  const handleLike = (e) => {
    e.stopPropagation();
    toggleLike(movie.id);
  };

  const likeClassName = "flex justify-center w-full size-5 m-0.5";

  return (
    <button
      className="rounded-sm border-2 w-[49%] border-[rgb(152,151,151)]"
      onClick={handleLike}
    >
      {isLike ? (
        <FaHeart className={`text-red-600 ${likeClassName}`} />
      ) : (
        <CiHeart className={`text-black dark:text-white ${likeClassName}`} />
      )}
    </button>
  );
};

export default LikeButton;
