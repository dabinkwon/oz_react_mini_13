// swiper 구현하기 위해 import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";
import useFetch from "../hooks/useFetch";
import { apiKey } from "../api/apiConfig";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

// BEST MOVIES
export default function BestMovies() {
    const [movies] = useFetch('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1', options)

  return (
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
  );
}
