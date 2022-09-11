import React, { useState } from "react";
import { useQuery } from "react-query";
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
  const { windowWidth } = useWindowSize();
  const isDesktop = windowWidth > deviceSizes.tablet;

  const [current, setCurrent] = useState(0);
  const TOP3 = trending?.slice(0, 3);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <div>
      <S.PopularMovieContainer>
        {trending && (
          <>
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
          </>
        )}
      </S.PopularMovieContainer>
    </div>
  );
};
