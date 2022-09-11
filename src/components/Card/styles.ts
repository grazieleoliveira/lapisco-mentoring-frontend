import { MdStar } from "react-icons/md";
import styled from "styled-components";
import { deviceSizes } from "../../constants/devices";

export const MovieCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 14rem;
  height: 21rem;
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: 0px 0px 10px 4px ${({ theme }) => theme.colors.boxShadow};
  padding: 0.7rem;
  border-radius: 1.2rem;
  @media (max-width: ${deviceSizes.tablet}px) {
    max-width: 7rem;
    height: 10.5rem;
    padding: 0.35rem;
    border-radius: 0.6rem;
  }
`;

export const Poster = styled.img`
  width: 100%;
  min-height: 14rem;
  object-fit: cover;
  border-radius: 1.2rem;

  @media (max-width: ${deviceSizes.tablet}px) {
    min-height: 7rem;
    border-radius: 0.6rem;
  }
`;

export const GradeAndDateRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1rem;
  justify-content: flex-start;
  gap: 1rem;
  @media (max-width: ${deviceSizes.tablet}px) {
    padding-top: 0.5rem;
  }
`;

export const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.mustard};
  background-color: ${({ theme }) => theme.colors.gradeBg};
  border-radius: 0.5rem;
  padding: 0.2rem;
  gap: 0.25rem;
  @media (max-width: ${deviceSizes.tablet}px) {
    padding: 0.1rem;
    gap: 0.125rem;
    border-radius: 0.25rem;
  }
`;

export const StarIcon = styled(MdStar)`
  color: ${({ theme }) => theme.colors.mustard};
  font-size: 1.2rem;
  align-self: center;
  text-align: center;
  @media (max-width: ${deviceSizes.tablet}px) {
    font-size: 0.6rem;
  }
`;

export const Grade = styled.text`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  align-self: center;
  text-align: center;
  @media (max-width: ${deviceSizes.tablet}px) {
    font-size: 0.6rem;
  }
`;

export const Title = styled.text`
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  height: 100%;
  flex-direction: column-reverse;
  @media (max-width: ${deviceSizes.tablet}px) {
    font-size: 0.8rem;
  }
`;

export const ReleaseDate = styled.text`
  font-weight: normal;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};
  @media (max-width: ${deviceSizes.tablet}px) {
    font-size: 0.5rem;
  }
`;
