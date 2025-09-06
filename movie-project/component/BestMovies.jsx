// swiper 구현하기 위해 import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import NoData from "./NoData";


// BEST MOVIES
export default function BestMovies({movies,loading,error}) {

  if (error)
    return (
      <NoData/>
    );

  return (
    <>
    {loading ?
      (
       <Loading/>
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="h-auto w-[95vw]"
          slidesPerView={4}
            spaceBetween={30}
        >
          {movies?.results.map((movie) => (
                    <SwiperSlide
                      className=""
                      key={movie.id}
                    >
                      <MovieCard movie={movie} />
                    </SwiperSlide>
                  ))}
        </Swiper>

      )
    }
    </>
  );
}
