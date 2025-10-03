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
import BannerSide from "./BannerSide";

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
            spaceBetween={30}
            breakpoints={2}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="w-[80vw]"
          >
            {movies?.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="flex justify-center items-center relative w-full h-[450px] lg:bg-black">
                  <MovieCard
                    movie={movie}
                    className={
                      "mb-2 w-[450px] md:w-[60vw] max-w-[800px] h-full"
                    }
                    imgClassName={"h-[450px]"}
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
