// swiper 구현하기 위해 import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import MovieCard from "./MovieCard";
import Loading from "./Loading";
import NoData from "./NoData";
import { MovieContext } from "../context/MovieContext";
import { useContext } from "react";

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
        <div>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="w-screen"
          >
            {movies?.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="flex justify-center items-center relative w-full h-[450px]">
                  <div className="absolute inset-0 bg-black transition-opacity duration-700 opacity-0 lg:opacity-100" />
                  <MovieCard
                    movie={movie}
                    className={"mb-2 w-full lg:w-[90vw] h-full"}
                    imgClassName={"h-[500px]"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
