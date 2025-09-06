import { useContext } from "react";
import MovieCard from "../component/MovieCard";
import { MovieContext } from "../context/MovieContext";
import BestMovies from "../component/BestMovies";


export default function Main() {
  const { data, loading, error,topRated,topRatedLoadin,topRatedError } = useContext(MovieContext);
console.log(data)
  const movies = data?.results.filter((el) => el.adult === false);


  if (error)
    return (
      <div className="text-center font-bold text-3xl pt-10">
        Error : 페이지를 찾 을 수 없습니다.
      </div>
    );

  return (
    <>
      {loading ? (
        // 로딩 중
        <div className="flex justify-center items-center w-full h-screen">
          <div className="w-14 h-14 border-4 border-white rounded-full border-t-transparent"></div>
        </div>
      ) : (
        <>
        <BestMovies movies={topRated} loading={topRatedLoadin} error={topRatedError}/>

          <section className="flex flex-wrap justify-center items-center gap-5">
            {movies.map((el) => (
              <MovieCard key={el.id} movie={el} />
            ))}
          </section>
        </>
      )}
    </>
  );
}
