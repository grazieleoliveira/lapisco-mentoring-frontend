import * as S from "./styles";
import netflixImg from "../../assets/netflix.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import { deviceSizes } from "../../constants/devices";
import { MobileNav } from "./MobileNav";
import { INavbar } from "./types";
import { DesktopNav } from "./DesktopNav";

export const NavBar = ({ toggleTheme }: INavbar) => {
  const { windowWidth } = useWindowSize();
  return (
    <S.NavContainer>
      <S.ImgContainer>
        <S.NetflixImage src={netflixImg} />
      </S.ImgContainer>
      {windowWidth < deviceSizes.tablet ? (
        <MobileNav toggleTheme={toggleTheme} />
      ) : (
        <DesktopNav toggleTheme={toggleTheme} />
      )}
    </S.NavContainer>
  );
};
