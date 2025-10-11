import { useContext, useEffect, useRef, useState } from "react";
import MovieCard from "../component/MovieCard";
import { PopularMovieContext } from "../context/MovieContext";
import BestMovies from "../component/BestMovies";
import Loading from "../component/Loading";
import NoData from "../component/NoData";
import LikeButton from "../component/LikeButton";
import DetailButton from "../component/DetailButton";

export default function Main() {
  const { data, page, setPage, loading, error } =
    useContext(PopularMovieContext);
  const [movies, setMovie] = useState([]);
  const observerRef = useRef();
  const [hasNextPage, setHasNextPage] = useState(false);
  const [pageParams, setPageParams] = useState([]); // page history관리

  useEffect(() => {
    if (data?.results) {
      if (pageParams.includes(page)) return;
      setMovie((prev) => [
        ...prev,
        ...data.results.filter((el) => el.adult === false),
      ]);
      setPageParams((prev) => [...prev, page]);
      setHasNextPage(data.page < data.total_pages);
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && hasNextPage && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (observerRef.current) observer.observe(observerRef.current);
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasNextPage, observerRef, setPage]);

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
        <h1 ref={observerRef}>Loading more</h1>
      </div>
    </>
  );
}
