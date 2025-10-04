import MovieCard from "./MovieCard";
import Loading from "./Loading";
import NoData from "./NoData";
import { MovieContext } from "../context/MovieContext";
import { useContext } from "react";
import CustomSwiper from "./CustomSwiper";
import { SwiperSlide } from "swiper/react";

// BEST MOVIES
export default function BestMovies() {
  const {
    topRated: movies,
    topRatedLoadin: loading,
    topRatedError: error,
  } = useContext(MovieContext);

  if (error) return <NoData />;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CustomSwiper className="w-screen">
            {movies?.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="flex justify-center items-center relative h-[490px]">
                  <div className="absolute inset-0 bg-black transition-opacity duration-700 opacity-0 lg:opacity-100" />
                  <MovieCard
                    movie={movie}
                    className={"mb-2 w-full max-w-[1000px] h-full"}
                    imgClassName={"h-[490px]"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </>
      )}
    </>
  );
}
