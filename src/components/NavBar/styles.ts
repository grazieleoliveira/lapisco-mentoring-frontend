import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  color: ${({ theme }) => theme.text};
`;

export const NetflixImage = styled.img`
  max-width: 100px;
`;

export const ImgContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
`;
