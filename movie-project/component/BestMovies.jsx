// swiper 구현하기 위해 import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
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
          <h1 className="text-xl text-center p-2">꼭 봐야 할 영화</h1>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="h-auto w-[90vw]"
            slidesPerView={2}
            spaceBetween={5}
            breakpoints={{
              735: { slidesPerView: 3, spaceBetween: 10 },
              930: { slidesPerView: 4, spaceBetween: 10 },
              1200: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {movies?.results.map((movie) => (
              <SwiperSlide className="w-[200px]" key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
