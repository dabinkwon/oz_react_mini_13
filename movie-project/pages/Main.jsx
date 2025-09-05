import { useContext } from "react";
import MovieCard from "../component/MovieCard";
import { MovieContext } from "../context/MovieContext";

// swiper 구현하기 위해 import
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

// import { Navigation } from "swiper/modules";

export default function Main() {
  const { data, loading, error } = useContext(MovieContext);
  // console.log(data)

  const movieForAll = data?.results.filter((el) => el.adult === false);

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
          {/* swiper 영역 나누기 */}
            {/* <Swiper
              navigation={true}
              modules={[Navigation]}
              className="h-[200px] "
            >
              <SwiperSlide>dfdfd</SwiperSlide> */}
              {/* <SwiperSlide>dfdfd</SwiperSlide> */}
              {/* <SwiperSlide>dfdfd</SwiperSlide>
              <SwiperSlide>dfdfd</SwiperSlide> */}
              {/* {movieForAll.map((movie) => (
                <SwiperSlide
                  className="flex justify-center items-center"
                  key={movie.id}
                >
                  <MovieCard movie={movie} />
                </SwiperSlide>
              ))} */}
            {/* </Swiper> */}


          <section className="flex flex-wrap justify-center items-center gap-5">
            {movieForAll.map((el) => (
              <MovieCard key={el.id} movie={el} />
            ))}
          </section>
        </>
      )}
    </>
  );
}
