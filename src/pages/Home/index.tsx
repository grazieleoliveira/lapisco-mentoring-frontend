import React, { useState } from "react";
import { useQuery } from "react-query";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MovieCard } from "../../components/Card";
import { TMDB_IMG_BASE_URL } from "../../constants/apiUrls";
import { deviceSizes } from "../../constants/devices";
import { useWindowSize } from "../../hooks/useWindowSize";
import NetflixService from "../../services/movieService";
import { ITrendingMovies } from "../../types";
import * as S from "./styles";

import "swiper/css";
import "swiper/css/navigation";

export const HomePage = () => {
  const { data: trending } = useQuery<ITrendingMovies[]>(["trending"], () =>
    NetflixService.getTrending()
  );
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth > deviceSizes.tablet;

  const [current, setCurrent] = useState(0);
  const TOP3 = trending?.slice(0, 3);
  const TOP30 = trending?.slice(3, 33);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return trending ? (
    <S.Container>
      <S.PopularMovieContainer>
        <S.ArrowLeftContainer onClick={prevSlide}>
          <S.ArrowLeft
            size={isDesktop ? "3rem" : "1rem"}
            color="rgba(255, 0, 0, 0.8)"
          />
        </S.ArrowLeftContainer>
        <S.ArrowRightContainer onClick={nextSlide}>
          <S.ArrowRight
            size={isDesktop ? "3rem" : "1rem"}
            color="rgba(255, 0, 0, 0.8)"
          />
        </S.ArrowRightContainer>
        {TOP3?.map((slide, index) => (
          <>
            {index === current && (
              <React.Fragment key={index}>
                <S.PopularMovieImg
                  src={`${TMDB_IMG_BASE_URL}/${slide.backdrop_path}`}
                  alt="most_popular_movie"
                />
                <S.PopularMovieName>
                  {slide.title ? slide.title : slide.name}
                </S.PopularMovieName>
              </React.Fragment>
            )}
          </>
        ))}
      </S.PopularMovieContainer>
      <S.PopularMovieRow>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={"auto"}
          spaceBetween={40}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{
            padding: 32,
          }}
          loop
          breakpoints={{
            [deviceSizes.mobileS]: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            [deviceSizes.tablet]: {
              slidesPerView: 3.2,
            },
            [deviceSizes.laptop]: {
              slidesPerView: 5.2,
            },
            [deviceSizes.laptopL]: {
              slidesPerView: 6.2,
            },
          }}
        >
          {TOP30?.map((slide, index) => (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                height: "auto",
              }}
            >
              <MovieCard
                grade={String(slide.vote_average)}
                title={slide.title ? slide.title : slide.name}
                releaseDate={
                  slide.release_date ? slide.release_date : slide.first_air_date
                }
                poster={`${TMDB_IMG_BASE_URL}/${slide.backdrop_path}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.PopularMovieRow>
    </S.Container>
  ) : (
    <></>
  );
};
