import * as S from "./styles";
import netflixImg from "../../assets/netflix.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import { deviceSizes } from "../../constants/devices";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "styled-components";

export const NavBar = () => {
  const { windowWidth } = useWindowSize();
  const theme = useTheme();
  return (
    <S.NavContainer>
      <S.ImgContainer>
        <S.NetflixImage src={netflixImg} />
      </S.ImgContainer>
      {windowWidth < deviceSizes.tablet ? (
        <S.HamburguerContainer>
          <GiHamburgerMenu color={theme.text} size="1.6rem" />
        </S.HamburguerContainer>
      ) : (
        <S.NavMenu>
          <S.List>
            <S.ListItem>
              <S.Clickable href="/home">Home</S.Clickable>
            </S.ListItem>
            <S.ListItem>
              <S.Clickable href="/about">About</S.Clickable>
            </S.ListItem>
            <S.ListItem>
              <S.Clickable href="/contact">Contact</S.Clickable>
            </S.ListItem>
          </S.List>
        </S.NavMenu>
      )}
    </S.NavContainer>
  );
};
