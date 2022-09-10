import styled from "styled-components";

export const HamburguerContainer = styled.div`
  margin-left: auto;
  padding-right: 2rem;
`;

export const NavContainer = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  color: ${({ theme }) => theme.text};
`;

export const NavMenu = styled.div``;

export const List = styled.ul`
  display: flex;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin: 0 1rem;
`;

export const Clickable = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  display: block;
  width: 100%;
`;

export const NetflixImage = styled.img`
  max-width: 100px;
`;

export const ImgContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
`;
export const MobileSwitchContainer = styled.div``;
export const DesktopSwitchContainer = styled.div`
  margin-left: auto;
  padding-right: 2rem;
`;
