import { useContext } from "react";
import { useLikeStore } from "../store/LikeMovie";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";

const getFavoriteMovies = (movies = [], likeMovie = []) => {
  return movies.filter((movie) => likeMovie.includes(movie.id));
};

const FavoriteMovie = () => {
  const { likeMovie } = useLikeStore();
  const { data, topRated } = useContext(MovieContext);

  const favoritePopular = getFavoriteMovies(data?.results, likeMovie);
  const favoriteTopRated = getFavoriteMovies(topRated?.results, likeMovie);

  const allFavoriteMovies = [...favoritePopular, ...favoriteTopRated];

  return (
    <div className="flex gap-5 flex-wrap justify-evenly">
      {allFavoriteMovies.length > 0 ? (
        allFavoriteMovies.map((el) => <MovieCard key={el.id} movie={el} />)
      ) : (
        <div className="w-full h-[250px] flex flex-col gap-3 justify-center items-center">
          <GrFavorite className="text-7xl" />
          <p className="text-xl">찜한 영화가 없어요...</p>
        </div>
      )}
    </div>
  );
};
export default FavoriteMovie;
