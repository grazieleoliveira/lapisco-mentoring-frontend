import * as S from "./styles";

interface IMovieCard {
  releaseDate: string;
  grade: string;
  title: string;
  poster: string;
  onClick: () => void;
}

export const MovieCard = ({
  releaseDate,
  grade,
  title,
  poster,
  onClick,
}: IMovieCard) => {
  return (
    <S.MovieCardContainer onClick={onClick}>
      <S.Poster src={poster} />
      <S.GradeAndDateRow>
        <S.GradeContainer>
          <S.StarIcon />
          <S.Grade>{Math.floor(Number(grade) * 100) / 100}</S.Grade>
        </S.GradeContainer>
        <S.ReleaseDate>{releaseDate}</S.ReleaseDate>
      </S.GradeAndDateRow>
      <S.Title>{title}</S.Title>
    </S.MovieCardContainer>
  );
};
