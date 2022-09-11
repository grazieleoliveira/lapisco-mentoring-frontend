import { useSwiper } from "swiper/react";
import { deviceSizes } from "../../constants/devices";
import { useWindowSize } from "../../hooks/useWindowSize";
import * as S from "./styles";

interface SwiperHeaderProps {
  title: string;
}

export const SwiperHeader = ({ title }: SwiperHeaderProps) => {
  const swiper = useSwiper();
  const { windowWidth } = useWindowSize();

  const isDesktop = windowWidth > deviceSizes.tablet;
  const margin = isDesktop ? "4.8rem" : "2.4rem";

  return (
    <>
      <S.PopularRowHeader
        style={{
          top: 0,
          left: 0,
          margin: `0rem ${margin} 0rem 0rem`,
        }}
      >
        {title}
      </S.PopularRowHeader>
      <S.ArrowLeftContainer
        style={{
          top: 0,
          right: 0,
          margin: `0.4rem ${margin}`,
        }}
        onClick={() => swiper.slidePrev()}
      >
        <S.ArrowLeft
          size={isDesktop ? "3rem" : "1rem"}
          color="rgba(0, 0, 0, 0.8)"
        />
      </S.ArrowLeftContainer>
      <S.ArrowRightContainer
        style={{
          top: 0,
          right: 0,
          margin: "0.4rem 0rem",
        }}
        onClick={() => swiper.slideNext()}
      >
        <S.ArrowRight
          size={isDesktop ? "3rem" : "1rem"}
          color="rgba(255, 0, 0, 0.8)"
        />
      </S.ArrowRightContainer>
    </>
  );
};
