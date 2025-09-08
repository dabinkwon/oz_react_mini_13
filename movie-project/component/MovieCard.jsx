import { Link } from "react-router-dom";
import { imgUrl } from "../api/imgUrl";

export default function MovieCard({ movie }) {

  return (
    <Link to={`/details/${movie.id}`}>
      <div 
      className=" relative flex flex-col text-center gap-1.5 w-[220px]  border-2 border-gray-400 rounded-2xl p-2 ">
        <img
          className="rounded-2xl h-[300px] object-cover"
          src={`${imgUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        {/* <p className="font-bold">{movie.title}</p> */}
        <p className="absolute top-2 right-2 rounded-full px-2 py-1 bg-amber-100 text-gray-900 font-bold text-[12px]">{movie.vote_average}</p>
      </div>
    </Link>
  );
}
