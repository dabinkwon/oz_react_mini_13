import { originImgUrl } from "../api/imgUrl";
import CustomSwiper from "./CustomSwiper";
import { SwiperSlide } from "swiper/react";

const DetailPeople = ({ actors }) => {
  return (
    <div className="mt-8 p-4 bg-white/90 rounded-xl text-black">
      <h2 className="text-2xl font-bold mb-4">출연진</h2>
      <CustomSwiper
        spaceBetween={20}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
        }}
        autoplay={false}
        className="w-[90vw]"
      >
        {actors.map((actor, index) => (
          <SwiperSlide key={index} className="text-center ">
            {actor.profile_path && (
              <img
                src={`${originImgUrl}${actor.profile_path}`}
                alt={actor.name}
                className="w-32 h-32 object-cover rounded-full mb-2"
              />
            )}
            <p className="font-semibold text-sm text-center">{actor.name}</p>
            <p className="text-xs text-gray-600 mb-13">{actor.character}</p>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};

export default DetailPeople;
