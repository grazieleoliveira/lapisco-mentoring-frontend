import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";
import { deviceSizes } from "../../constants/devices";
import { useWindowSize } from "../../hooks/useWindowSize";

import "swiper/css";

export const DefaultSwiper = ({ children, ...props }: SwiperProps) => {
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth > deviceSizes.tablet;
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={"auto"}
      spaceBetween={40}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{
        display: "flex",
        position: "relative",
        padding: isDesktop ? "6rem" : "3rem",
      }}
      draggable
      loop
      breakpoints={{
        [deviceSizes.mobileS]: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        [deviceSizes.tablet]: {
          slidesPerView: 3.2,
          spaceBetween: 40,
        },
        [deviceSizes.laptop]: {
          slidesPerView: 5.2,
          spaceBetween: 40,
        },
        [deviceSizes.laptopL]: {
          slidesPerView: 6.2,
          spaceBetween: 40,
        },
      }}
      {...props}
    >
      {children}
    </Swiper>
  );
};
