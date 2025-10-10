// swiper 구현하기 위해 import
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const CustomSwiper = ({
  children,
  spaceBetween = 30,
  slidesPerView = 1,
  breakpoints = {},
  autoplay = true,
  pagination = true,
  className = "",
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      pagination={pagination ? { clickable: true } : false}
      modules={[Pagination, Autoplay]}
      autoplay={
        autoplay
          ? {
              delay: 4000,
              disableOnInteraction: false,
            }
          : false
      }
      className={className}
    >
      {children}
    </Swiper>
  );
};
export default CustomSwiper;
