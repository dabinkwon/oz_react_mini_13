import { useNavigate } from "react-router-dom";
import { imgUrl } from "../url/imgUrl";

export default function MovieCard({ movie }) {
  const navigate = useNavigate()

  return (
      <div className="flex flex-col text-center gap-1.5 min-[200px] border-2 border-gray-400 rounded-2xl p-2"
      onClick={()=>navigate(`/details/${movie.id}`)}
      >
        <img
          className="w-full h-[276px] rounded-2xl"
          src={`${imgUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <p className="font-bold">{movie.title}</p>
        <p className="font-light text-[13px]">{movie.vote_average}</p>
      </div>
  );
}
