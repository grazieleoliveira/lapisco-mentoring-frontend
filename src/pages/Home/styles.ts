import styled from "styled-components";

export const PopularMovieContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  display: flex;
`;

export const PopularMovieImg = styled.img`
  width: 100%;
  max-height: 36rem;
  object-fit: cover;
  border-radius: 3rem;
`;

export const PopularMovieName = styled.h1`
  font-size: 80px;
  color: white;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  margin: auto;
`;
