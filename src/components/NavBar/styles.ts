import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 3.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const NetflixImage = styled.img`
  max-width: 6rem;
`;

export const ImgContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin: 0 1rem;
`;

export const Clickable = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  display: block;
  width: 100%;
`;
