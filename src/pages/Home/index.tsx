import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { SwiperSlide } from "swiper/react";
import { MovieCard } from "../../components/Card";
import { DefaultSwiper } from "../../components/Swiper";
import { SwiperHeader } from "../../components/Swiper/SwiperHeader";
import { TMDB_IMG_BASE_URL } from "../../constants/apiUrls";
import { deviceSizes } from "../../constants/devices";
import { useWindowSize } from "../../hooks/useWindowSize";
import NetflixService from "../../services/movieService";
import { ITrendingMovies } from "../../types";
import * as S from "./styles";

export const HomePage = () => {
  const { data: trending } = useQuery<ITrendingMovies[]>(["trending"], () =>
    NetflixService.getTrending()
  );
  const { data: trendingAsianMovies } = useQuery<ITrendingMovies[]>(
    ["trendingAsianMovies"],
    () => NetflixService.getTrendingAsianMovies()
  );
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth > deviceSizes.tablet;
  const [current, setCurrent] = useState(0);
  const TOP3_TRENDING = trending?.slice(0, 3);
  const TOP30_TRENDING = trending?.slice(3, 33);
  const TOP20_TRENDING_ASIAN_MOVIES = trendingAsianMovies?.slice(0, 20);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return trending && trendingAsianMovies ? (
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
        {TOP3_TRENDING?.map((slide, index) => (
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
        <DefaultSwiper>
          <SwiperHeader title="Popular on Netflix" />
          {TOP30_TRENDING?.map((slide, index) => (
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
        </DefaultSwiper>
      </S.PopularMovieRow>
      <S.PopularMovieRow>
        <DefaultSwiper>
          <SwiperHeader title="Popular Asian Movies" />
          {TOP20_TRENDING_ASIAN_MOVIES?.map((slide, index) => (
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
        </DefaultSwiper>
      </S.PopularMovieRow>
    </S.Container>
  ) : (
    <></>
  );
};
