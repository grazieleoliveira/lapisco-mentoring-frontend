import styled from "styled-components";
import { deviceSizes } from "../../constants/devices";

export const PopularMovieContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 2rem;
  border-radius: 3rem;
  display: flex;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* W3C */
`;
export const PopularMovieImg = styled.img`
  width: 100%;
  max-height: 36rem;
  object-fit: cover;
  border-radius: 3rem;
  z-index: -1;
`;

export const PopularMovieName = styled.h1`
  font-size: 4rem;
  color: white;
  text-align: left;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  margin: auto;
  padding-left: 4rem;
  padding-right: 8rem;
  font-family: ${({ theme }) => theme.fonts.josefinSans};
  @media (max-width: ${deviceSizes.tablet}px) {
    font-size: 1rem;
    padding-left: 1.2rem;
    padding-right: 2.4rem;
  }
`;
