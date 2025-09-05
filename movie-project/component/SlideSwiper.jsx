// swiper 구현하기 위해 import
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";



export default function SlideSwiper ({movies}){
    return (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="h-[200px] "
            >

              <SwiperSlide>dfdfd</SwiperSlide>
              <SwiperSlide>dfdfd</SwiperSlide>
              {/* {movies.map((movie) => (
                <SwiperSlide
                  className="flex justify-center items-center"
                  key={movie.id}
                >
                  <MovieCard movie={movie} />
                </SwiperSlide>
              ))} */}
            </Swiper>
    )
}