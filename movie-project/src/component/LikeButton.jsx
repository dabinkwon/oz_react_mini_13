import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useLikeStore } from "../store/LikeMovie";

const LikeButton = ({ movie, className, heartSize = "size-5" }) => {
  const { likeMovie, toggleLike } = useLikeStore();
  const isLike = likeMovie.includes(movie.id);

  const handleLike = (e) => {
    e.stopPropagation();
    toggleLike(movie.id);
  };

  const likeClassName = `flex justify-center w-full ${heartSize} m-0.5 cursor-pointer`;

  return (
    <button className={className} onClick={handleLike}>
      {isLike ? (
        <FaHeart className={`text-red-500 ${likeClassName}`} />
      ) : (
        <CiHeart className={`text-black dark:text-white ${likeClassName}`} />
      )}
    </button>
  );
};

export default LikeButton;
