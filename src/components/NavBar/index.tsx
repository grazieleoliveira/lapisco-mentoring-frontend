import * as S from "./styles";
import netflixImg from "../../assets/netflix.png";
import { useWindowSize } from "../../hooks/useWindowSize";

export const NavBar = () => {
  const { windowWidth } = useWindowSize();
  return (
    <S.NavContainer>
      <S.ImgContainer>
        <S.NetflixImage src={netflixImg} />
      </S.ImgContainer>
      {windowWidth < 800 ? (
        <button>sdfkosdfodsfkodfs</button>
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
