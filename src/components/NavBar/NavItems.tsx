import { useLocation } from "react-router-dom";
import { navbarItems } from "../../constants/navbarItems";
import * as S from "./styles";

export const NavItems = () => {
  const { pathname } = useLocation();
  return (
    <>
      {navbarItems.map(({ route, name }) => (
        <S.ListItem>
          <S.Clickable
            style={{ fontWeight: pathname === route ? "bold" : "normal" }}
            to={route}
          >
            {name}
          </S.Clickable>
        </S.ListItem>
      ))}
    </>
  );
};
