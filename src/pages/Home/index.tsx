import { useQuery } from "react-query";
import { TMDB_IMG_BASE_URL } from "../../constants/apiUrls";
import NetflixService from "../../services/movieService";
import { ITrendingMovies } from "../../types";
import * as S from "./styles";

export const HomePage = () => {
  const { data: trending } = useQuery<ITrendingMovies[]>(["trending"], () =>
    NetflixService.getTrending()
  );

  return (
    <div>
      <S.PopularMovieContainer>
        {trending && (
          <>
            <S.PopularMovieImg
              src={`${TMDB_IMG_BASE_URL}/${trending[0].backdrop_path}`}
              alt="most_popular_movie"
            />
            <S.PopularMovieName>{trending[0].title}</S.PopularMovieName>
          </>
        )}
      </S.PopularMovieContainer>
    </div>
  );
};
