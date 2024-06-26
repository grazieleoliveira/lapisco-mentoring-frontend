import { useLocation } from "react-router-dom";
import { navbarItems } from "../../constants/navbarItems";
import * as S from "./styles";

interface INavItems {
  closeNavbar?: () => void;
}

export const NavItems = ({ closeNavbar }: INavItems) => {
  const { pathname } = useLocation();

  return (
    <>
      {navbarItems.map(({ route, name }) => (
        <S.ListItem>
          <S.Clickable
            style={{ fontWeight: pathname === route ? "bold" : "normal" }}
            to={route}
            onClick={closeNavbar && closeNavbar}
          >
            {name}
          </S.Clickable>
        </S.ListItem>
      ))}
    </>
  );
};
