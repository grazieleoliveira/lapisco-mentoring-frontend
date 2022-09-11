import styled from "styled-components";
import { deviceSizes } from "../../constants/devices";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-bottom: 1rem;
`;

export const FooterText = styled.text`
  font-size: 1.6rem;
  font-weight: 500;
  @media (max-width: ${deviceSizes.tablet}px) {
    font-size: 0.8rem;
  }
`;
