import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { deviceSizes } from "../../constants/devices";

export const ArrowLeftContainer = styled.a`
  text-align: left;
  position: absolute;
  top: 0;
  bottom: 0;
  height: fit-content;
  margin: auto;
  padding-left: 1rem;
  z-index: 1;
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
  z-index: 1;
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

export const PopularRowHeader = styled.text`
  position: absolute;
  margin: auto;
  font-size: 2.8rem;
  font-weight: bold;
  @media (max-width: ${deviceSizes.tablet}px) {
    font-size: 1.4rem;
  }
`;
