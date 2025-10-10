import { useContext } from "react";
import MovieCard from "../component/MovieCard";
import { MovieContext } from "../context/MovieContext";
import BestMovies from "../component/BestMovies";
import Loading from "../component/Loading";
import NoData from "../component/NoData";
import LikeButton from "../component/LikeButton";
import DetailButton from "../component/DetailButton";

export default function Main() {
  const { data, loading, error } = useContext(MovieContext);
  const movies = data?.results.filter((el) => el.adult === false);

  if (error) return <NoData />;

  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center">
        <BestMovies />
        <h2 className="text-xl text-center">인기 영화</h2>
        {loading ? (
          <Loading width="250px" height="360px" count={8} />
        ) : (
          <section className="flex flex-wrap justify-center items-center gap-8">
            {movies.map((el) => (
              <MovieCard
                key={el.id}
                movie={el}
                className={"w-[250px] h-[360px]"}
                imgClassName={"h-[340px] rounded-md"}
                likeButton={
                  <LikeButton
                    movie={el}
                    className={
                      "rounded-sm border-2 w-[49%] border-[rgb(152,151,151)]"
                    }
                  />
                }
                detailButton={<DetailButton movie={el} />}
              />
            ))}
          </section>
        )}
      </div>
    </>
  );
}
