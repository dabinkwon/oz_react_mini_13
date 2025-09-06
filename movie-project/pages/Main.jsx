import { useContext } from "react";
import MovieCard from "../component/MovieCard";
import { MovieContext } from "../context/MovieContext";
import BestMovies from "../component/BestMovies";
import Loading from "../component/Loading";
import NoData from "../component/NoData";


export default function Main() {
  const { data, loading, error,topRated,topRatedLoadin,topRatedError } = useContext(MovieContext);
console.log(data)
  const movies = data?.results.filter((el) => el.adult === false);


  if (error)
    return (
      <NoData/>
    );

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <div className="flex flex-col gap-10 justify-center items-center">
        <BestMovies movies={topRated} loading={topRatedLoadin} error={topRatedError}/>
          <div>
          <h2 className="text-xl p-2 text-center">인기 영화</h2>
          <section className="flex flex-wrap justify-center items-center gap-5 ">
            {movies.map((el) => (
              <MovieCard key={el.id} movie={el} />
            ))}
          </section>

          </div>
        </div>
      )}
    </>
  );
}
