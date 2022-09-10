import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavMenu = styled.div``;

export const List = styled.ul`
  display: flex;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin: 0 1rem;
`;

export const Clickable = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  display: block;
  width: 100%;
`;
export const DesktopSwitchContainer = styled.div`
  margin-left: auto;
  padding-right: 2rem;
`;
