import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`;

export const NavMenu = styled.div`
`;

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
  display: block;
  width: 100%;
`;

export const NetflixImage = styled.img`
    max-width: 100px;
`;

export const ImgContainer = styled.div`
    padding-left: 2rem;
    display: flex;

`;