import styled from "styled-components";
import { deviceSizes } from "../../constants/devices";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Container = styled.div`
  margin: 2rem;

  @media (max-width: ${deviceSizes.tablet}px) {
    margin: 1rem;
  }
`;

export const PopularMovieContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 3rem;
  display: flex;
  box-shadow: 0px 0px 40px 15px ${({ theme }) => theme.colors.boxShadow};
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* W3C */
  user-select: none;
`;

export const PopularMovieImg = styled.img`
  @keyframes change-color {
    0% {
      transform: scale(1.5);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  width: 100%;
  transform: scale(1);
  opacity: 1;
  max-height: 28rem;
  object-fit: cover;
  border-radius: 3rem;
  z-index: -1;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  animation-name: change-color;
  animation-duration: 1.2s;
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
  padding-left: 6rem;
  padding-right: 24rem;
  font-family: ${({ theme }) => theme.fonts.josefinSans};
  @media (max-width: ${deviceSizes.tablet}px) {
    font-size: 1rem;
    padding-left: 2.8rem;
    padding-right: 8.4rem;
  }
`;

export const ArrowLeftContainer = styled.a`
  text-align: left;
  position: absolute;
  top: 0;
  bottom: 0;
  height: fit-content;
  margin: auto;
  padding-left: 1rem;
  z-index: 2;
  cursor: pointer;
`;
export const ArrowRightContainer = styled.a`
  text-align: right;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: fit-content;
  margin: auto;
  padding-right: 1rem;
  z-index: 2;
  cursor: pointer;
`;

export const ArrowLeft = styled(IoIosArrowBack)`
  background-color: #fff;
  padding: 0.5rem;
  box-shadow: 0px 0px 20px 8px rgba(255, 255, 255, 0.3);
  border-radius: 1rem;

  @media (max-width: ${deviceSizes.tablet}px) {
    border-radius: 0.3rem;
    padding: 0.2rem;
  }
`;

export const ArrowRight = styled(IoIosArrowForward)`
  background-color: #fff;
  padding: 0.5rem;
  box-shadow: 0px 0px 20px 8px rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  @media (max-width: ${deviceSizes.tablet}px) {
    border-radius: 0.3rem;
    padding: 0.2rem;
  }
`;

export const PopularMovieRow = styled.div`
  display: flex;
  flex-direction: row;
`;
